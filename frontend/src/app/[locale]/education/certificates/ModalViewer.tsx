'use client';

import { useTranslations } from 'next-intl';

import { CERTIFICATES } from '../educationTimelineConfig';

export function ModalViewer({ activeCertIndex }: { activeCertIndex: number }) {
  const t = useTranslations('Education');

  return (
    <div className="border-border bg-card flex max-h-[90vh] min-h-[300px] items-stretch overflow-hidden rounded-lg border">
      <object
        data={CERTIFICATES[activeCertIndex].filePath}
        type="application/pdf"
        className="h-[90vh] w-full"
      >
        <p className="p-4 text-sm">
          {t('certsPdfFallback')}{' '}
          <a
            href={CERTIFICATES[activeCertIndex].filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            {t('certsPdfFallbackLink')}
          </a>
        </p>
      </object>
    </div>
  );
}
