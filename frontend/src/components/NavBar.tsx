'use client';

import { useEffect, useRef, useState } from 'react';

import { MobileMenu } from './menu/MobileMenu';
import { NavLinks } from './menu/NavLinks';
import LanguageSwitch from './toggle/LanguageToggle';
import ThemeToggle from './toggle/ThemeToggle';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const MENU_ID = 'mobile-menu';

  useEffect(() => {
    if (!open) btnRef.current?.focus();
  }, [open]);

  return (
    <header className="navbar fixed inset-x-0 top-0 z-40 flex h-12 items-center justify-between px-2 text-2xl">
      <div className="font-semibold">Ashley Fletcher</div>

      {/* Desktop (md+) */}
      <nav className="hidden items-center gap-4 text-2xl md:flex">
        <NavLinks />
      </nav>
      <div className="ml-auto flex items-center gap-3">
        {/* Mobile (<= md) */}
        {!open && (
          <>
            <LanguageSwitch />
            <ThemeToggle />
            <button
              ref={btnRef}
              type="button"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-controls={MENU_ID}
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="border-border mt-2 inline-flex size-10 items-center justify-center rounded-lg border md:mt-0 md:hidden"
            >
              <span className="sr-only">Open menu</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-current"></span>
                <span className="block h-0.5 w-6 bg-current"></span>
                <span className="block h-0.5 w-6 bg-current"></span>
              </div>
            </button>
          </>
        )}

        {/* <LanguageSwitch />
            <ThemeToggle /> */}
        <MobileMenu id={MENU_ID} open={open} onClose={() => setOpen(false)}>
          <NavLinks onItemClick={() => setOpen(false)} />

          <div className="flex items-center justify-between px-4"></div>
        </MobileMenu>
      </div>
    </header>
  );
}
