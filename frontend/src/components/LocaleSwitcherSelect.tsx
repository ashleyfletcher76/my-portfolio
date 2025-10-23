'use client';

import { Locale, routing, usePathname, useRouter } from '@/i18n/routing';

type Props = {
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value as Locale;
    router.replace({ pathname }, { locale: nextLocale });
  }

  return (
    <select
      aria-label={label}
      defaultValue={defaultValue}
      onChange={onChange}
      className="h-8 w-[90px] rounded border bg-transparent px-2"
    >
      {routing.locales.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
