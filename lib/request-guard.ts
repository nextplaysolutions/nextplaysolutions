import { createHash } from "node:crypto";

// Per-instance backstop. Distributed enforcement belongs in the Vercel firewall.
const windows = new Map<string, { count: number; expires: number }>();
export function guardRequest(request: Request, bucket: string, limit: number) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return Response.json({ error: "Invalid origin." }, { status: 403 });
  const ip = request.headers.get("x-vercel-forwarded-for") || request.headers.get("x-forwarded-for") || "unknown";
  const key = createHash("sha256").update(`${bucket}:${ip}`).digest("hex");
  const now = Date.now();
  for (const [k, value] of windows) if (value.expires <= now) windows.delete(k);
  if (windows.size > 10000) return Response.json({ error: "Please try again shortly." }, { status: 429 });
  const current = windows.get(key) || { count: 0, expires: now + 60000 };
  current.count++;
  windows.set(key, current);
  if (current.count > limit) return Response.json({ error: "Please wait a minute before trying again." }, { status: 429, headers: { "Retry-After": "60" } });
  if (Number(request.headers.get("content-length")) > 70000) return Response.json({ error: "Request too large." }, { status: 413 });
  return null;
}
