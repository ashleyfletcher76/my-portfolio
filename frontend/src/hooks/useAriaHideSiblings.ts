'use client';

import { useEffect } from 'react';

export function useAriaHideSiblings(open: boolean, excludeAttr = 'data-mobile-menu') {
  useEffect(() => {
    if (!open) return;
    const nodes = Array.from(document.body.children) as HTMLElement[];

    nodes.forEach((el) => {
      if (!el.hasAttribute(excludeAttr)) {
        el.setAttribute('aria-hidden', 'true');
      }
    });

    return () => {
      nodes.forEach((el) => {
        if (!el.hasAttribute(excludeAttr)) {
          el.removeAttribute('aria-hidden');
        }
      });
    };
  }, [open, excludeAttr]);
}
