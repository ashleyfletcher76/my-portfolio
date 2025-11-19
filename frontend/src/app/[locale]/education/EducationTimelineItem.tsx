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
  index,
  totalCount,
  t,
  onCertificatesClick,
}: EducationTimelineItemProps) {
  const isLeftSideOnDesktop = index % 2 === 0;
  const isLast = index === totalCount - 1;

  return (
    <li className="grid grid-cols-[auto,1fr] gap-4 md:grid-cols-[1fr,auto,1fr] md:gap-8">
      {/* Timeline spine column */}
      <div className="col-start-1 flex flex-col items-center md:col-start-2">
        {/* Dot */}
        <div className="flex h-4 items-center">
          <span className="border-accent bg-background inline-flex h-3 w-3 rounded-full border" />
        </div>
        {/* Line down to next item */}
        <div
          className={`mt-1 w-px flex-1 ${isLast ? 'bg-border/60' : 'bg-border'}`}
          aria-hidden="true"
        />
      </div>

      {/* Content card */}
      <article
        className={`border-border bg-card/80 col-start-2 flex flex-col items-start rounded-xl border p-4 text-sm shadow-sm backdrop-blur-sm sm:p-5 sm:text-base ${
          isLeftSideOnDesktop ? 'md:[grid-column:1/2]' : 'md:[grid-column:3/4]'
        }`}
      >
        {/* Year label */}
        <p className="text-muted-foreground mx-auto text-xs font-medium tracking-wide uppercase">
          {t(item.yearKey)}
        </p>

        {/* Title */}
        <h2 className="mx-auto mt-1 text-base font-semibold sm:text-lg">{t(item.titleKey)}</h2>

        {/* Image */}
        <div className="border-border/60 bg-muted/40 mx-auto mt-3 overflow-hidden rounded-lg border">
          <Image
            src={item.imageSrc}
            alt={t(item.imageAltKey)}
            width={400}
            height={100}
            className="mx-auto block h-auto w-auto object-cover"
          />
        </div>

        {/* Body text */}
        <p className="mt-3 leading-relaxed">{t(item.bodyKey)}</p>

        {/* Links for items */}
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

        {/* Certificates preview button */}
        {item.id === 'certs' && onCertificatesClick && (
          <div className="mt-3">
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
