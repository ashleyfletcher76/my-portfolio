import { getTranslations } from 'next-intl/server';
import { FiDownload } from 'react-icons/fi';

import SkillsBar from '@/components/SkillsBar';
import Socials from '@/components/Socials';

export default async function HomePage() {
  const t = await getTranslations('HomePage');

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-10 px-4 text-center">
      {/* Hero text */}
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">{t('title')}</h1>

        <p className="text-muted-foreground max-w-prose">{t('subtitle')}</p>

        {/* Socials */}
        <div className="pt-4">
          <Socials />
        </div>
        <a
          href="/resume/AshleyFletcherResume.pdf"
          download
          className="hover:bg-accent mt-4 inline-block rounded-lg border px-4 py-2 text-sm transition hover:text-white"
        >
          <FiDownload className="h-4 w-4" />
          {t('downloadCV')}
        </a>
      </section>

      {/* Skills bar */}
      <SkillsBar />
    </main>
  );
}
