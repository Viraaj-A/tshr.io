# tshr.io website (outkast-main)

Astro 4 + Tailwind static site. **Hosted on Netlify** (domain via NameCheap),
GitHub repo `Viraaj-A/tshr.io`, production branch `main`.

## Deployment
- Netlify **builds from source** on every push to `main`:
  build command `npm ci && npm run build`, publish dir `dist` (see `netlify.toml`).
- A push that doesn't appear live = a **build failure**, not a code-less deploy.
  Check the Netlify **Deploys** tab log first before assuming the code is wrong.

## Hard rules
- **Never commit `node_modules/` or `dist/`.** Netlify reinstalls and rebuilds them.
  - `node_modules/` committed from Windows loses the Linux executable bit, so on
    Netlify `astro` fails with `Permission denied` (exit 127) and the build dies.
    This already cost a long debugging session — don't reintroduce it.
  - These are currently still tracked for historical reasons; do not add to them.
    A `pre-commit` hook blocks staging them (bypass only with `--no-verify`).
- Keep secrets out of the repo (`.env*` are gitignored).

## Build-time fetches
- `src/data/paragraphxyz_api.js` and `src/pages/api/paragraph-posts.ts` fetch Arweave
  at build time. Both have request timeouts so a slow gateway can't hang the build —
  keep any new build-time `fetch()` bounded the same way.

## /veri-me
- `public/veri-me/index.html` is a private, StatiCrypt password-encrypted consultancy
  report served verbatim (no site layout); `public/_headers` sets `X-Robots-Tag: noindex`
  for `/veri-me/*`. Don't link to it and don't commit its password here.
