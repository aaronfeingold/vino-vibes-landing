import type { NextRequest } from "next/server";

// Cheap layers that stop most scripted signups before they reach the database
// or send an email. None of them is enough alone; together they raise the cost.

export function clientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

// Reject cross-site posts. Browsers always send Origin on a POST from fetch,
// so a missing or foreign Origin means a script, not our form.
export function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

// Read a JSON body with a hard size cap, so nobody can post megabytes at us.
export async function readJson(request: NextRequest, maxBytes = 8_192): Promise<unknown> {
  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > maxBytes) throw new BodyTooLarge();
  const text = await request.text();
  if (text.length > maxBytes) throw new BodyTooLarge();
  return JSON.parse(text);
}

export class BodyTooLarge extends Error {}

// Fixed-window limiter held in memory. On serverless each instance has its own
// map, so this is best effort; the Vercel Firewall rate-limit rule is the real
// ceiling. It still stops one client hammering a warm instance.
const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.resetAt <= now) {
    if (hits.size > 10_000) hits.clear();
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  entry.count += 1;
  return entry.count <= limit;
}

// Cloudflare Turnstile. Off until TURNSTILE_SECRET_KEY is set, so the form keeps
// working before the keys exist.
export async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

// Humans take more than a moment between the form appearing and pressing submit.
export const MIN_FILL_MS = 1_200;
