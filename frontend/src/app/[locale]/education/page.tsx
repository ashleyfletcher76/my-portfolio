import { getTranslations } from 'next-intl/server';

import { EducationTimeline } from './EducationTimeline';

export default async function EducationPage() {
  const t = await getTranslations('Education');

  return (
    <main className="max-w-8xl mx-auto flex min-h-dvh flex-col px-4 py-16 sm:px-6 lg:px-8">
      {/* Page header */}
      <header className="max-w-6xl">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t('title')}</h1>
        <p className="mt-4 text-sm sm:text-base">{t('intro')}</p>
      </header>

      {/* Timeline + certificates modal */}
      <EducationTimeline />
    </main>
  );
}
