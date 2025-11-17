'use client';

import { useLocale } from 'next-intl';

import { Locale, usePathname, useRouter } from '@/i18n/routing';

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const isDE = locale === 'de';
  const nextLocale: Locale = isDE ? 'en' : 'de';

  function toggle() {
    router.replace({ pathname }, { locale: nextLocale });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className={`relative flex h-7 w-[3.75rem] items-center justify-between overflow-hidden rounded-full bg-gray-200 p-1 transition-colors duration-300 dark:bg-gray-700`}
    >
      {/* Label text */}
      <span
        className={`absolute left-1.5 z-10 text-xs font-medium transition-colors duration-200 ${isDE ? 'text-gray-800 dark:text-gray-300' : 'text-white'} `}
      >
        EN
      </span>

      <span
        className={`absolute right-1.5 z-10 text-xs font-medium transition-colors duration-200 ${isDE ? 'text-white' : 'text-gray-800 dark:text-gray-300'} `}
      >
        DE
      </span>

      {/* Sliding knob */}
      <span
        className={`absolute top-0 left-0 h-7 w-7 transform rounded-full bg-gradient-to-r from-green-400 to-emerald-600 shadow-md transition-transform duration-300 ease-in-out ${isDE ? 'translate-x-[2rem]' : 'translate-x-0'} `}
      />
    </button>
  );
}
