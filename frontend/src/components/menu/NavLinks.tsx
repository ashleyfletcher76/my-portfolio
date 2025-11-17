'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

type Route = '/' | '/about' | '/education' | '/projects' | '/contact';

export function NavLinks({ onItemClick }: { onItemClick?: () => void }) {
  const t = useTranslations('Navigation');
  const item = (href: Route, label: string) => (
    <Link
      key={href}
      href={href}
      className="hover:bg-muted focus-visible:ring-primary rounded-lg px-4 py-3 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      onClick={onItemClick}
    >
      {label}
    </Link>
  );

  return (
    <>
      {item('/', t('home'))}
      {item('/about', t('about'))}
      {item('/education', t('education'))}
      {item('/projects', t('projects'))}
      {item('/contact', t('contact'))}
    </>
  );
}
