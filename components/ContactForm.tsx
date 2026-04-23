'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  function set(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div style={{ padding: '32px 0' }}>
        <p style={{ font: '600 20px/1.3 var(--font-display, -apple-system, sans-serif)', color: '#1d1d1f', marginBottom: 8 }}>
          Message received.
        </p>
        <p style={{ font: '400 15px/1.5 var(--font-text, -apple-system, sans-serif)', color: 'rgba(29,29,31,0.7)' }}>
          We&#39;ll get back to you within one business day.
        </p>
        <button
          className="w-cta-pill outline"
          style={{ marginTop: 20, border: '1px solid #0066cc', color: '#0066cc', background: 'transparent', cursor: 'pointer' }}
          onClick={() => setStatus('idle')}
        >
          Send another message ›
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="ds-field">
        <label className="ds-label" htmlFor="name">Name</label>
        <input
          id="name"
          className="ds-input"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={set('name')}
          required
        />
      </div>
      <div className="ds-field">
        <label className="ds-label" htmlFor="email">Email</label>
        <input
          id="email"
          className="ds-input"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={set('email')}
          required
        />
      </div>
      <div className="ds-field">
        <label className="ds-label" htmlFor="phone">Phone (optional)</label>
        <input
          id="phone"
          className="ds-input"
          type="tel"
          placeholder="(469) 000-0000"
          value={form.phone}
          onChange={set('phone')}
        />
      </div>
      <div className="ds-field">
        <label className="ds-label" htmlFor="message">Message</label>
        <textarea
          id="message"
          className="ds-input"
          placeholder="How can we help?"
          rows={5}
          value={form.message}
          onChange={set('message')}
          required
          style={{ resize: 'vertical' }}
        />
      </div>
      {status === 'error' && (
        <p style={{ font: '400 13px/1.4 var(--font-text, -apple-system, sans-serif)', color: '#c00', marginBottom: 12 }}>
          Something went wrong. Please try again or call us directly.
        </p>
      )}
      <button
        className="w-cta-pill filled"
        type="submit"
        disabled={status === 'sending'}
        style={{ border: 'none', cursor: status === 'sending' ? 'default' : 'pointer' }}
      >
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}
