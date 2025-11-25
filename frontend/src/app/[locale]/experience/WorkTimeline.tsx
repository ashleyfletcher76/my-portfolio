'use client';

import { useTranslations } from 'next-intl';

import { WORK_TIMELINE_ITEMS } from './workTimelineConfig';
import { WorkTimelineItem } from './WorkTimelineItem';

export function WorkTimeline() {
  const t = useTranslations('Work');

  return (
    <>
      {/* Timeline */}
      <section aria-label={t('timelineLabel')} className="mt-2">
        <ol className="mt-1 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {WORK_TIMELINE_ITEMS.map((item, index) => (
            <WorkTimelineItem
              key={item.id}
              item={item}
              index={index}
              totalCount={WORK_TIMELINE_ITEMS.length}
              t={t}
            />
          ))}
        </ol>
      </section>
    </>
  );
}
