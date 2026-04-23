import type { Metadata } from 'next';
import { Nav, PromoStrip } from '@/components/Nav';
import { FeatureGrid, ProductTile, Footer } from '@/components/Tiles';
import PricingSection from '@/components/PricingSection';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'My Biz Mailbox — Business Mailbox Services in Rockwall, TX',
  description:
    'Get a professional business street address in Rockwall, TX for your LLC, packages, and mail. Plans from $29/mo. Serving the greater Dallas–Fort Worth area.',
};

// ─── SVG: envelope + location pin for hero ────────────────────────
function HeroVisual() {
  return (
    <svg
      viewBox="0 0 320 210"
      width="320"
      fill="none"
      aria-hidden="true"
      style={{ maxWidth: '100%' }}
    >
      {/* Envelope body */}
      <rect x="20" y="55" width="220" height="140" rx="14"
        stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      {/* Envelope flap */}
      <path d="M22 62 L130 140 L238 62"
        stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Location pin body */}
      <path d="M252 12 C237 12 226 23 226 38 C226 56 252 78 252 78 C252 78 278 56 278 38 C278 23 267 12 252 12Z"
        fill="#2997ff" />
      {/* Pin inner circle */}
      <circle cx="252" cy="38" r="9" fill="#000" opacity="0.3" />
      <circle cx="252" cy="38" r="5" fill="#fff" opacity="0.9" />
    </svg>
  );
}

// ─── Service icons ────────────────────────────────────────────────
function IconAddress() {
  return (
    <svg viewBox="0 0 80 80" width="64" fill="none" aria-hidden="true">
      <rect x="12" y="20" width="56" height="42" rx="6" stroke="#2997ff" strokeWidth="1.5" />
      <path d="M12 34 h56" stroke="#2997ff" strokeWidth="1.5" />
      <rect x="32" y="44" width="16" height="18" rx="2" stroke="#2997ff" strokeWidth="1.5" />
    </svg>
  );
}
function IconPackage() {
  return (
    <svg viewBox="0 0 80 80" width="64" fill="none" aria-hidden="true">
      <rect x="12" y="30" width="56" height="38" rx="6" stroke="#2997ff" strokeWidth="1.5" />
      <path d="M12 44 h56" stroke="#2997ff" strokeWidth="1.5" />
      <path d="M40 30 V14" stroke="#2997ff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 14 h24 l6 16 H22Z" stroke="#2997ff" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="60" cy="24" r="7" fill="#2997ff" />
      <path d="M57 24 l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconScan() {
  return (
    <svg viewBox="0 0 80 80" width="64" fill="none" aria-hidden="true">
      <rect x="14" y="18" width="36" height="44" rx="4" stroke="#2997ff" strokeWidth="1.5" />
      <path d="M20 30 h24 M20 38 h20 M20 46 h16" stroke="#2997ff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M56 28 v24" stroke="#2997ff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M48 28 h12 M48 52 h12" stroke="#2997ff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconAccess() {
  return (
    <svg viewBox="0 0 80 80" width="64" fill="none" aria-hidden="true">
      <circle cx="40" cy="34" r="14" stroke="#2997ff" strokeWidth="1.5" />
      <path d="M26 48 C26 48 18 62 18 66 h44 c0-4-8-18-8-18" stroke="#2997ff" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="40" cy="34" r="4" fill="#2997ff" />
      <path d="M40 22 V18 M40 50 V46 M28 34 H24 M56 34 H52" stroke="#2997ff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconNotary() {
  return (
    <svg viewBox="0 0 80 80" width="64" fill="none" aria-hidden="true">
      <rect x="18" y="16" width="44" height="52" rx="5" stroke="#2997ff" strokeWidth="1.5" />
      <path d="M26 30 h28 M26 40 h28 M26 50 h18" stroke="#2997ff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M52 52 l10 10" stroke="#2997ff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="52" cy="52" r="5" fill="#2997ff" />
    </svg>
  );
}
function IconMeeting() {
  return (
    <svg viewBox="0 0 80 80" width="64" fill="none" aria-hidden="true">
      <rect x="10" y="26" width="60" height="38" rx="6" stroke="#2997ff" strokeWidth="1.5" />
      <path d="M10 38 h60" stroke="#2997ff" strokeWidth="1.5" />
      <path d="M26 26 V18 M54 26 V18" stroke="#2997ff" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="52" r="5" fill="#2997ff" opacity="0.7" />
      <circle cx="40" cy="52" r="5" fill="#2997ff" opacity="0.7" />
      <circle cx="52" cy="52" r="5" fill="#2997ff" opacity="0.7" />
    </svg>
  );
}

// ─── JSON-LD LocalBusiness schema ─────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'My Biz Mailbox',
  description:
    'Professional business mailbox services in Rockwall, TX. Real street address for your LLC, packages, and mail.',
  url: 'https://mybizmailbox.biz',
  telephone: '+14698934120',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '802 North Goliad Street',
    addressLocality: 'Rockwall',
    addressRegion: 'TX',
    postalCode: '75087',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
};

// ─── FAQ data ─────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is a business mailbox?',
    a: 'A business mailbox gives your company a real street address — not a P.O. box — where you can receive mail and packages from any carrier. It also provides a professional, stable address you can print on business cards, use for LLC registration, and list on Google.',
  },
  {
    q: 'Can I use this address to register my LLC?',
    a: 'Yes. Our Rockwall, TX address at 802 North Goliad Street meets the requirements for LLC and business entity registration in Texas. Many of our members use it as their registered agent address or principal business address.',
  },
  {
    q: 'How does mail forwarding work?',
    a: 'We scan the outside of each piece of mail and notify you by email. You can then log in and request forwarding to any address, request a scan of the contents, or let us hold it for pickup. Forwarding fees depend on weight and destination.',
  },
  {
    q: 'What carriers do you accept packages from?',
    a: 'We accept deliveries from all major carriers including USPS, UPS, FedEx, Amazon Logistics, DHL, and most regional carriers. If it can be delivered to a street address, we can receive it.',
  },
  {
    q: 'How will I be notified when mail arrives?',
    a: 'You receive an email notification as soon as your mail or package is checked in — typically within a few hours of arrival during business hours. Email alerts include a scan of the exterior so you can identify the sender.',
  },
  {
    q: 'What are your access hours?',
    a: 'Our location at 802 North Goliad Street is open Monday through Saturday from 9 am to 6 pm. Members on the Executive plan have 24/7 key-fob access to the mailbox area.',
  },
  {
    q: "What happens to my packages if I can't pick them up?",
    a: 'We hold packages securely on-site for up to 30 days at no extra charge. After 30 days, a small storage fee applies. You can always request forwarding if pickup is not convenient.',
  },
  {
    q: 'Where exactly are you located in Rockwall, TX?',
    a: 'We are at 802 North Goliad Street, Rockwall, TX 75087 — just a few minutes from I-30 and the Rockwall town center. Ample parking is available on site.',
  },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Promo strip */}
      <PromoStrip />

      {/* 2. Nav */}
      <Nav />

      {/* 3. Hero — dark */}
      <section className="w-section dark tall">
        <div className="w-section-inner">
          <div className="w-hero-eyebrow">My Biz Mailbox</div>
          <h1 className="w-hero-title">
            Your business address.<br />Professionally managed.
          </h1>
          <p className="w-hero-sub">
            A real Rockwall, TX street address for your LLC, packages, and mail — starting at $29/mo.
          </p>
          <div className="w-cta-row">
            <a className="w-cta-pill outline" href="#pricing">View plans ›</a>
            <a className="w-cta-pill filled" href="#video">Watch how it works</a>
          </div>
          <div className="w-hero-visual">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* 4. Video — light */}
      <section id="video" className="w-section light">
        <div className="w-section-inner">
          <h2 className="w-hero-title" style={{ fontSize: 48, color: '#1d1d1f' }}>
            See how My Biz Mailbox works.
          </h2>
          <p className="w-hero-sub" style={{ color: 'rgba(29,29,31,0.8)' }}>
            Everything you need to know in 90 seconds.
          </p>
          <div className="w-hero-visual">
            <div
              className="w-hero-product"
              style={{ width: '100%', maxWidth: 720, aspectRatio: '16/9' }}
            >
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="My Biz Mailbox — how it works"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p style={{ font: '400 12px/1.4 var(--font-text,-apple-system,sans-serif)', color: '#86868b', marginTop: 14 }}>
            Replace this URL with your real video before going live.
          </p>
        </div>
      </section>

      {/* 5. Services — dark */}
      <section id="services" className="w-section dark">
        <div className="w-section-inner">
          <h2 className="w-hero-title" style={{ fontSize: 48, marginBottom: 48 }}>
            Everything your business needs.
          </h2>
          <FeatureGrid cols={3}>
            <ProductTile
              theme="dark"
              title="Business street address"
              sub="A permanent, professional address you can use for your LLC, business cards, and Google listing."
            >
              <div className="service-icon"><IconAddress /></div>
            </ProductTile>
            <ProductTile
              theme="dark"
              title="Package receiving"
              titleAccent="& notifications"
              sub="We accept deliveries from every carrier and send you an email the moment your package arrives."
            >
              <div className="service-icon"><IconPackage /></div>
            </ProductTile>
            <ProductTile
              theme="dark"
              title="Mail scanning"
              titleAccent="& forwarding"
              sub="Request a digital scan of any piece of mail, or have it forwarded to any address worldwide."
            >
              <div className="service-icon"><IconScan /></div>
            </ProductTile>
            <ProductTile
              theme="dark"
              title="24/7 mailbox"
              titleAccent="access"
              sub="Executive members get round-the-clock key-fob access so you can collect mail on your schedule."
            >
              <div className="service-icon"><IconAccess /></div>
            </ProductTile>
            <ProductTile
              theme="dark"
              title="Notary"
              titleAccent="services"
              sub="A certified notary is on site during business hours — no appointment required for most documents."
            >
              <div className="service-icon"><IconNotary /></div>
            </ProductTile>
            <ProductTile
              theme="dark"
              title="Meeting room"
              titleAccent="access"
              sub="Book a private conference room by the hour for client meetings, interviews, or focused work sessions."
            >
              <div className="service-icon"><IconMeeting /></div>
            </ProductTile>
          </FeatureGrid>
        </div>
      </section>

      {/* 6. How It Works — light */}
      <section id="how-it-works" className="w-section light">
        <div className="w-section-inner">
          <h2 className="w-hero-title" style={{ fontSize: 48, color: '#1d1d1f', marginBottom: 48 }}>
            Up and running in minutes.
          </h2>
          <FeatureGrid cols={3}>
            <ProductTile
              theme="light"
              title="Choose a plan"
              sub="Pick the package that fits your volume. Upgrade or downgrade at any time — no lock-in."
            >
              <div className="step-number">1.</div>
            </ProductTile>
            <ProductTile
              theme="light"
              title="Set your address"
              sub="Use 802 North Goliad Street, Rockwall TX 75087 on your LLC filing, business accounts, and shipping labels."
            >
              <div className="step-number">2.</div>
            </ProductTile>
            <ProductTile
              theme="light"
              title="Start receiving mail"
              sub="We sign for packages, scan envelopes, and email you the moment anything arrives in your box."
            >
              <div className="step-number">3.</div>
            </ProductTile>
          </FeatureGrid>
        </div>
      </section>

      {/* 7. Pricing — client component handles Stripe */}
      <PricingSection
        starterPriceId={process.env.STRIPE_STARTER_PRICE_ID ?? ''}
        proPriceId={process.env.STRIPE_PRO_PRICE_ID ?? ''}
        execPriceId={process.env.STRIPE_EXEC_PRICE_ID ?? ''}
      />

      {/* 8. SEO content — light */}
      <section className="w-section light">
        <div className="w-section-inner">
          <h2 className="w-hero-title" style={{ fontSize: 40, color: '#1d1d1f' }}>
            Why Rockwall, TX businesses choose My Biz Mailbox.
          </h2>
          <div className="seo-body">
            <p>
              Running a small business, LLC, or sole proprietorship in Texas comes with one persistent
              challenge: your official address follows you everywhere — tax filings, state registrations,
              Google Business listings, and client-facing materials. Using a home address works until it
              doesn&rsquo;t, exposing your personal residence to public records and making it harder to
              maintain a professional image as your company grows. My Biz Mailbox gives Rockwall-area
              businesses a legitimate street address at 802 North Goliad Street that meets Texas Secretary
              of State requirements for LLC registration and serves as a stable anchor for all your
              business correspondence.
            </p>
            <p>
              For remote workers, freelancers, and home-based businesses across the greater DFW
              metroplex — from Rowlett and Garland to Forney and Greenville — a Rockwall address signals
              stability to clients and partners without requiring you to lease expensive office space.
              Whether you&rsquo;re a consultant billing Fortune 500 clients, a product company shipping
              from a garage, or a licensed professional who needs a compliant business address for your
              state board filings, we have a plan sized to match.
            </p>
            <p>
              Package receiving is a core part of what we do. We accept deliveries from every major
              carrier — USPS, UPS, FedEx, Amazon, DHL, and regional services — and check them in the
              same day they arrive. You get an email notification with an exterior scan so you always
              know what has landed and when. Packages are held securely on site for up to 30 days,
              and Executive members can pick them up any time day or night.
            </p>
            <p>
              The Dallas–Fort Worth area is one of the fastest-growing business corridors in the
              country, and Rockwall is at its eastern edge — close enough to the metro to be credible,
              distinct enough to stand out. As your company scales, My Biz Mailbox scales with you:
              add mail scanning, upgrade your mail volume allowance, or book our on-site meeting rooms
              when you need a professional space to close a deal.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQ — light */}
      <section id="faq" className="w-section light" style={{ paddingTop: 48 }}>
        <div className="w-section-inner">
          <h2 className="w-hero-title" style={{ fontSize: 48, color: '#1d1d1f' }}>
            Questions.
          </h2>
          <div className="faq-list">
            {faqs.map(({ q, a }) => (
              <details key={q} className="faq-item">
                <summary>{q}</summary>
                <p className="faq-answer">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials — dark */}
      <section className="w-section dark">
        <div className="w-section-inner">
          <h2 className="w-hero-title" style={{ fontSize: 48, marginBottom: 48 }}>
            Trusted by Rockwall businesses.
          </h2>
          <FeatureGrid cols={3}>
            <div className="w-tile dark" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
              <p className="testimonial-quote">
                &ldquo;Separating my home address from my LLC registration was the best decision I made
                when starting out. My Biz Mailbox made the switch completely painless.&rdquo;
              </p>
              <div>
                <div className="testimonial-author">Marcus R.</div>
                <div className="testimonial-role">Commercial real estate consultant, Rockwall TX</div>
              </div>
            </div>
            <div className="w-tile dark" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
              <p className="testimonial-quote">
                &ldquo;I run an e-commerce business from home and we ship a lot of returns through here.
                The package notifications are instant and the staff actually know who I am.&rdquo;
              </p>
              <div>
                <div className="testimonial-author">Diane T.</div>
                <div className="testimonial-role">Online retailer, Rowlett TX</div>
              </div>
            </div>
            <div className="w-tile dark" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
              <p className="testimonial-quote">
                &ldquo;The notary service alone saves me a trip across town once a month. Everything
                is in one place, the price is fair, and the setup took about ten minutes.&rdquo;
              </p>
              <div>
                <div className="testimonial-author">Priya S.</div>
                <div className="testimonial-role">Independent financial advisor, Forney TX</div>
              </div>
            </div>
          </FeatureGrid>
        </div>
      </section>

      {/* 11. Contact — light */}
      <section id="contact" className="w-section light">
        <div className="w-section-inner" style={{ textAlign: 'left' }}>
          <h2 className="w-hero-title" style={{ fontSize: 48, color: '#1d1d1f', textAlign: 'center' }}>
            Get in touch.
          </h2>
          <div className="contact-grid">
            {/* Left: info */}
            <div>
              <p className="contact-info-label">Address</p>
              <p className="contact-info-value">
                802 North Goliad Street<br />
                Rockwall, TX 75087
              </p>
              <p className="contact-info-label">Phone</p>
              <p className="contact-info-value">
                <a href="tel:+14698934120" style={{ color: '#0071e3', textDecoration: 'none' }}>
                  (469) 893-4120
                </a>
              </p>
              <p className="contact-info-label">Hours</p>
              <p className="contact-info-value">
                Mon–Sat, 9 am–6 pm
              </p>
              <p className="contact-info-label">Signup</p>
              <p className="contact-info-value" style={{ marginBottom: 0 }}>
                <a
                  href="https://mybizmailbox.coworksapp.com/membership-signup/6953"
                  className="w-cta-pill outline"
                  style={{ display: 'inline-flex', marginTop: 4 }}
                >
                  Sign up online ›
                </a>
              </p>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <Footer />
    </>
  );
}
