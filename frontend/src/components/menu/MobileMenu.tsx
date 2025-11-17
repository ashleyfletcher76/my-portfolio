'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

import { useAriaHideSiblings } from '@/hooks/useAriaHideSiblings';
import { useEscape } from '@/hooks/useEscape';
import { useScrollLock } from '@/hooks/useScrollLock';

import { createTrapTabHandler } from './createTrapTab';

export function MobileMenu({
  id,
  open,
  onClose,
  children,
}: {
  id?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const t = useTranslations('Navigation');
  useEscape(() => open && onClose());
  useScrollLock(open);
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  useAriaHideSiblings(open);

  if (!open) return null;

  return (
    <div
      data-mobile-menu
      className="fixed inset-0 z-50 md:hidden"
      onClick={onClose}
      aria-hidden={false}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm dark:bg-black/40" />
      <aside
        id={id}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        tabIndex={-1}
        className="bg-background animate-in slide-in-from-right text-slate=900 dark:text-foreground absolute inset-y-0 right-0 flex w-[34rem] max-w-[90vw] translate-x-0 flex-col py-4 text-4xl shadow-xl duration-200"
        onClick={(e) => e.stopPropagation()}
        ref={panelRef}
        onKeyDown={createTrapTabHandler(panelRef)}
      >
        <h2 id="mobile-menu-title" className="sr-only">
          {t('menu')}
        </h2>
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
        <nav className="mt-8 flex flex-col gap-3 text-center text-4xl">{children}</nav>
      </aside>
    </div>
  );
}
