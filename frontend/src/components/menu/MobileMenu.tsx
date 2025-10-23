'use client';

import { useTranslations } from 'next-intl';

import { useEscape } from '@/hooks/useEscape';
import { useScrollLock } from '@/hooks/useScrollLock';

export function MobileMenu({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const t = useTranslations('Navigation');
  useEscape(() => open && onClose());
  useScrollLock(open);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 md:hidden" onClick={onClose}>
      <aside
        className="bg-background animate-in slide-in-from-right absolute inset-y-0 right-0 flex w-[34rem] max-w-[90vw] translate-x-0 flex-col py-4 shadow-xl duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 pb-2">
          <div className="font-medium">{t('menu')}</div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="border-border inline-flex size-10 items-center justify-center rounded-lg border"
          >
            <span className="sr-only">Close</span>×
          </button>
        </div>
        <nav className="mt-2 flex flex-col gap-1 text-center">{children}</nav>
      </aside>
    </div>
  );
}
