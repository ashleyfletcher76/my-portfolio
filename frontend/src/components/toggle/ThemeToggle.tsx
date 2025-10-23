'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid SSR hydration mismatch by only rendering the real UI after mount
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div aria-hidden className="h-7 w-[3.75rem] rounded-full bg-gray-200 dark:bg-gray-700" />
    );
  }

  const isDark = resolvedTheme === 'dark';
  const toggle = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={`relative flex h-7 w-[3.75rem] items-center justify-between rounded-full bg-gray-200 p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:bg-gray-700`}
    >
      {/* Icons */}
      <Sun
        className={`pointer-events-none absolute left-2 z-10 h-4 w-4 text-amber-700 transition-opacity duration-200 dark:text-amber-100 ${isDark ? 'opacity-50' : 'opacity-100'} `}
        strokeWidth={2.25}
        aria-hidden
      />
      <Moon
        className={`pointer-events-none absolute right-2 z-10 h-4 w-4 text-slate-600 transition-opacity duration-200 dark:text-indigo-200 ${isDark ? 'opacity-100' : 'opacity-50'} `}
        strokeWidth={2.25}
        aria-hidden
      />

      {/* Sliding knob */}
      <span
        className={`absolute top-0 left-0 h-7 w-7 transform rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 shadow-md transition-transform duration-300 ease-in-out dark:from-indigo-400 dark:to-indigo-700 ${isDark ? 'translate-x-[2rem]' : 'translate-x-0'} `}
      />
    </button>
  );
}
