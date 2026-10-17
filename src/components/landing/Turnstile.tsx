"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let loader: Promise<void> | null = null;
function loadScript() {
  loader ??= new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      loader = null;
      reject(new Error("turnstile failed to load"));
    };
    document.head.appendChild(s);
  });
  return loader;
}

export const turnstileEnabled = Boolean(SITE_KEY);

// Cloudflare's invisible-by-default bot check. Renders nothing until
// NEXT_PUBLIC_TURNSTILE_SITE_KEY is set.
export default function Turnstile({ onToken }: { onToken: (token: string | undefined) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const cb = useRef(onToken);
  cb.current = onToken;

  useEffect(() => {
    if (!SITE_KEY || !ref.current) return;
    let id: string | undefined;
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !ref.current || !window.turnstile) return;
        id = window.turnstile.render(ref.current, {
          sitekey: SITE_KEY,
          theme: "dark",
          appearance: "interaction-only",
          callback: (t: string) => cb.current(t),
          "expired-callback": () => cb.current(undefined),
          "error-callback": () => cb.current(undefined),
        });
      })
      .catch(() => cb.current(undefined));
    return () => {
      cancelled = true;
      if (id) window.turnstile?.remove(id);
    };
  }, []);

  if (!SITE_KEY) return null;
  return <div ref={ref} />;
}
