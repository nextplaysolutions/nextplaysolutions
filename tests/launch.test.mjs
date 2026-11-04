import assert from "node:assert/strict";
import { test } from "node:test";
import { guardRequest } from "../lib/request-guard.ts";
import { validateLead } from "../lib/lead.ts";
import { upsertContact } from "../lib/ghl.ts";

const lead = { name: "QA Test", email: "qa@example.com", phone: "4025550100", businessType: "Other" };
const request = (headers = {}) => new Request("https://nextplaysolutions.ai/api/demo-lead", {
  method: "POST", headers: { origin: "https://nextplaysolutions.ai", ...headers },
});

test("lead validation rejects incomplete or unsupported fields", () => {
  assert.equal(validateLead(lead), null);
  for (const invalid of [{ name: "" }, { email: "missing-domain" }, { phone: "123" }, { businessType: "unsupported" }]) {
    assert.ok(validateLead({ ...lead, ...invalid }));
  }
});

test("cross-origin submissions are rejected", () => {
  assert.equal(guardRequest(request({ origin: "https://other.example" }), "origin-test", 5).status, 403);
});

test("same-host loopback requests survive Next.js hostname normalization", () => {
  const local = new Request("http://localhost:3100/api/events", {
    method: "POST", headers: { origin: "http://127.0.0.1:3100", host: "127.0.0.1:3100" },
  });
  assert.equal(guardRequest(local, "loopback-test", 5), null);
  assert.equal(guardRequest(request({ origin: "https://other.example", host: "nextplaysolutions.ai", "x-forwarded-host": "other.example" }), "forwarded-test", 5).status, 403);
});

test("rate limits return a retry hint without blocking other buckets", () => {
  assert.equal(guardRequest(request(), "limit-test", 1), null);
  const blocked = guardRequest(request(), "limit-test", 1);
  assert.equal(blocked.status, 429);
  assert.equal(blocked.headers.get("retry-after"), "60");
  assert.equal(guardRequest(request(), "separate-test", 1), null);
});

test("declared oversized requests are rejected", () => {
  assert.equal(guardRequest(request({ "content-length": "70001" }), "size-test", 5).status, 413);
});

test("GHL save handling with simulated responses only", async (t) => {
  const previousToken = process.env.GHL_PI_TOKEN;
  process.env.GHL_PI_TOKEN = "local-test-not-a-real-token";
  t.after(() => {
    if (previousToken === undefined) delete process.env.GHL_PI_TOKEN;
    else process.env.GHL_PI_TOKEN = previousToken;
  });
  t.mock.method(console, "error", () => {});
  const fetchMock = t.mock.method(globalThis, "fetch", async () => Response.json({ contact: { id: "test-contact" } }));
  const payload = { ...lead, source: "Local test", tags: ["test"] };
  assert.deepEqual(await upsertContact(payload), { ok: true });
  fetchMock.mock.mockImplementation(async () => Response.json({}));
  assert.deepEqual(await upsertContact(payload), { ok: false });
  fetchMock.mock.mockImplementation(async () => new Response("unavailable", { status: 503 }));
  assert.deepEqual(await upsertContact(payload), { ok: false });
  fetchMock.mock.mockImplementation(async () => { throw new Error("Simulated network failure"); });
  assert.deepEqual(await upsertContact(payload), { ok: false });
  let calls = 0;
  fetchMock.mock.mockImplementation(async () => {
    if (++calls === 1) return Response.json({ contact: { id: "test-contact" } });
    throw new Error("Simulated note failure");
  });
  assert.deepEqual(await upsertContact({ ...payload, note: "Test only" }), { ok: true });
  assert.equal(calls, 2);
});
