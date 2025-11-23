'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { CertificatesModal } from './CertificatesModal';
import { EDUCATION_TIMELINE_ITEMS } from './educationTimelineConfig';
import { EducationTimelineItem } from './EducationTimelineItem';

export function EducationTimeline() {
  const t = useTranslations('Education');
  const [isCertsOpen, setIsCertsOpen] = useState(false);

  return (
    <>
      {/* Timeline */}
      <section aria-label={t('timelineLabel')} className="mt-2">
        <ol className="mt-1 grid grid-cols-1 gap-x-2 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
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
      <CertificatesModal isOpen={isCertsOpen} onClose={() => setIsCertsOpen(false)} />
    </>
  );
}
