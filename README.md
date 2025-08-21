# ProjectPro Marketing (Static Site)

A minimal Next.js 14 static marketing site for ProjectPro, hosted on Azure Static Web Apps (Free tier).

## Tech
- Next.js 14 (App Router) with `output: 'export'`
- TypeScript + Tailwind CSS
- No auth or dynamic server code

## Local Development
```bash
pnpm install
pnpm dev
```
App runs at http://localhost:3000

## Static Export
```bash
pnpm build
# Output goes to ./out
```

## Azure Static Web Apps
- App location: `/`
- API location: leave blank
- Output location: `out`
- Images: `next.config.js` sets `images.unoptimized = true` for export

### GitHub Actions
A workflow is created by Azure: `.github/workflows/azure-static-web-apps-*.yml`
- It builds with `npm install` and `npm run build`
- We changed `output_location` to `out`
- Pushing to `main` triggers deploy

### Custom Domain
Recommended split:
- `www.projectpro.pro` → Azure SWA (CNAME to `*.azurestaticapps.net`)
- `projectpro.pro` → VM (A record). Optionally 301 `/home` → `https://www.projectpro.pro/`

## Making Changes
1) Edit files in `app/` or `components/`
2) Commit to `main`
3) GitHub Action deploys automatically to Azure SWA

## Serving locally as pure static
```bash
pnpm build
pnpm dlx serve -s out -l tcp://0.0.0.0:3001
```

## Structure
- `app/page.tsx` – homepage sections
- `app/(marketing)/*` – About, Privacy, Terms, Security
- `components/layout` – Header/Footer
- `components/sections` – Hero/Features/HowItWorks/Screenshots/Pricing
- `public/` – images and screenshots

## Contact
- tom.lynch@projectpro.pro
- Toowoomba, QLD

