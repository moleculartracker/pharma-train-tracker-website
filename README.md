# Pharmacy Training Tracker Website

React + Vite + Tailwind CSS website for the bilingual Arabic/English Pharmacy Training Tracker Android app.

## Project Structure

- `src/App.jsx` - page layout, reusable components, forms, and navigation
- `src/data/translations.js` - all Arabic and English website copy
- `src/styles.css` - Tailwind entry and small global styles
- `public/assets/` - app icon and phone preview video
- `public/_headers` and `public/_redirects` - Cloudflare Pages static config
- `wrangler.toml` - Cloudflare Pages output configuration

## Cloudflare Pages

Recommended Git integration settings:

- Build command: `npm run build`
- Build output directory: `dist`

Direct upload with Wrangler:

```powershell
npm install
npx wrangler login
npx wrangler pages project create moleculartracker
npx wrangler pages deploy dist --project-name moleculartracker
```

## APK Download Proxy

The website download button points to `/download/apk`. That route is handled by a Cloudflare Pages Function in `functions/download/apk.js`, so visitors do not see the GitHub release URL.

If the GitHub release asset is private, create a GitHub fine-grained token with read access to the repository contents, then add it as a Cloudflare Pages secret named `GITHUB_TOKEN`.

Production variables/secrets:

- `GITHUB_TOKEN` - required when the GitHub release is private
- `GITHUB_OWNER` - defaults to `moleculartracker`
- `GITHUB_REPO` - defaults to `pharma-train-tracker-website`
- `GITHUB_RELEASE_TAG` - defaults to `1`
- `APK_ASSET_NAME` - defaults to `pharmacy_training_tracker.apk`

Set the secret from this folder:

```powershell
npx.cmd wrangler pages secret put GITHUB_TOKEN --project-name moleculartracker
```

For local testing, copy `.dev.vars.example` to `.dev.vars` and put the real token there. Do not commit `.dev.vars`.

The activation and contact forms are front-end placeholders. Connect them to a Cloudflare Pages Function or external form endpoint before collecting production requests.
