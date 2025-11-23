'use client';

import { useTranslations } from 'next-intl';

export function ModalHeader({ onClose }: { onClose: () => void }) {
  const t = useTranslations('Education');

  return (
    <div className="flex items-start justify-between">
      <h2 className="text-lg font-semibold">{t('certsTitle')}</h2>
      <button
        type="button"
        onClick={onClose}
        className="text-muted-foreground hover:text-foreground"
      >
        x
      </button>
    </div>
  );
}
