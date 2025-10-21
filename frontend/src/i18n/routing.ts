import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
	locales: ['en', 'de'],

	defaultLocale: 'en',
	localePrefix: 'as-needed',
	pathnames: {
		"/": {
      		en: "/",
      		de: "/",
    	},
		"/contact": {
			en: "/contact",
			de: "/kontakt",
		},
	},
});

export type Locale = (typeof routing.locales)[number];
export const {Link, redirect, usePathname, useRouter} =
	createNavigation(routing);
