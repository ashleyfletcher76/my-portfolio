import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="border-border text-muted-foreground mt-10 border-t py-6 text-sm">
      <div className="max-w-5xl px-4">
        <p>
          {new Date().getFullYear()} Ashley Fletcher ·{' '}
          <Link href="/imprint" className="hover:text-foreground underline">
            {t('credits')}
          </Link>
        </p>
      </div>
    </footer>
  );
}
