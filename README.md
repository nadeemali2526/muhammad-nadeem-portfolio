# Muhammad Nadeem — RCM Portfolio

A responsive personal portfolio website for **Muhammad Nadeem**, focused on Medical Billing, Accounts Receivable, Denial Management, and US Healthcare Revenue Cycle Management.

## Built with
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (DM Sans and Manrope; system fallbacks are provided)

No framework, API key, backend, paid service, or build step is required.

## Project structure

```text
muhammad-nadeem-portfolio/
├── index.html
├── style.css
├── script.js
├── 404.html
├── README.md
└── assets/
    ├── favicon/
    │   └── ri-mark.svg
    ├── icons/
    └── images/
```

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser.

For a local development server, run one of these commands from the project folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personal configuration

Open `script.js` and update the contact values at the top if needed:

```js
const CONTACT_EMAIL = "nadeemscientist44@gmail.com";
const CONTACT_PHONE = "+923030535477";
```

The contact email and phone links are populated from these variables. The LinkedIn URL is in `index.html`; replace it if your profile URL changes.

## Deploy to GitHub

Create a new empty repository on GitHub, then run these commands in the project folder:

```bash
git init
git add .
git commit -m "Create Muhammad Nadeem RCM portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your actual GitHub repository URL.

## Deploy to Vercel

### Option A — GitHub import
1. Push the project to GitHub.
2. Sign in to Vercel.
3. Select **Add New → Project** and import the repository.
4. Keep Framework Preset as **Other**.
5. Leave Build Command and Output Directory empty/default; this is a static site.
6. Deploy.

### Option B — Vercel CLI
Install the Vercel CLI, sign in, and run from the project directory:

```bash
vercel
```

Follow the prompts. For production deployment:

```bash
vercel --prod
```

The included `404.html` can be used by static hosting platforms for a custom not-found page.

## SEO and sharing

The page includes a title, meta description, author, theme color, Open Graph title/description/image, and favicon. Once the site has a final public URL, add it as the canonical URL and optionally create an Open Graph preview image sized 1200 × 630.

## Final testing checklist

- [ ] Check the site at mobile, tablet, laptop, and wide desktop widths.
- [ ] Open and close the mobile navigation with touch and keyboard.
- [ ] Confirm all section navigation links scroll to the correct section.
- [ ] Test the email link and phone link on a device with the relevant apps.
- [ ] Verify the LinkedIn URL.
- [ ] Check that no horizontal scrolling appears on narrow screens.
- [ ] Test keyboard focus visibility and reduced-motion settings.
- [ ] Review all CV-derived claims and contact details before publishing.
- [ ] Confirm the deployed Vercel URL and custom 404 behavior.

## Content accuracy note

The website uses the professional experience, education, skills, achievements, payer experience, and contact information provided in the supplied CV. It intentionally does not invent client names, certificates, awards beyond the CV, project case studies, or performance metrics beyond those stated in the CV.
