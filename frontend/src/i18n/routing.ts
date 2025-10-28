import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],

  defaultLocale: 'en',
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
      de: '/ueber',
    },
    '/education': {
      en: '/education',
      de: '/ausbildung',
    },
    '/projects': {
      en: '/projects',
      de: '/projekte',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
