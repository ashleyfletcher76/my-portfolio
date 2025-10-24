import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Use <alpha-value> so utilities like bg-*/80 work
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        'card-foreground': 'rgb(var(--card-foreground) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // moves left by half (because we duplicate content)
        },
        wobble: {
          '0%,100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
      },
      animation: {
        'scroll-x': 'scrollX 20s linear infinite',
        'wobble-slow': 'wobble 4s ease-in-out infinite',
        'spin-slower': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
