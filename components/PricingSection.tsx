'use client';

import { useState } from 'react';

interface Plan {
  name: string;
  price: string;
  period: string;
  priceId: string;
  features: string[];
  popular?: boolean;
}

interface PricingSectionProps {
  starterPriceId: string;
  proPriceId: string;
  execPriceId: string;
}

export default function PricingSection({
  starterPriceId,
  proPriceId,
  execPriceId,
}: PricingSectionProps) {
  const [loading, setLoading] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      name: 'Starter',
      price: '$29',
      period: '/mo',
      priceId: starterPriceId,
      features: [
        'Street address in Rockwall, TX',
        'Mail receiving',
        'Email notifications',
      ],
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/mo',
      priceId: proPriceId,
      features: [
        'Everything in Starter',
        'Mail scanning',
        'Package handling',
        '30 mail items/mo',
      ],
      popular: true,
    },
    {
      name: 'Executive',
      price: '$99',
      period: '/mo',
      priceId: execPriceId,
      features: [
        'Everything in Professional',
        'Unlimited mail',
        'Notary services',
        'Meeting room access',
      ],
    },
  ];

  async function handleSubscribe(priceId: string, planName: string) {
    if (!priceId) {
      alert('This plan is not configured yet. Please contact us to subscribe.');
      return;
    }
    setLoading(planName);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch {
      alert('Something went wrong. Please try again or contact us directly.');
      setLoading(null);
    }
  }

  return (
    <section id="pricing" className="w-section dark">
      <div className="w-section-inner">
        <h2 className="w-hero-title" style={{ fontSize: 48, marginBottom: 8 }}>
          Simple, transparent pricing.
        </h2>
        <p className="w-hero-sub" style={{ fontSize: 19, marginBottom: 48 }}>
          No setup fees. Cancel anytime.
        </p>

        <div className="w-tiles cols-3">
          {plans.map(plan => (
            <div key={plan.name} className="w-tile dark" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
              {plan.popular && (
                <span className="popular-label">Most popular</span>
              )}
              <div className="w-tile-eyebrow" style={{ textTransform: 'none', fontSize: 20, fontWeight: 600, opacity: 1 }}>
                {plan.name}
              </div>
              <div className="pricing-price">{plan.price}</div>
              <div className="pricing-period">per month</div>
              <ul className="pricing-features">
                {plan.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                className="w-cta-pill filled"
                style={{ width: '100%', justifyContent: 'center', border: 'none', marginTop: 'auto' }}
                onClick={() => handleSubscribe(plan.priceId, plan.name)}
                disabled={loading === plan.name}
              >
                {loading === plan.name ? 'Redirecting...' : 'Subscribe now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
