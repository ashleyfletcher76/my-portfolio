import { useTranslations } from 'next-intl';
import { FiExternalLink } from 'react-icons/fi';

export default function LatestProjectCard({
  name,
  url,
  description,
  lastUpdated,
  viewLabel,
}: {
  name: string;
  url: string;
  description?: string | null;
  lastUpdated?: string;
  viewLabel: string;
}) {
  const t = useTranslations('latestProject');
  return (
    <div className="rounded-2xl border p-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent inline-flex items-center justify-center gap-2 text-lg font-semibold underline decoration-dotted underline-offset-4 hover:decoration-solid"
        aria-label={`${viewLabel} ${name}`}
      >
        {name}
        <FiExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
      <p className="text-muted-foreground mt-3">{description ?? ''}</p>
      {lastUpdated && (
        <p className="text-muted-foreground mt-3 text-xs">
          {t('lastUpdated')} {lastUpdated}
        </p>
      )}
    </div>
  );
}
