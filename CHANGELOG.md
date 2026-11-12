# Changelog

## 2026-11-11
- Add a temporary `/goldensheaf` redirect (307) to the Golden Sheaf GHL funnel preview. The QR for the Nov 12 VIP Networking Event points at nextplaysolutions.ai/goldensheaf, which currently 404s. Temporary target until a domain is connected to the funnel; we'll repoint later.

## 2026-10-28
- Add Vercel Web Analytics so we can measure page views (for Constraint growth analysis). Installed `@vercel/analytics` and added `<Analytics />` to the root layout. Data is collected only once Web Analytics is enabled on the Vercel project.

## 2026-10-08
- Pointed the `/scout` short link (business-card QR) to the GHL "Talk with Scout" booking page with a temporary 302 redirect, so the destination can change later without reprinting cards.
