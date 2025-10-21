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
      className={`
        relative flex items-center justify-between w-[3.75rem] h-7
        rounded-full bg-gray-200 dark:bg-gray-700
        p-1 transition-colors duration-300
      `}
    >
      {/* Label text */}
      <span
        className={`absolute left-3 text-xs font-medium transition-colors duration-200 ${
          isDE ? 'text-gray-400' : 'text-white'
        }`}
      >
        EN
      </span>
      <span
        className={`absolute right-3 text-xs font-medium transition-colors duration-200 ${
          isDE ? 'text-white' : 'text-gray-400'
        }`}
      >
        DE
      </span>

      {/* Sliding knob */}
      <span
        className={`
          absolute top-1 left-1 w-6 h-5 rounded-full shadow-md
          bg-gradient-to-r from-green-400 to-emerald-600
          transform transition-transform duration-300 ease-in-out
          ${isDE ? 'translate-x-[1.75rem]' : 'translate-x-0'}
        `}
      />
    </button>
  );
}
