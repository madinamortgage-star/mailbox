// Converted from Tiles.jsx — ES module exports, no window assignment.
// Footer columns updated for My Biz Mailbox.

import React from 'react';

interface ProductTileProps {
  theme?: 'dark' | 'light';
  eyebrow?: string;
  title?: React.ReactNode;
  titleAccent?: string;
  sub?: string;
  links?: { label: string; href?: string; arrow?: boolean }[];
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function ProductTile({
  theme = 'light',
  eyebrow,
  title,
  titleAccent,
  sub,
  links = [],
  children,
  style,
}: ProductTileProps) {
  return (
    <div className={`w-tile ${theme}`} style={style}>
      {eyebrow && <div className="w-tile-eyebrow">{eyebrow}</div>}
      {title && (
        <h3 className="w-tile-title">
          {title}
          {titleAccent && <> <span className="accent">{titleAccent}</span></>}
        </h3>
      )}
      {sub && <p className="w-tile-sub">{sub}</p>}
      {links.length > 0 && (
        <div className="w-tile-links">
          {links.map((l, i) => (
            <a key={i} href={l.href ?? '#'}>
              {l.label}{l.arrow !== false ? ' ›' : ''}
            </a>
          ))}
        </div>
      )}
      <div className="w-tile-visual">{children}</div>
    </div>
  );
}

interface FeatureGridProps {
  cols?: 2 | 3;
  children: React.ReactNode;
}

export function FeatureGrid({ cols = 2, children }: FeatureGridProps) {
  return <div className={`w-tiles cols-${cols}`}>{children}</div>;
}

// ─── Tile visuals (kept from original) ───────────────────────────

export function TileVisualInbox({ dark }: { dark?: boolean }) {
  return (
    <svg viewBox="0 0 200 120" width="200" style={{ color: dark ? '#fff' : '#1d1d1f' }}>
      <rect x="20" y="30" width="160" height="70" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 34 L100 80 L178 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="170" cy="36" r="7" fill="#0071e3" />
    </svg>
  );
}

export function TileVisualReplies({ dark }: { dark?: boolean }) {
  const c = dark ? '#fff' : '#1d1d1f';
  return (
    <svg viewBox="0 0 240 140" width="240" style={{ color: c }}>
      <rect x="10"  y="20"  width="140" height="32" rx="16" fill={dark ? '#28282a' : '#ededf2'} />
      <rect x="10"  y="60"  width="180" height="32" rx="16" fill={dark ? '#28282a' : '#ededf2'} />
      <rect x="10"  y="100" width="120" height="32" rx="16" fill="#0071e3" />
      <text x="24" y="40" fill={c} fontSize="11" fontFamily="-apple-system, Inter" letterSpacing="-0.2">Sounds good, shipping today.</text>
      <text x="24" y="80" fill={c} fontSize="11" fontFamily="-apple-system, Inter" letterSpacing="-0.2">Tracking info is on its way.</text>
      <text x="24" y="120" fill="#fff" fontSize="11" fontFamily="-apple-system, Inter" letterSpacing="-0.2" fontWeight="600">Use this draft</text>
    </svg>
  );
}

export function TileVisualTeam({ dark }: { dark?: boolean }) {
  const c = dark ? '#fff' : '#1d1d1f';
  const bg = dark ? '#28282a' : '#ededf2';
  return (
    <svg viewBox="0 0 240 140" width="240" style={{ color: c }}>
      {[0, 1, 2, 3].map(i => (
        <g key={i} transform={`translate(${24 + i * 48}, 40)`}>
          <circle r="18" fill={bg} />
          <text y="5" textAnchor="middle" fontSize="13" fill={c} fontFamily="-apple-system" fontWeight="600" letterSpacing="-0.3">
            {['PD', 'MV', 'NC', 'JL'][i]}
          </text>
        </g>
      ))}
      <rect x="24" y="78" width="192" height="10" rx="5" fill={bg} />
      <rect x="24" y="78" width="118" height="10" rx="5" fill="#0071e3" />
      <text x="24" y="110" fill={c} opacity="0.56" fontSize="10" fontFamily="-apple-system" letterSpacing="-0.1">3 teammates triaging · 62% cleared</text>
    </svg>
  );
}

export function TileVisualTemplates({ dark }: { dark?: boolean }) {
  const c = dark ? '#fff' : '#1d1d1f';
  const bg = dark ? '#28282a' : '#fff';
  const border = dark ? '#3a3a3d' : '#e5e5ea';
  return (
    <svg viewBox="0 0 240 140" width="240" style={{ color: c }}>
      {[0, 1, 2].map(i => (
        <g key={i} transform={`translate(${18 + i * 12}, ${14 + i * 10})`}>
          <rect width="180" height="110" rx="10" fill={bg} stroke={border} />
          <rect x="14" y="16" width="90" height="8" rx="4" fill="#0071e3" />
          <rect x="14" y="32" width="150" height="5" rx="2.5" fill={border} />
          <rect x="14" y="42" width="120" height="5" rx="2.5" fill={border} />
          <rect x="14" y="62" width="150" height="5" rx="2.5" fill={border} />
          <rect x="14" y="72" width="140" height="5" rx="2.5" fill={border} />
          <rect x="14" y="82" width="80"  height="5" rx="2.5" fill={border} />
        </g>
      ))}
    </svg>
  );
}

export function Footer() {
  const cols = [
    {
      h: 'Services',
      items: [
        { label: 'Business address', href: '#services' },
        { label: 'Package receiving', href: '#services' },
        { label: 'Mail scanning', href: '#services' },
        { label: 'Mail forwarding', href: '#services' },
        { label: 'Notary services', href: '#services' },
        { label: 'Meeting rooms', href: '#services' },
      ],
    },
    {
      h: 'Company',
      items: [
        { label: 'About', href: '#' },
        { label: 'Contact', href: '#contact' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      h: 'Help',
      items: [
        { label: 'FAQ', href: '#faq' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Support', href: '#contact' },
      ],
    },
    {
      h: 'Legal',
      items: [
        { label: 'Privacy policy', href: '#' },
        { label: 'Terms of service', href: '#' },
        { label: 'Acceptable use', href: '#' },
        { label: 'Sitemap', href: '/sitemap.xml' },
      ],
    },
  ];

  return (
    <footer className="w-footer">
      <div className="w-footer-inner">
        <div className="w-footer-cols">
          {cols.map(c => (
            <div key={c.h} className="w-footer-col">
              <h5>{c.h}</h5>
              {c.items.map(item => (
                <a key={item.label} href={item.href}>{item.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="w-footer-legal">
          <span>Copyright © 2026 My Biz Mailbox. All rights reserved.</span>
          <span>Privacy · Terms · Secured by Stripe</span>
        </div>
      </div>
    </footer>
  );
}
