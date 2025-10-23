'use client';

import { useEffect, useRef, useState } from 'react';

import { MobileMenu } from './menu/MobileMenu';
import { NavLinks } from './menu/NavLinks';
import LanguageSwitch from './toggle/LanguageToggle';
import ThemeToggle from './toggle/ThemeToggle';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) btnRef.current?.focus();
  }, [open]);

  return (
    <header className="flex items-center gap-3 p-4">
      <div className="font-semibold">Ashley Fletcher</div>

      {/* Desktop (md+) */}
      <nav className="hidden items-center gap-4 md:flex">
        <NavLinks />
      </nav>
      <div className="ml-auto flex items-center gap-3">
        <LanguageSwitch />
        <ThemeToggle />
        {/* Mobile (<= md) */}
        <button
          ref={btnRef}
          type="button"
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="border-border inline-flex size-10 items-center justify-center rounded-lg border md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
          </div>
        </button>

        {/* <LanguageSwitch />
            <ThemeToggle /> */}
        <MobileMenu open={open} onClose={() => setOpen(false)}>
          <NavLinks onItemClick={() => setOpen(false)} />
          <div className="border-border mt-4 border-t" />
          <div className="flex items-center justify-between px-4"></div>
        </MobileMenu>
      </div>
    </header>
  );
}
