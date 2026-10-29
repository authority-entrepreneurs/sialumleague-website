# Staten Island Alumni League – React site

React (Vite + React Router) rebuild of https://www.sialumleague.com/ with the same content and
theme (black/white textures, hardwood court, burnt-orange `#CF5300`, Holtwood One SC headings).

## Scripts

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # serve the build
```

## Pages

| Route           | Original page                                  |
| --------------- | ---------------------------------------------- |
| `/`             | https://www.sialumleague.com/                  |
| `/schedule`     | https://www.sialumleague.com/schedule/         |
| `/standings`    | https://www.sialumleague.com/standings/        |
| `/rules`        | https://www.sialumleague.com/rules/            |
| `/signup`       | https://www.sialumleague.com/signup/           |
| `/stats`        | https://www.sialumleague.com/stats/            |
| `/past-results` | https://www.sialumleague.com/past-results/     |

## Updating content

All content lives in two files, so weekly updates don't touch any components:

- `src/data/league.js` – schedule, standings, stats, past results, conferences/pricing, rules
- `src/data/site.js` – phone, social links, sign-up links, locations, gym map links, navigation

## Forms

The original Contact and Sign Up forms posted to WordPress. Here they POST JSON to
`VITE_FORM_ENDPOINT` (e.g. a Formspree URL; see `.env.example`). If it isn't set, submitting
shows the phone number and the official Google Form sign-up link instead.

## Deploying

Netlify: `netlify.toml` sets the build (`npm run build` → `dist`) and the SPA fallback, so
importing the repo needs no extra settings. On AWS Amplify, add a rewrite rule in the console:
`</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>` → `/index.html` (200).
