# Decisions — lunomj.com

Newest first. Each entry: what was decided, why, and what is permanent.

## 2026-10-17 — Before publishing the redesign

- Founder page: TikTok `https://www.tiktok.com/@drallysaid` added to the links and to Person `sameAs`
  (founder page and homepage).
- Founder page: "Health innovation — EMD Survival" section (EN + SW), described from the app itself.
  Not linked publicly on purpose: its roster shows colleagues' real names and rotations.
- Owner screenshots retaken after maturing the LOCAL demo fleet (TZS 18.14M collected vs 17.1M invested):
  `owner-kiongozi` (Kiongozi note) and new `owner-profit` (net profit TZS 1,040,000). The old fleet-list
  shot was dropped because it showed older demo numbers than the driver shot.

## 2026-10-17 — Homepage redesign and founder page (branch `redesign`, not live)

- **Look:** ink `#08080A`, mint `#0ECF8A`, text `#F2F4F3`; Bricolage Grotesque (headlines) + Manrope (body),
  loaded without blocking render. No frameworks, one small inline script, no custom cursor or loading veil.
- **Language toggle:** kept the existing `langBtn` / `data-i18n` mechanism. English lives in the HTML,
  Kiswahili in the `SW` dictionary in `index.html`. Choice is remembered in localStorage; `?lang=sw` forces Kiswahili.
- **Copy rule:** no invented numbers or testimonials. Removed the old "3 cities live", "1M+", "100% verified",
  "Fleet Health 94" figures and the "iPhone beta" wording. FAQ answers follow the Privacy Policy and Terms
  of 13 Oct 2026; FAQPage JSON-LD must match the visible FAQ.
- **Banned words:** mobile-first, offline-first, seamless, empower, revolutionize, cutting-edge, game-changer.
- **Screenshots** (`assets/screens/`) come from the 1.2.0 debug builds (Android emulator, iPhone simulator)
  against a LOCAL Supabase seeded with a demo fleet (`@demo.luno` accounts, plates ending `DEM`).
  Never capture from production accounts. Each image has a 600px and a 400px WebP.
- **Fleet photos:** section `#fleet` is in the page but `hidden` until real photos are in `assets/fleet/`.
- **Founder page** `dr-ally-said.html` (permanent URL; it is in the sitemap and the Person `@id`
  `https://lunomj.com/dr-ally-said.html#person` is referenced by the Organization JSON-LD).
- **Waitlist form** on the founder page has a placeholder `action` (`#NEWSLETTER-EMBED-PLACEHOLDER`);
  a script blocks submits until it is replaced. When the newsletter provider is chosen, add it to the
  Privacy Policy (section 5, processors) before going live.
- **Footers:** every public page links Privacy Policy, Terms and Delete account (`luno-privacy-policy.html#delete-account`).
- **Lighthouse (mobile, local server, 2026-10-17):** both pages 100 / 100 / 100 / 100
  (performance / accessibility / best practices / SEO).
