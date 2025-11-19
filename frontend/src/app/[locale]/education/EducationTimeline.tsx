'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState, MouseEvent } from 'react';

import { EDUCATION_TIMELINE_ITEMS } from './educationTimelineConfig';
import { EducationTimelineItem } from './EducationTimelineItem';

export function EducationTimeline() {
  const t = useTranslations('Education');
  const [isCertsOpen, setIsCertsOpen] = useState(false);

  const handleBackdropClick = () => {
    setIsCertsOpen(false);
  };

  const handleDialogClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {/* Timeline */}
      <section aria-label={t('timelineLabel')} className="mt-10">
        <ol className="relative space-y-10">
          {EDUCATION_TIMELINE_ITEMS.map((item, index) => (
            <EducationTimelineItem
              key={item.id}
              item={item}
              index={index}
              totalCount={EDUCATION_TIMELINE_ITEMS.length}
              t={t}
              onCertificatesClick={item.id === 'certs' ? () => setIsCertsOpen(true) : undefined}
            />
          ))}
        </ol>
      </section>

      {/* Certificates modal */}
      {isCertsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 sm:px-6"
          onClick={handleBackdropClick}
        >
          <div
            className="border-border bg-background max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border p-4 shadow-lg sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificates-title"
            onClick={handleDialogClick}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="certificates-title" className="text-lg font-semibold">
                  {t('certsTitle')}
                </h2>
                <p className="text-muted-foreground mt-1 text-sm">{t('certsBody')}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsCertsOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                ✕
              </button>
            </div>

            {/* Preview area – update src once you add your real files */}
            <div className="mt-4 space-y-4">
              <div className="border-border/60 bg-muted/40 overflow-hidden rounded-lg border">
                <Image
                  src="/certificates/CertificateOfCompletion_Spring 6 Spring Security.pdf"
                  alt={t('certsImageAlt')}
                  width={1200}
                  height={800}
                  className="bg-background h-64 w-full object-contain"
                />
              </div>

              {/* You can add more previews here later if you have multiple certificates */}
              {/* e.g. another Image for a second certificate */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
