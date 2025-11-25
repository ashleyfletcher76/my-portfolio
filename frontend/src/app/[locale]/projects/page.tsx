import { getLocale, getTranslations } from 'next-intl/server';

import { AllProject, getAllProjects } from '@/lib/api';

import ProjectsFilterGrid from './ProjectFilterGrid';

export default async function ProjectsPage() {
  const t = await getTranslations('AllProjects');
  const locale = await getLocale();

  const projects: AllProject[] = await getAllProjects({
    next: { revalidate: 3600 },
  } as RequestInit);

  return (
    <main className="max-w-8xl mx-auto flex min-h-dvh flex-col px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-5xl font-semibold">{t('allProjects')}</h1>
      <p className="mt-1 text-base sm:text-lg">{t('intro')}</p>

      {/* Our new filter grid */}
      <ProjectsFilterGrid projects={projects} locale={locale} translationNamespace="AllProjects" />
    </main>
  );
}
