"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { partnerSignupSchema, type PartnerSignupData } from "@/src/lib/validation";
import { trackEvent } from "@/src/lib/analytics";
import Turnstile from "./Turnstile";

type Status = "idle" | "submitting" | "done" | "error";

const TYPES: { value: PartnerSignupData["businessType"]; label: string }[] = [
  { value: "restaurant", label: "Restaurant" },
  { value: "bar", label: "Bar" },
  { value: "wine_shop", label: "Wine shop" },
  { value: "other", label: "Something else" },
];

const INPUT =
  "h-12 w-full rounded-xl border border-white/[0.18] bg-vv-surface px-4 text-base text-vv-text placeholder:text-vv-text3 focus:border-vv-stroke focus:outline-none";

function Field({
  id,
  label,
  optional,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
        {optional && <span className="font-normal text-vv-text3"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

export default function PartnerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState<string>();
  const shownAt = useRef(0);
  useEffect(() => {
    shownAt.current = Date.now();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = partnerSignupSchema.safeParse(raw);
    if (!parsed.success) {
      setStatus("error");
      setMessage(parsed.error.errors[0]?.message ?? "Please check the form");
      return;
    }

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/partner-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, elapsedMs: Date.now() - shownAt.current, turnstileToken: token }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("done");
        trackEvent("partner_signup_completed", "conversion", parsed.data.businessType);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "done") {
    return (
      <div role="status" className="rounded-[20px] border border-vv-stroke/45 bg-purple-500/[0.16] p-7">
        <div className="text-lg font-bold">Thanks. We&apos;ll be in touch.</div>
        <p className="mt-2 text-vv-text2">
          We read every one of these ourselves and will reach out to set things up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5 rounded-[20px] bg-vv-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="businessName" label="Name of your place">
          <input id="businessName" name="businessName" autoComplete="organization" className={INPUT} />
        </Field>
        <Field id="businessType" label="What kind of place">
          <select id="businessType" name="businessType" defaultValue="" className={INPUT}>
            <option value="" disabled>
              Choose one
            </option>
            {TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="city" label="City">
          <input id="city" name="city" autoComplete="address-level2" className={INPUT} />
        </Field>
        <Field id="contactName" label="Your name">
          <input id="contactName" name="contactName" autoComplete="name" className={INPUT} />
        </Field>
        <Field id="role" label="Your role" optional>
          <input id="role" name="role" autoComplete="organization-title" placeholder="Owner, GM, sommelier" className={INPUT} />
        </Field>
        <Field id="email" label="Email">
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" className={INPUT} />
        </Field>
        <Field id="phone" label="Phone" optional>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={INPUT} />
        </Field>
      </div>
      <Field id="message" label="Anything we should know" optional>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="How your wine program works, when service is busiest, what you'd want from this"
          className={`${INPUT} h-auto py-3`}
        />
      </Field>

      {/* Honeypot, hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Turnstile onToken={setToken} />

      {message && (
        <p role="alert" className="text-sm text-[#F9A8D4]">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="h-14 rounded-[14px] bg-vv-primary px-[26px] text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:self-start"
      >
        {status === "submitting" ? "Sending..." : "I'm interested"}
      </button>
    </form>
  );
}
