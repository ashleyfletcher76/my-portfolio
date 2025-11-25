import { FiExternalLink } from 'react-icons/fi';

import type { AllProject } from '@/lib/api';

type ProjectCardProps = {
  project: AllProject;
  t: (key: string) => string;
  formatIso: (iso: string) => string;
};

export function ProjectCard({ project, t, formatIso }: ProjectCardProps) {
  return (
    <article className="text-card-foreground rounded-2xl border bg-gray-100 p-4 text-black shadow-sm transition-shadow hover:shadow-md">
      <header className="mb-2">
        <h2 className="text-lg font-medium">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent inline-flex items-center gap-2 underline decoration-dotted underline-offset-2"
            aria-label={`${t('viewOnGitHub')} ${project.name}`}
          >
            {project.name}
            <FiExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </h2>
      </header>

      <p className="text-muted-foreground mb-3 line-clamp-3 text-sm">
        {project.description || t('noDescription')}
      </p>

      <footer className="text-muted-foreground flex items-center justify-between text-xs">
        <span>{project.languages.length > 0 ? project.languages.join(', ') : t('noLanguage')}</span>
        <time dateTime={project.lastUpdatedIso}>{formatIso(project.lastUpdatedIso)}</time>
      </footer>
    </article>
  );
}
