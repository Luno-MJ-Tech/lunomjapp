# Decisions — lunomj.com

Newest first. Each entry: what was decided, why, and what is permanent.

## 2026-10-19 — Public brand name "LUNO Mwanajando" (branch `brand-full-name`)

- **Permanent:** the public brand is **LUNO Mwanajando**; the legal name stays
  "LUNO Mwanajando Technologies Co. Limited". "LUNO" alone is the short form (JSON-LD `alternateName`).
- Rule: use the full name where a search engine or first-time visitor meets the brand first (titles, meta/OG/Twitter,
  JSON-LD names, the first mention in the hero). After that, body text says "LUNO". The "Luno" in the company story is a person; leave it.
- Logo lockup on index, founder, terms and privacy pages: icon + "LUNO" (display, 800) with "Mwanajando" stacked
  below in smaller, lighter Manrope. Markup: `.logo > .wm > .wm-main + .wm-sub`.
- Follow-up (same branch): article pages (makala, mkataba, daftari) use "Article title | LUNO Mwanajando" for
  `<title>`/`og:title` and the same lockup; their JSON-LD Organization points to `https://lunomj.com/#org`.
  LMT pages (`lmt.html`, `injini.html`) keep the LMT wordmark and "LUNO Mwanajando Technologies" as name (it is the
  company's studio), with `legalName` added. `index-v0.html` and the `new/` prototype were deleted (2026-10-19); nothing linked to them and they were not in the sitemap.

## 2026-10-19 — Copy rule: plain words, no buzzwords, no boasts (permanent)

- **No AI-sounding buzzwords.** True features stay, said in plain words. Examples: "offline-first" becomes "built to
  work on weak or no internet" or "works without internet once opened"; "AI-ready" / "ready for the AI era" /
  "AI-readiness" become "easy for search engines and AI assistants to read"; "autonomous" goes.
- **No boasts:** no "first", "leading", "#1", "best", "mobile-first" or promises we cannot prove ("we'll pass yours").
  Facts stay ("in the first 48 hours", "an owner must first close contracts").
- Banned-word list (homepage entry of 2026-10-17) still applies on every page, `llms.txt` and structured data.
- EMD Survival: "Works without internet once opened" stays on `lmt.html`. Its full offline mode ships with the
  November roster (owner, 2026-10-19). Re-check the wording against the EMD code when that ships.
- EMD Survival is never linked from the site or `llms.txt` (its roster shows colleagues' real names and
  rotations). On `lmt.html` it is listed as "Private to Muhimbili EMD staff".

## 2026-10-19 — Offline claims must match the apps

- Checked in code: Android (`PaymentRepository`, Room `needsSync`) records payments offline and syncs later.
  iOS has no offline queue (`LunoOwner/Domain/PaymentCap.swift`); it shows cached records offline but needs a
  connection to record a payment. Public copy must say "Android" when it promises offline recording.
- `llms.txt` updated accordingly. Homepage FAQ a2 (EN + SW + FAQPage JSON-LD), the Terms availability sentence
  and the Privacy "offline use" line now say the same (branch `offline-claim-truth`). Sign-out clears phone data
  on both apps (iOS `LocalCache.clearAll()`, Android `clearAllTables()`).
- **1.2.1 item: iPhone offline payment queue** (match Android: save locally, mark for sync, retry). When it ships
  on iPhone, restore the simple wording "works without internet" in the FAQ, FAQPage JSON-LD, the homepage card `o6`,
  Terms, Privacy and `llms.txt`. Terms and Privacy "Last updated" moved to 19 October 2026 for this change.
- LMT JSON-LD description: "offline-first" replaced with "with offline features where a project needs them".

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
