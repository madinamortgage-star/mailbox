import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: { extend: {} },
  corePlugins: {
    // Disable Tailwind's base reset — the design system provides its own.
    preflight: false,
  },
};

export default config;
