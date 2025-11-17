import { getFocusable } from './focusableHelper';

import type { RefObject, KeyboardEvent } from 'react';

export function createTrapTabHandler(panelRef: RefObject<HTMLElement | null>) {
  return function handleTrapTab(e: KeyboardEvent<HTMLElement>) {
    if (e.key !== 'Tab') return;
    const root = panelRef.current;
    const nodes = getFocusable(root);
    if (nodes.length === 0) return;

    const first = nodes[0];
    const last = nodes[nodes.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
}
