# Onyx Auto Spa — $25 credit landing page

Responsive static campaign site. No build step. GitHub Pages publishes the repository root from `main`.

## Offer
$25 toward selected qualifying detailing and window tinting services priced at $100+. New and returning customers. One use per customer. Cannot be combined with other offers. No payment required to claim; appointments require confirmation.

## Form
GHL form `N7EyQvNzWatQ19AHRpVW`, served by `portal.thebfsai.com`. GHL controls fields, validation, consent, submission and confirmation. The page forwards allowlisted UTM parameters; verify attribution in GHL with an authorized test lead before paid traffic. No advertising pixel is installed.

The live form currently requires email. Make it optional in GHL if desired. Align its small print with the selected-qualifying-services wording on this page. No test lead was submitted during deployment.

## Custom domain
Confirmed custom hostname: `book.onyxautospa.ca`. The repository includes a root `CNAME` file and Pages is configured for this hostname. Cloudflare points the DNS-only CNAME to `jai2713.github.io`. GitHub handles hosting and HTTPS. The main website and other DNS records are unchanged.

## Sources
User-provided Onyx media, converted and resized for web:
- Hero: IMG_20260912_124517.heic
- Porsche: IMG_20260912_124608.jpg
- Before: IMG_20260912_124403.heic
- After: IMG_20260912_124503.heic

Review excerpts, address and phone checked against https://onyxautospa.ca/ on 2026-09-12. No aggregate rating is asserted by this page; the supplied form displays its own rating.

## Validation
Checked responsive layouts at 320px, 390px and desktop; image loading; CTA navigation; live form rendering and resizing; FAQ interaction; UTM forwarding. Lead submission and CRM follow-up were not tested.

## Local preview
Serve this directory with a static server, for example `python3 -m http.server 8765`.
