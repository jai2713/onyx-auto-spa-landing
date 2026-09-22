# Onyx Auto Spa — $25 credit landing page

Responsive static campaign site. No build step. GitHub Pages publishes the repository root from `main`.

## Offer
$25 off qualifying packages priced at $100+: Interior Silver, Interior Gold, Interior Platinum, Gloss Boost Polish, and window tint packages (Front 2, Rear 3, or All). Ends Sunday, Sept 27, 2026. New and returning customers. One use per customer. Cannot be combined with other offers. No payment required to claim or book; pay after the service. Appointments require confirmation.

Customer-facing names use Interior Silver / Gold / Platinum from [onyxautospa.ca](https://onyxautospa.ca/). The redemption SKUs in [onyx-auto-spa-coupons](https://github.com/jai2713/onyx-auto-spa-coupons) (`Silver`, `Gold`, `Platinum`, `Gloss Boost Polish`, `Window Tint — Front 2`, `Window Tint — Rear 3`, `Window Tint — All`) are the more precise list and are what this page names. Shop should confirm final eligible SKUs before treating this copy as final.

## Form
GHL form `N7EyQvNzWatQ19AHRpVW`, served by `portal.thebfsai.com`. GHL controls fields, validation, consent, submission and confirmation. The page forwards allowlisted UTM parameters; verify attribution in GHL with an authorized test lead before paid traffic. No advertising pixel is installed.

The live form currently requires email. Make it optional in GHL if desired. Align its small print with the named qualifying packages and Sunday, Sept 27 end date on this page. No test lead was submitted during deployment.

## Custom domain
Confirmed custom hostname: `book.onyxautospa.ca`. The repository includes a root `CNAME` file and Pages is configured for this hostname. Cloudflare points the DNS-only CNAME to `jai2713.github.io`. GitHub handles hosting and HTTPS. The main website and other DNS records are unchanged.

## Sources
User-provided Onyx media, converted and resized for web:
- Hero: `assets/onyx-foam-wash.jpg` (Ford Bronco in the bay). The Lamborghini Urus (`assets/onyx-urus.jpg`, formerly the hero) stays in the work gallery.
- Porsche: IMG_20260912_124608.jpg
- Before: IMG_20260912_124403.heic
- After: IMG_20260912_124503.heic

Live Google reviews are provided by the user-supplied ReputationHub widget `6aa5b07e10eca1061669c43d`, using its official resizing script. Static review excerpts were replaced by the live widget. Address and phone were checked against https://onyxautospa.ca/ on 2026-09-12.

## Validation
Checked responsive layouts at 320px, 390px and desktop; image loading; CTA navigation; live form rendering and resizing; FAQ interaction; UTM forwarding. Lead submission and CRM follow-up were not tested.

## Local preview
Serve this directory with a static server, for example `python3 -m http.server 8765`.

## Work gallery
Five additional user-provided Onyx photos: IMG_20260912_124532.heic, IMG_20260912_124619.heic, IMG_20260912_124640.heic, IMG_20260912_124455.heic and IMG_20260912_124650.heic. Converted to compressed JPEGs. Native horizontal scrolling supports touch, keyboard and buttons; no automatic rotation. Images lazy-load.


Meta Pixel 1621954292677375 installed September 14, 2026 on index.html and thank-you.html. Base PageView event only, with no-script fallback in body. No advanced matching/customer details or Lead/Purchase/Schedule events added. Meta Events Manager receipt still needs confirmation; source deployment does not establish attribution or booking tracking.
