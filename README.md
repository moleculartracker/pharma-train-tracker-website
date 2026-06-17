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
npx wrangler pages project create pharmacy-training-track
npx wrangler pages deploy dist
```

The activation and contact forms are front-end placeholders. Connect them to a Cloudflare Pages Function or external form endpoint before collecting production requests.
