import { getLocale, getTranslations } from 'next-intl/server';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

import SkillsBar from '@/components/SkillsBar';
import Socials from '@/components/Socials';
import { getLatestProject, type LatestProject } from '@/lib/api';

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  const locale = await getLocale();
  const latest: LatestProject | null = await getLatestProject();

  const formatIso = (iso: string) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(
      new Date(iso),
    );

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-10 px-4 text-center">
      {/* Hero text */}
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">{t('title')}</h1>

        <p className="text-muted-foreground max-w-prose">{t('subtitle')}</p>

        {/* Socials */}
        <div className="pt-2">
          <div className="text-muted-foreground mb-1 text-xs tracking-wide uppercase">
            {t('socialsLabel')}
          </div>
          <div className="flex justify-center gap-4">
            <Socials />
          </div>
        </div>

        {/* CV buttons row */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/resume/AshleyFletcherResume.pdf"
            download
            className="hover:bg-accent mt-4 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition"
          >
            <FiDownload className="h-4 w-4" />
            {t('downloadCVEN')}
          </a>
          <a
            href="/resume/AshleyFletcherLebenslauf.pdf"
            download
            className="hover:bg-accent mt-4 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition"
          >
            <FiDownload className="h-4 w-4" />
            {t('downloadCVDE')}
          </a>
        </div>
      </section>

      {/* Latest project */}
      {latest && (
        <section aria-labelledby="latest-update-heading" className="w-full max-w-xl text-center">
          <h2 id="latest-update-heading" className="mb-3 text-2xl font-semibold">
            {t('latestUpdate.heading')}
          </h2>

          <div className="rounded-2xl border p-4">
            <a
              href={latest.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent inline-flex items-center justify-center gap-2 text-lg font-semibold underline decoration-dotted underline-offset-4 hover:decoration-solid"
              aria-label={`${t('latestUpdate.viewOnGitHub')} ${latest.name}`}
            >
              {latest.name}
              <FiExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="text-muted foreground mt-3">
              {latest.description || t('latestUpdate.noDescription')}
            </p>
            <p className="text-muted-foreground mt-3 text-xs">
              {t('latestUpdate.lastUpdated')} {formatIso(latest.lastUpdatedIso)}
            </p>
          </div>
        </section>
      )}

      {/* Skills bar */}
      <SkillsBar />
    </main>
  );
}
