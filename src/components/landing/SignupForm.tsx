"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { emailSchema } from "@/src/lib/validation";
import { analytics } from "@/src/lib/analytics";
import Turnstile from "./Turnstile";

type Status = "idle" | "submitting" | "done" | "error";

export default function SignupForm({
  label,
  source,
  stretchButton = false,
}: {
  label: string;
  source: "hero" | "join";
  stretchButton?: boolean;
}) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [token, setToken] = useState<string>();
  const shownAt = useRef(0);
  useEffect(() => {
    shownAt.current = Date.now();
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email.trim());
    if (!parsed.success) {
      setStatus("error");
      setMessage(parsed.error.errors[0]?.message ?? "Please enter a valid email address");
      analytics.betaSignup.emailEntered(false);
      return;
    }

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/beta-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: parsed.data,
          website: honeypot || undefined,
          elapsedMs: Date.now() - shownAt.current,
          turnstileToken: token,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("done");
        analytics.betaSignup.submitted(false);
        analytics.betaSignup.completed();
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        analytics.betaSignup.submitted(true);
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
      analytics.error.apiError("beta-signup", `network_${source}`);
    }
  };

  if (status === "done") {
    return (
      <div
        role="status"
        className="w-full rounded-[14px] border border-vv-stroke/45 bg-purple-500/[0.16] px-[18px] py-4 text-base font-semibold text-vv-text"
      >
        You&apos;re on the list. We will email you when your invite is ready.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex w-full flex-col gap-2">
      <div className="flex w-full flex-wrap gap-2.5">
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby={message ? `${id}-msg` : undefined}
          disabled={status === "submitting"}
          className="h-12 min-w-0 flex-[1_1_240px] rounded-xl border border-white/[0.18] bg-vv-surface px-[18px] text-base text-vv-text placeholder:text-vv-text3 focus:border-vv-stroke focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`h-12 rounded-xl bg-vv-primary px-6 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 ${
            stretchButton ? "flex-auto" : "flex-auto sm:flex-none"
          }`}
        >
          {status === "submitting" ? "Joining..." : label}
        </button>
      </div>
      {/* Honeypot, hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input
          id={`${id}-website`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
      <Turnstile onToken={setToken} />
      {message && (
        <p id={`${id}-msg`} role="alert" className="text-sm text-[#F9A8D4]">
          {message}
        </p>
      )}
    </form>
  );
}
