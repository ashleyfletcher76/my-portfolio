"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid SSR hydration mismatch by only rendering the real UI after mount
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div
        aria-hidden
        className="w-[3.75rem] h-7 rounded-full bg-gray-200 dark:bg-gray-700"
      />
    );
  }

  const isDark = resolvedTheme === "dark";
  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`
        relative flex items-center justify-between w-[3.75rem] h-7
        rounded-full bg-gray-200 dark:bg-gray-700 p-1
        transition-colors duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
      `}
    >
      {/* Icons */}
    <Sun
      className={`
        absolute left-2 h-4 w-3 z-10 pointer-events-none
        text-amber-500 dark:text-amber-300
        transition-opacity duration-200
        ${isDark ? "opacity-50" : "opacity-100"}
      `}
      strokeWidth={2.25}
      aria-hidden
    />
    <Moon
      className={`
        absolute right-2 h-4 w-3 z-10 pointer-events-none
        text-slate-600 dark:text-indigo-200
        transition-opacity duration-200
        ${isDark ? "opacity-100" : "opacity-50"}
      `}
      strokeWidth={2.25}
      aria-hidden
    />

      {/* Sliding knob */}
      <span
        className={`
          absolute top-1 left-1 w-6 h-5 rounded-full shadow-md
          bg-gradient-to-r from-amber-300 to-yellow-500
          dark:from-indigo-400 dark:to-indigo-700
          transform transition-transform duration-300 ease-in-out
          ${isDark ? "translate-x-[1.75rem]" : "translate-x-0"}
        `}
      />
    </button>
  );
}
