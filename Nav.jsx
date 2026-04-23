const { useState } = React;

function Nav({ onNavigate = () => {} }) {
  const links = ["Mailbox", "Templates", "Teams", "Security", "Pricing", "Support"];
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
          {links.map(l => <a key={l} href="#" onClick={e => { e.preventDefault(); onNavigate(l); }}>{l}</a>)}
        </div>
        <div className="w-nav-right">
          <button aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          </button>
          <button aria-label="Account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a7 7 0 0 1 14 0v1"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function PromoStrip() {
  return (
    <div className="w-promo">
      <div className="w-promo-inner">
        <strong>New.</strong> Smart Replies is here. Three drafts. One tap.
        <a href="#">Learn more ›</a>
      </div>
    </div>
  );
}

function Hero({ theme = "dark", eyebrow, title, sub, ctaPrimary, ctaSecondary, visual }) {
  return (
    <section className={`w-section ${theme} tall`}>
      <div className="w-section-inner">
        {eyebrow && <div className="w-hero-eyebrow">{eyebrow}</div>}
        <h1 className="w-hero-title">{title}</h1>
        {sub && <p className="w-hero-sub">{sub}</p>}
        <div className="w-cta-row">
          {ctaPrimary && <a className="w-cta-pill outline" href="#">{ctaPrimary} ›</a>}
          {ctaSecondary && <a className="w-cta-pill filled" href="#">{ctaSecondary}</a>}
        </div>
        {visual && <div className="w-hero-visual">{visual}</div>}
      </div>
    </section>
  );
}

function HeroMockDark() {
  return (
    <div className="w-hero-product mock-dark">
      <MockApp dark />
    </div>
  );
}
function HeroMockLight() {
  return (
    <div className="w-hero-product mock-light">
      <MockApp />
    </div>
  );
}

function MockApp({ dark = false }) {
  return (
    <div className="w-mock">
      <div className="col">
        <div className="w-mock-title">Mailboxes</div>
        <div className="w-mock-item active">● Support</div>
        <div className="w-mock-item">● Sales</div>
        <div className="w-mock-item">● Billing</div>
        <div className="w-mock-item">● Press</div>
      </div>
      <div className="col">
        <div className="w-mock-title">Inbox · 24</div>
        <div className="w-mock-thread selected">
          <div className="from">Priya Desai</div>
          <div className="sub">Can we expedite order #3412?</div>
        </div>
        <div className="w-mock-thread">
          <div className="from">Marc Vollmer</div>
          <div className="sub">Re: invoice question</div>
        </div>
        <div className="w-mock-thread">
          <div className="from">Naomi Chen</div>
          <div className="sub">Gift card not working</div>
        </div>
      </div>
      <div className="col">
        <div className="w-mock-msg-head">
          <div className="w-mock-msg-subject">Can we expedite order #3412?</div>
          <div className="w-mock-msg-meta">Priya Desai · 2:41 PM · Support</div>
        </div>
        <div className="w-mock-msg-body">
          Hi — my order needs to arrive by Friday. Is there any way to upgrade to overnight? Happy to pay the difference. Thanks!
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Nav, PromoStrip, Hero, HeroMockDark, HeroMockLight, MockApp });
