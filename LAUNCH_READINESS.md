# NextPlay launch refresh

Release verification record. Historical notes below describe earlier checks, not the current deployment status.

## Approved release — November 4, 2026

- Owner explicitly approved pushing to main and deploying after release checks.
- Merged upstream main through `8348ea9`; preserved the existing `/scout` booking redirect, Vercel Web Analytics, and shared “see if you qualify” labels.
- Corrected same-origin validation for Next.js loopback hostname normalization. Local `/api/events` now returns 204; cross-origin and forged forwarded-host regression tests reject requests.
- Live pre-release `/api/chat` returned 200 with a correct assessment explanation. Live `/api/demo-lead` returned 200 after submitting the owner-provided Jordan contact details. This may trigger the existing follow-up workflow.
- The release audit found security advisories in Next.js 16.2.9. Updated Next.js and its matching ESLint configuration to 16.4.5, plus compatible transitive dependency fixes. Reference: https://github.com/vercel/next.js/releases/tag/v16.4.5
- Eight moderate audit entries remain in the development-only ESLint/minimatch dependency chain; the suggested forced fix would downgrade the Next.js lint configuration across a major version, so it was not applied.
- Physical Scout calling and human report delivery still require an owner-operated call; neither is established by a successful website API response.
- No A/B test is enabled. Vercel page-view analytics is retained; completed-call and delivered-report conversion reporting remains a separate follow-up.

## Current verification — November 4, 2026

This section supersedes the older validation notes below where they conflict.

- Added seven diagnostic signals, a three-step Scout explanation, shared FAQs, a no-obligation commitment, four additional anonymized findings, and `/remodelers`.
- Homepage shows three selected findings; the Field Notes page holds all seven. Numeric finding anchors remain stable. New findings explicitly distinguish recommendations from implemented results.
- Private assessment files, client names, and speculative savings totals were not added to the repository.
- Existing forest/lime branding and animated hero are retained. The pause control now includes animated pseudo-elements.
- Production build passes with network access for the existing Google Fonts. The sandbox-only attempt failed to download fonts; no font substitution was made.
- Local headless Chrome verified HTTP 200, one H1, and no horizontal overflow on `/`, `/field-notes`, `/services`, `/remodelers`, and `/demo` at 375, 768, and 1280 pixels.
- Founder photographs loaded; the method section remains visible with reduced motion enabled. Screenshots were visually inspected.
- Simulated browser API failure kept the phone number hidden and retained form entries. Simulated success revealed the phone and focused the success panel. No test contacts were submitted to GHL.
- A/B testing remains off. Existing conversion events are server logs only, not durable funnel reporting; call-link clicks cannot establish completed assessments.
- Browser conversion-event requests returned HTTP 403 on the `127.0.0.1:3100` preview. The shared request guard compares the Origin header with the request URL origin. Resolve and test the local/proxy origin mismatch before claiming end-to-end event or lead API verification; do not weaken cross-origin protection to bypass it. Browser lead success/failure checks above intercepted the API and therefore do not validate this server boundary.
- Final lint, TypeScript, production build, diff-whitespace checks, and all seven automated tests pass.

### Still required before production

1. Review the updated design and copy, then approve the push/deployment.
2. Run an authorized live GHL lead capture and verify industry, tags, and attribution. Simulated tests do not verify provider configuration.
3. Complete a Scout test call and confirm the report delivery workflow and human review.
4. Verify the chatbot with its real provider configuration.
5. Establish durable conversion reporting and completed-call/report-delivery events before an A/B test.
6. Review the existing privacy, follow-up, vendor-commission, and delivery-time promises against actual operations; configure shared abuse protection for production.

## Historical launch notes

## Implemented

- Two-column hero, animated Scout illustration with pause control, existing green/lime identity preserved.
- Prominent founder photography, static linked Field Notes, estimate/outcome distinctions, visible FAQ.
- Three practical search-focused guides, sitemap and machine-readable overview links.
- Clear free-assessment CTA and Custom copy: “Let’s scope your NextPlay.”
- Scout number returned by the server only after successful GHL contact capture; call and download options.
- Form success focus, privacy link, honeypot, origin check, per-instance request throttling.
- GHL timeout handling and error logs without provider response bodies.
- Anonymous conversion events logged for assessment clicks, form starts, lead saves, call clicks and number downloads.

## Required before release

- Visually verify this exact project on desktop and mobile. Browser localhost currently resolves to another project; that is not a valid preview.
- Submit an approved test lead and verify the GHL contact, industry note, tags and campaign attribution. Verify failures do not reveal the number.
- Make a real Scout test call and verify the promised human-reviewed report delivery. A telephone-link click is not a completed call.
- Verify chatbot provider configuration and a full chat interaction.
- Configure durable analytics/reporting and GHL lifecycle events for completed calls and delivered assessments. Current events are server logs, not a funnel dashboard or billing-grade counts.
- Configure distributed abuse protection in the hosting firewall. In-memory limits reset and do not span server instances.
- Confirm permission for the published interview details and estimates. No estimated savings should be presented as achieved client results.
- Check keyboard navigation, contrast, reduced-motion behavior, responsive layout and mobile performance in the correct preview.
- Obtain explicit approval for this push and production deployment; retain the prior deployment for rollback.

## Validation so far

- `npm test`: five passing test groups covering lead validation, origin rejection, rate limits, declared body size, and simulated GHL success/failure responses. No external requests or test contacts are created by these tests. Requires Node 24, matching the configured deployment runtime.
- Latest lint, TypeScript and whitespace/diff checks pass.
- Latest final-build attempt failed because Archivo and IBM Plex Mono could not be downloaded from Google Fonts in this environment. This build is not release-verified; no typography substitution was made.
- Production build passed before the final accessibility and GHL-resilience refinements.
- Lint and TypeScript checks passed; rerun after any further edits.
- Scout line was not found in the generated client static assets checked locally.
- Live/browser and integration verification is incomplete. A network-assisted diagnostic was blocked by automatic approval review reporting workspace credits exhausted.
- Local port 3000 was confirmed by process working directory to belong to this repo; browser-to-server mismatch remains unverified.
- Awaiting user-controlled email and phone for an authorized real Scout/GHL test.
