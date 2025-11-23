'use client';

import { useTranslations } from 'next-intl';

import { CERTIFICATES } from '../educationTimelineConfig';

type Props = {
  activeCertIndex: number;
  onPrev: () => void;
  onNext: () => void;
};

export function ModalNavigation({ activeCertIndex, onPrev, onNext }: Props) {
  const t = useTranslations('Education');

  return (
    <div className="flex items-center justify-between gap-4">
      <button
        type="button"
        onClick={onPrev}
        className="text-muted-foreground hover:text-foreground text-sm"
      >
        {t('certsPrevLabel')}
      </button>

      <div className="flex flex-1 flex-col items-center text-center">
        <p className="text-muted-foreground text-xs">
          {t('certsPositionLabel', {
            current: activeCertIndex + 1,
            total: CERTIFICATES.length,
          })}
        </p>
        <h3 className="mt-1 text-sm font-medium">{CERTIFICATES[activeCertIndex].titleKey}</h3>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="text-muted-foreground hover:text-foreground text-sm"
      >
        {t('certsNextLabel')}
      </button>
    </div>
  );
}
