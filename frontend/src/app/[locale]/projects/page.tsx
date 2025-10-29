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
    <main className="mx-auto max-w-7xl py-15">
      <h1 className="mb-6 text-5xl font-semibold">{t('allProjects')}</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className="bg-card text-card-foreground rounded-2xl border p-4 shadow-sm transition-shadow hover:shadow-md"
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
