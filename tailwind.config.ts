import type { Config } from 'tailwindcss';

/**
 * Design tokens for the demo app.
 * Components must use ONLY these semantic tokens (no hex values, no arbitrary values like w-[237px]).
 *
 * Spacing: the default Tailwind scale (4px steps: p-1 = 4px, p-2 = 8px, p-4 = 16px, p-6 = 24px).
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#ffffff',
        'surface-muted': '#f1f5f9',
        content: '#0f172a',
        'content-muted': '#475569',
        primary: '#4f46e5',
        'primary-foreground': '#ffffff',
        border: '#cbd5e1',
        danger: '#dc2626',
      },
      borderRadius: {
        control: '8px',
        card: '12px',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
