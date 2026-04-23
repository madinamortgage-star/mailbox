# My Biz Mailbox — marketing website

Production Next.js 14 site for **My Biz Mailbox**, a physical business mailbox service at 802 North Goliad Street, Rockwall, TX 75087.

Built on the Apple-inspired design system in this repo (`colors_and_type.css`, `website.css`, `Nav.jsx`, `Tiles.jsx`).

---

## Quick start

```bash
cp .env.local.example .env.local
# fill in all values (see below)
npm install
npm run dev
```

Visit `http://localhost:3000`.

---

## Environment variables

| Variable | Description |
|---|---|
| `STRIPE_SECRET_KEY` | Secret key from your Stripe dashboard |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Publishable key (not used server-side but good to have) |
| `STRIPE_STARTER_PRICE_ID` | Stripe Price ID for the $29/mo Starter plan |
| `STRIPE_PRO_PRICE_ID` | Stripe Price ID for the $49/mo Professional plan |
| `STRIPE_EXEC_PRICE_ID` | Stripe Price ID for the $99/mo Executive plan |
| `RESEND_API_KEY` | API key from resend.com |
| `CONTACT_EMAIL` | Email address that receives contact form submissions |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`) |

---

## Creating Stripe products and price IDs

1. Log in to [dashboard.stripe.com](https://dashboard.stripe.com).
2. Go to **Products** → **Add product**.
3. Create three recurring products:
   - **Starter** — $29.00 / month
   - **Professional** — $49.00 / month
   - **Executive** — $99.00 / month
4. After saving each product, copy its **Price ID** (starts with `price_…`).
5. Paste each into `.env.local` under the matching variable.

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js via `vercel.json`.
4. Add all environment variables in the Vercel project settings.
5. Deploy.

After first deploy, set your custom domain `mybizmailbox.biz` in Vercel's **Domains** tab.

---

## Design system

The design system files at the repo root are the source of truth:

| File | Role |
|---|---|
| `colors_and_type.css` | CSS custom properties, type scale, surface helpers |
| `website.css` | Layout classes: nav, sections, hero, tiles, pills, footer |
| `Nav.jsx` | Original React components (Babel/UMD) |
| `Tiles.jsx` | Original React components (Babel/UMD) |
| `index.html` | Standalone demo of the design system |

The Next.js app re-exports the same components as proper TypeScript ES modules from `components/Nav.tsx` and `components/Tiles.tsx`.

Design rules (non-negotiable):
- Binary sections only: `#000000` or `#f5f5f7`
- One accent: `#0071e3` on light, `#2997ff` on dark
- No gradients, textures, glow, glassmorphism
- No shadows except `rgba(0,0,0,0.22) 3px 5px 30px 0px`
- Sentence case everywhere, no exclamation points, no emoji
- Max content width 980 px centered

---

## Pre-launch checklist

- [ ] Replace YouTube embed URL in `app/page.tsx` (section 4) with your real video
- [ ] Fill all `.env.local` values and add them to Vercel
- [ ] Verify Stripe webhook endpoint if needed
- [ ] Confirm `CONTACT_EMAIL` receives test submissions
- [ ] Add real testimonials and remove placeholder names
- [ ] Set `NEXT_PUBLIC_GA_ID` and confirm GA events fire
- [ ] Point DNS for `mybizmailbox.biz` to Vercel
