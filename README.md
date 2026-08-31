# David Huson Website

A minimal portfolio website, made using React, Tailwind, EmailJS

## Local setup

```bash
npm install
cp .env.example .env   # then fill in the values
npm start
```

`.env` is git-ignored. Never commit it.

## Security

### The `REACT_APP_*` values are public, not secret

Create React App inlines every `REACT_APP_*` variable into the JavaScript
bundle at build time. Anyone who loads the site can read them. The EmailJS
service ID, template ID and public key, and the reCAPTCHA site key, are all
public identifiers by design.

Never put a private key, an API secret or a password in `.env`.

### Required provider restrictions

Because the identifiers are public, the only thing that stops a third party
from sending email through this EmailJS account is the configuration in the
provider dashboards. Set all of the following:

1. **EmailJS → Account → Security**: turn on **Allow requests from these
   origins** and list `https://www.davidhuson.com` only. This blocks the
   scripted abuse that a leaked public key otherwise allows.
2. **EmailJS → Email template → Settings**: turn on **reCAPTCHA verification**
   and paste the reCAPTCHA **secret** key. The form sends the
   `g-recaptcha-response` token with each request, but only EmailJS can verify
   it. The check in `ContactForm.js` runs in the browser, so an attacker who
   calls the API directly skips it.
3. **EmailJS → Account**: set a monthly send quota, so an abuse attempt cannot
   run without a limit.
4. **reCAPTCHA admin console**: restrict the site key to `www.davidhuson.com`.

Keep the reCAPTCHA **secret** key in the EmailJS dashboard only. It must never
appear in this repository.

### Content-Security-Policy

GitHub Pages serves static files and cannot set HTTP response headers, so
`public/index.html` carries the policy in a `<meta http-equiv>` tag. The
allow-list is deliberately narrow: Google Fonts, reCAPTCHA and the EmailJS
send endpoint.

If you add a third-party script, embed or API call, extend the policy in
`public/index.html`. Otherwise the browser blocks the request. Check the
browser console for `Content Security Policy` errors after any such change.

`INLINE_RUNTIME_CHUNK=false` in `.env` keeps the webpack runtime in an external
file. Without it the build inlines a `<script>` block, which the policy blocks.

### Dependencies

`npm audit` reports on the build toolchain that `react-scripts@5.0.1` pins.
Safe transitive versions are pinned through the `overrides` block in
`package.json`.

Two advisories remain, both in packages that `react-scripts@5.0.1` pins to
incompatible major versions:

- `svgo@1.3.2` (through `@svgr/webpack`) - runs at build time only.
- `webpack-dev-server@4` - runs during `npm start` only.

Neither package ships to the browser, so neither affects a visitor to the site.
`npm audit fix --force` does not help: it replaces `react-scripts` with version
`0.0.0` and breaks the build. Clearing these two requires moving off Create
React App, which Meta no longer maintains. Vite is the usual replacement.

Do not run `npm start` and browse untrusted sites in the same session, until
that migration happens.
