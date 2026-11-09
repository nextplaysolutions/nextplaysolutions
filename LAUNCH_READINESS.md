# NextPlay launch refresh

## Approved release — November 9, 2026

- Owner approved pushing the seven-signs visual refresh together with the prepared SEO/AIO improvements. This supersedes the local-draft approval status below.
- Fetched origin and confirmed no newer commits on main before release preparation. Existing November 4 deployment retained as the prior production release.
- Scope: alternating seven-signs imagery, expanded practical guides and downloadable checklists, Article/breadcrumb metadata, descriptive homepage metadata, corrected badge contrast, linked llms.txt directory, and accurate sitemap modification dates. Search Console is verified and the sitemap was accepted on November 6; no ranking or AI-answer placement guarantee is implied.

## Seven signs visual refresh — November 9, 2026 (local draft)

- Replaced the two-column card list with seven alternating text/photo rows. Desktop/tablet image placement alternates right/left; mobile keeps text before its photo for every item. Original signal copy and conversion links retained.
- Added seven illustrative AI-generated business photos, documented with prompts in `docs/seven-signs-imagery.md`. Website WebP assets total 565,520 bytes; Next.js serves responsive, lazy-loaded images with reserved space. No client depiction or outcome claim is implied.
- Production build and all nine existing tests pass; diff whitespace check passes. Browser review at 375px, 768px, and desktop confirms no horizontal overflow, correct ordering, and seven loaded photos. No browser console errors observed. Desktop/mobile review screenshots saved outside the repository in `/tmp/nextplay-seven-signs-desktop.jpg` and `/tmp/nextplay-seven-signs-mobile.jpg`.
- No commit, push, or production deployment made. Existing pending SEO changes preserved.

## SEO and AI-search follow-up — November 6, 2026 (local draft)

- Prepared a descriptive homepage title and description while retaining the visible brand headline.
- Expanded all three practical guides with four explanatory sections, an explicitly illustrative workflow table, downloadable checklists, measurement guidance, FAQs, visible organization attribution, and update dates. No founder quotation or personal authorship is implied.
- Added Article and breadcrumb structured data; sitemap guide dates now use the content's update dates. This is descriptive markup, not a ranking guarantee.
- Corrected the minimum-engagement badge's foreground color and converted the llms.txt page directory to Markdown links. llms.txt is a convenience for consumers that use it, not a Google ranking mechanism.
- Live homepage mobile PageSpeed baseline: Performance 99, Accessibility 96, Best Practices 100, SEO 100; FCP 0.9s, LCP 0.9s, TBT 10ms, CLS 0. Google reports no real-user data. These are single-run lab results, not field Core Web Vitals or measured rankings.
- Report: https://pagespeed.web.dev/analysis/https-nextplaysolutions-ai/stm6ihrnhb?form_factor=mobile
- Search Console: owner approved setup under jordan@nextplaysolutions.ai on November 6. Added the nextplaysolutions.ai domain property; Google automatically verified ownership through the domain name provider. No DNS records or routing were changed. Submitted https://nextplaysolutions.ai/sitemap.xml; Google reports Success and 12 discovered pages. Overview reports are processing. Homepage inspection reports indexed, crawl/indexing allowed, successful fetch, and Google-selected canonical matching https://nextplaysolutions.ai/. Last recorded crawl was October 24, 2026, before the November 4 release; the inspection's sitemap discovery field reports a temporary processing error despite the submitted-sitemap table reporting Success. Individual guide/remodeler inspection remains pending.
- Local checks: nine automated tests and the production build pass. All three guide pages and all three checklist files return HTTP 200. Article markup is present in server-rendered HTML. All three guides fit a 375px viewport without document overflow; the first guide was visually inspected on desktop and mobile. Related-guide navigation works. The React review kept guide content server-rendered, with no added client-side JavaScript or dependencies.

- A fresh homepage indexing request was attempted, but Google returned "We had a problem submitting your indexing request" and could not connect to its reCAPTCHA service. No successful manual crawl request is claimed. Sitemap submission remains successful; retry the manual request later if needed.

### Measurement and genuine proof plan

1. After property verification, submit https://nextplaysolutions.ai/sitemap.xml; inspect the homepage, remodeler page, and each practical guide. Record indexing status and Google's selected canonical.
2. Establish a Search Console baseline for impressions, clicks, queries, and landing pages. Review after enough data accumulates; do not infer rankings from a Lighthouse score. Track organic lead captures separately from phone-link clicks and completed assessments.
3. For each implemented client workflow, record the baseline period, observed workload or error count, implementation scope, measurement period, and supporting records. Separate estimates, invoiced amounts, collected amounts, and staff capacity.
4. Have a founder check attribution and alternative explanations before claiming improvement. Obtain the client's permission for the exact public facts and level of anonymization. Industry plus geography plus revenue may identify a client even without a name.
5. Ask completed clients for an honest account in their own words: what problem they had, what changed, what remains imperfect, and whether they authorize publication. Do not draft invented testimonials, require positive sentiment, or attach fake ratings.
6. Publish an outcome case study only after evidence and permission are complete. Include the scope, measurement dates, limitations, and named reviewer if that person actually reviewed it. Until then keep the existing assessment findings clearly labeled.

No outreach, testimonial request, or new outcome claim has been sent or published in this pass. No push or deployment is authorized by this local working record.

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
