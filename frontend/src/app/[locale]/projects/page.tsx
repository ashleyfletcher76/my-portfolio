import { getLocale, getTranslations } from 'next-intl/server';
import { FiExternalLink } from 'react-icons/fi';

import { getAllProjects, type AllProject } from '@/lib/api';

export default async function ProjectsPage() {
  const t = await getTranslations('AllProjects');
  const locale = await getLocale();

  const projects: AllProject[] = await getAllProjects({
    next: { revalidate: 3600 },
  } as RequestInit);

  const formatIso = (iso: string) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(
      new Date(iso),
    );

  return (
    <main className="max-w-8xl mx-auto flex min-h-dvh flex-col px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-5xl font-semibold">{t('allProjects')}</h1>
      <p className="mt-4 text-base sm:text-lg">{t('intro')}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <article
            key={p.name}
            className="text-card-foreground rounded-2xl border bg-gray-100 p-4 text-black shadow-sm transition-shadow hover:shadow-md"
          >
            <header className="mb-2">
              <h2 className="text-lg font-medium">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent inline-flex items-center gap-2 underline decoration-dotted underline-offset-2"
                  aria-label={`${t('viewOnGitHub')} ${p.name}`}
                >
                  {p.name}
                  <FiExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </h2>
            </header>
            <p className="text-muted-foreground mb-3 line-clamp-3 text-sm">
              {p.description || t('noDescription')}
            </p>
            <footer className="text-muted-foreground flex items-center justify-between text-xs">
              <span>{p.language}</span>
              <time dateTime={p.lastUpdatedIso}>{formatIso(p.lastUpdatedIso)}</time>
            </footer>
          </article>
        ))}
      </div>
    </main>
  );
}
