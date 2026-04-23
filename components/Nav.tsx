// Converted from Nav.jsx — ES module exports, no window assignment.
// Links and CTA updated for My Biz Mailbox marketing site.

export function PromoStrip() {
  return (
    <div className="w-promo">
      <div className="w-promo-inner">
        <strong>Now open in Rockwall, TX.</strong> Professional mailboxes for your business.
        <a href="#pricing">Get started ›</a>
      </div>
    </div>
  );
}

export function Nav() {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-nav">
      <div className="w-nav-inner">
        <div className="w-nav-logo">
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="7" width="26" height="18" rx="3" />
            <path d="M4 9 L16 18 L28 9" />
            <circle cx="24.5" cy="10.5" r="2.5" fill="#0071e3" stroke="none" />
          </svg>
          <span className="w-nav-logo-text">My Biz Mailbox</span>
        </div>
        <div className="w-nav-links">
          {links.map(l => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </div>
        <div className="w-nav-right">
          <a className="w-cta-pill filled" href="#pricing" style={{ fontSize: 13, padding: '6px 14px' }}>
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}

interface HeroProps {
  theme?: 'dark' | 'light';
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  ctaPrimary?: string;
  ctaPrimaryHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  visual?: React.ReactNode;
}

export function Hero({
  theme = 'dark',
  eyebrow,
  title,
  sub,
  ctaPrimary,
  ctaPrimaryHref = '#',
  ctaSecondary,
  ctaSecondaryHref = '#',
  visual,
}: HeroProps) {
  return (
    <section className={`w-section ${theme} tall`}>
      <div className="w-section-inner">
        {eyebrow && <div className="w-hero-eyebrow">{eyebrow}</div>}
        <h1 className="w-hero-title">{title}</h1>
        {sub && <p className="w-hero-sub">{sub}</p>}
        <div className="w-cta-row">
          {ctaPrimary && (
            <a className="w-cta-pill outline" href={ctaPrimaryHref}>{ctaPrimary} ›</a>
          )}
          {ctaSecondary && (
            <a className="w-cta-pill filled" href={ctaSecondaryHref}>{ctaSecondary}</a>
          )}
        </div>
        {visual && <div className="w-hero-visual">{visual}</div>}
      </div>
    </section>
  );
}
