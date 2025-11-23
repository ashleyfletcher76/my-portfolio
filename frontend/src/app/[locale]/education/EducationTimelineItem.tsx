import Image from 'next/image';

import { Link } from '@/i18n/routing';

import type { TimelineItemConfig } from './educationTimelineConfig';

type EducationTimelineItemProps = {
  item: TimelineItemConfig;
  index: number;
  totalCount: number;
  t: (key: string) => string;
  onCertificatesClick?: () => void;
};

type AppHref = React.ComponentProps<typeof Link>['href'];

export function EducationTimelineItem({
  item,
  t,
  onCertificatesClick,
}: EducationTimelineItemProps) {
  return (
    <li>
      <article className="border-border bg-card flex flex-col items-center rounded-xl border p-4 text-sm shadow-sm sm:p-5 sm:text-base">
        {/* Year */}
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          {t(item.yearKey)}
        </p>

        {/* Title */}
        <h2 className="mt-1 text-base font-semibold sm:text-lg">{t(item.titleKey)}</h2>

        {/* Image */}
        <div className="border-border/60 bg-muted/40 mt-3 overflow-hidden rounded-lg border">
          <Image
            src={item.imageSrc}
            alt={t(item.imageAltKey)}
            width={150}
            height={100}
            className="h-auto object-cover"
          />
        </div>

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

        {/* External or internal links */}
        {item.links && item.links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-3">
            {item.links.map((link) => {
              const isExternal = typeof link.href === 'string' && /^https?:\/\//.test(link.href);

              return isExternal ? (
                <a
                  key={link.labelKey}
                  href={link.href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent inline-flex text-sm font-medium hover:underline"
                >
                  {t(link.labelKey)}
                </a>
              ) : (
                <Link
                  key={link.labelKey}
                  href={link.href as AppHref}
                  className="text-accent inline-flex text-sm font-medium hover:underline"
                >
                  {t(link.labelKey)}
                </Link>
              );
            })}
          </div>
        )}

        {/* Certificates CTA */}
        {item.id === 'certs' && onCertificatesClick && (
          <div className="mt-4">
            <button
              type="button"
              onClick={onCertificatesClick}
              className="text-accent inline-flex text-sm font-medium underline-offset-2 hover:underline"
            >
              {t('certsCtaLabel')}
            </button>
          </div>
        )}
      </article>
    </li>
  );
}
