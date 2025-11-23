'use client';

import { useTranslations } from 'next-intl';

export function ModalHeader({ onClose }: { onClose: () => void }) {
  const t = useTranslations('Education');

  return (
    <div className="flex items-start justify-between">
      <h2 id="certs-modal-title" className="text-lg font-semibold text-black">
        {t('certsTitle')}
      </h2>
      <button
        type="button"
        onClick={onClose}
        className="hover:text-foreground text-red-600"
        autoFocus
        aria-label="close modal"
      >
        x
      </button>
    </div>
  );
}
