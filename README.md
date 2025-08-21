# ProjectPro Marketing Static Site

Static-exported Next.js site for Azure Static Web Apps (free tier). Contains only public marketing content.

## Commands

- Install: `pnpm install`
- Dev: `pnpm dev`
- Build (static export): `pnpm build` (outputs to `out/`)

## Deploy to Azure Static Web Apps

- App location: `/`
- Output location: `out`
- No API/functions.

## GitHub

Create and push a new repo:

```
cd marketing_swa
pnpm install
pnpm build
gh repo create projectpro-marketing --public --source=. --remote=origin --push
```

