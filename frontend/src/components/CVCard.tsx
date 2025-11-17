import { FiDownload } from 'react-icons/fi';

export default function CVCard({
  flag,
  title,
  fileHref,
  previewHref,
  downloadLabel,
  previewLabel,
}: {
  flag: string;
  title: string;
  fileHref: string;
  previewHref?: string;
  downloadLabel: string;
  previewLabel?: string;
}) {
  return (
    <div className="border-border bg-card text-card-foreground flex flex-col justify-between rounded-lg border px-2 py-2 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-2">
        <div className="text-md">{flag}</div>
        <div>
          <div className="mt-1 text-xs font-semibold tracking-tight">{title}</div>
        </div>
      </div>

      <div className="mt-1 flex items-center justify-between gap-1">
        <a
          href={fileHref}
          download
          className="bg-accent px-0.9 text-accent-foreground focus-visible:ring-accent/40 inline-flex items-center gap-2 rounded-md py-1 text-xs font-semibold hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          <FiDownload className="h-3 w-3" />
          {downloadLabel}
        </a>

        {previewHref && (
          <a
            href={previewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-[12px] font-medium underline-offset-2 hover:underline"
          >
            {previewLabel ?? 'Preview'}
          </a>
        )}
      </div>
    </div>
  );
}
