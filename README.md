# Landing page.

## Current landing and access requests

`pages/index.js` implements the November 2026 Naxus landing handoff in React,
with static illustrative examples, responsive navigation and reduced-motion-aware
animations. `pages/request-access.js` is the invite-only request form. Shared
marketing styles live in `theme/marketing.css`; logo assets live in `public/`.
The site remains statically exported to GitHub Pages, including the
`/request-access/` directory route. Do not add a Next.js API handler for this form.

The form posts to `https://contact.naxusai.com/access-requests`, deployed by
`AI-Gents/Infra` (`landing_contact.tf`). The existing Turnstile widget sitekey is
`0x4AAAAAAF03PSpnBuhgq60_`, with action `access_request`. Its secret belongs only
in AWS Secrets Manager `naxus/landing/turnstile`, never in this repository or a
`NEXT_PUBLIC_*` variable. The server validates success, action and production
hostname before emailing all fields to `info@naxusai.com`, with the requester's
email as Reply-To. Failed submissions retain the form and reset the CAPTCHA.

Run `npm ci`, `npm run build`, then `npx --no-install next export`. Preview
`out/` using a static HTTP server and check `/` and `/request-access/` at both
mobile and desktop widths. The push to `main` deploys through GitHub Pages.

### CI dependency reuse

Installed dependencies are cached by exact OS, architecture, Node version and
package/lockfile hashes. Cache misses still use `npm ci`; every deployment builds
and statically exports the site. Root documentation-only pushes skip deployment.
