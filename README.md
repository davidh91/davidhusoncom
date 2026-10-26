# David Huson Website

A minimal portfolio website, made using React, Tailwind, EmailJS

## Local setup

```bash
npm install
cp .env.example .env   # then fill in the values
npm start
```

`.env` is git-ignored. Never commit it.

## Deployment

`.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages
on each push to `main`. You can also start it by hand from the **Actions**
tab.

The workflow reads the `VITE_*` values from repository secrets. Add them under
**Settings -> Secrets and variables -> Actions**, with the same names as in
`.env.example`. Set **Settings -> Pages -> Source** to **GitHub Actions**.

## Security

### The `VITE_*` values are public, not secret

Vite inlines every `VITE_*` variable into the JavaScript
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
`index.html` carries the policy in a `<meta http-equiv>` tag. The
allow-list is deliberately narrow: Google Fonts, reCAPTCHA and the EmailJS
send endpoint.

If you add a third-party script, embed or API call, extend the policy in
`index.html`. Otherwise the browser blocks the request. Check the
browser console for `Content Security Policy` errors after any such change.

The Vite production build emits only external module scripts, so the policy
needs no inline script allowance. The dev server injects inline scripts for
React Fast Refresh, so `vite.config.js` removes the policy during `npm start`
only. Run `npm run build && npm run preview` to test the policy locally.
