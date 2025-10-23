import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],

  defaultLocale: 'en',
  // localePrefix: 'as-needed',
  pathnames: {
    '/': {
      en: '/',
      de: '/',
    },
    '/contact': {
      en: '/contact',
      de: '/kontakt',
    },
    '/about': {
      en: '/about',
      de: '/ueber', // adjust to your actual German path
    },
    '/education': {
      en: '/education',
      de: '/ausbildung', // adjust as needed
    },
    '/projects': {
      en: '/projects',
      de: '/projekte', // adjust as needed
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
