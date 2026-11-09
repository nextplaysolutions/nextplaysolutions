import assert from "node:assert/strict";
import { test } from "node:test";
import { FIELD_NOTES, FAQ, FAQ_JSONLD, TIERS } from "../lib/offer.ts";
import { INVISIBLE_TAX_SIGNS, REMODELER_SIGNS } from "../lib/launch-content.ts";
import { GUIDES } from "../lib/guides.ts";
import { readFileSync } from "node:fs";

test("expanded guides have evidence, examples, and matching downloadable checklists", () => {
  assert.equal(GUIDES.length, 3);
  for (const guide of GUIDES) {
    assert.equal(guide.sections.length, 4);
    assert.ok(guide.example.intro.includes("Illustrative"));
    assert.ok(guide.measure.length > 100);
    assert.equal(guide.faq.length, 2);
    assert.match(guide.evidenceHref, /^\/field-notes#finding-\d+$/);
    const checklist = readFileSync(new URL(`../public/checklists/${guide.slug}.txt`, import.meta.url), "utf8");
    for (const item of guide.checklist) assert.ok(checklist.includes(item));
    assert.ok(checklist.includes(guide.evidence));
    assert.ok(!Number.isNaN(Date.parse(guide.updated)));
  }
});

test("seven findings carry recommendations and evidence limits", () => {
  assert.equal(FIELD_NOTES.length, 7);
  assert.equal(new Set(FIELD_NOTES.map(n => n.vertical)).size, 7);
  for (const note of FIELD_NOTES) {
    assert.ok(note.recommendation.length > 20);
    assert.ok(note.evidence.length > 20);
    assert.equal(note.surfaced, "Anonymized assessment finding");
  }
  for (const note of FIELD_NOTES.slice(3)) {
    assert.doesNotMatch(JSON.stringify(note), /\$\d/);
  }
});

test("diagnostic lists, offer prices, and FAQ schema remain consistent", () => {
  assert.equal(INVISIBLE_TAX_SIGNS.length, 7);
  assert.equal(REMODELER_SIGNS.length, 7);
  assert.deepEqual(TIERS.map(t => t.price), [2500, 5000, null]);
  assert.deepEqual(FAQ_JSONLD.mainEntity.map(q => [q.name, q.acceptedAnswer.text]), FAQ.map(q => [q.q, q.a]));
});
