import type { WorkTimelineItemConfig } from './workTimelineConfig';

type WorkTimelineItemProps = {
  item: WorkTimelineItemConfig;
  index: number;
  totalCount: number;
  t: (key: string) => string;
};

export function WorkTimelineItem({ item, index, totalCount, t }: WorkTimelineItemProps) {
  return (
    <li className="relative">
      <article className="border-border relative flex flex-col items-center rounded-xl border bg-gray-100 p-4 pr-10 text-black shadow-sm sm:p-8 sm:text-base">
        {/* Year */}
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          {t(item.yearKey)}
        </p>

        {/* Title */}
        <h2
          className={`mt-1 text-base font-semibold sm:text-lg ${index === totalCount - 1 ? 'whitespace-nowrap' : ''} `}
        >
          {t(item.titleKey)}
        </h2>

        {/* Body text */}
        <p className="mt-3 leading-relaxed">{t(item.bodyKey)}</p>

        {/* Bullet points (optional) */}
        {item.bodyPointKeys && item.bodyPointKeys.length > 0 && (
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {item.bodyPointKeys.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        )}
        {(index + 1) % 4 !== 0 && index !== totalCount - 1 && (
          <div
            className="pointer-events-none absolute top-1/2 -right-8 hidden -translate-y-1/2 lg:block"
            aria-hidden="true"
          >
            <span className="text-3xl">→</span>
          </div>
        )}
      </article>
    </li>
  );
}
