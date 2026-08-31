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

### webpack-dev-server: accepted risk

Six advisories remain, all for `webpack-dev-server@4`. They are dismissed in
Dependabot on purpose. Read this before you re-open them.

`react-scripts@5.0.1` pins `webpack-dev-server` to version 4. Version 5 removed
the `onBeforeSetupMiddleware`, `onAfterSetupMiddleware` and `https` options that
`react-scripts` still passes, so an override to version 5 stops `npm start` from
booting with:

```
Invalid options object. Dev Server has been initialized using an options object
that does not match the API schema.
 - options has an unknown property 'onAfterSetupMiddleware'.
```

`webpack-dev-server` runs during `npm start` only. `npm run build` never loads
it, and it never ships to the browser, so no visitor to the site is exposed.

Dismiss these alerts in GitHub under **Security -> Dependabot alerts**, with the
reason **Risk is tolerable to this project**, and this note:

> Development-only dependency. Pinned by react-scripts@5.0.1, which passes
> options that webpack-dev-server 5 removed. Not present in the production
> build. Will be resolved by migrating off Create React App.

The residual risk falls on whoever runs `npm start`. Do not run `npm start` and
browse untrusted sites in the same session.

Migrating off Create React App, which Meta no longer maintains, removes
`webpack-dev-server` along with most of the toolchain. Vite is the usual
replacement. That is the permanent fix.

### Do not regenerate the lock file from scratch

Run `npm install` to add or change a dependency. Never delete
`package-lock.json` and rebuild it.

Every range in `package.json` uses `^`, so a full re-resolution drifts. One such
rebuild pulled in a new `typescript` major, which made
`eslint-config-react-app` switch to its TypeScript path and fail the build with
`Environment key "jest/globals" is unknown`. The committed lock is the verified
state. Keep it, and let `npm install` change only what it must.

Removing an entry from `overrides` also needs care. npm leaves the old pin in
the lock, so check the resolved version afterwards.
