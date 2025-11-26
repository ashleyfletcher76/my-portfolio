import Image from 'next/image';
import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

import CVCard from '@/components/CVCard';
import LatestProjectCard from '@/components/LatestProjectCard';
import SkillsBar from '@/components/SkillsBar';
import Socials from '@/components/Socials';
import { getLatestProject, type LatestProject } from '@/lib/api';

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  const locale = await getLocale();
  const latest: LatestProject | null = await getLatestProject();

  const formatIso = (iso: string) =>
    new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(iso));

  return (
    <main className="flex min-h-dvh flex-col items-center gap-12 px-4 pt-28 pb-16 md:pt-32">
      {/* Hero */}
      <section className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:text-left">
        {/* Hero text */}
        <div className="text-center md:max-w-xl md:text-left">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{t('title')}</h1>

          <p className="text-muted-foreground mt-4 max-w-prose text-lg md:max-w-none">
            {t('subtitle')}
          </p>

          <p className="mt-4 text-sm sm:text-base">
            {t.rich('aboutCta', {
              link: (chunks) => (
                <Link href="/about" className="hover:text-foreground underline underline-offset-2">
                  {chunks}
                </Link>
              ),
            })}
          </p>

          {/* CV buttons row */}
          <div className="mt-8 flex flex-wrap gap-2">
            <CVCard
              flag="🇬🇧"
              title={t('downloadCVEN')}
              fileHref="/resume/AshleyFletcherResume.pdf"
              previewHref="/resume/AshleyFletcherResume.pdf"
              downloadLabel={t('download')}
              previewLabel={t('preview')}
            />
            <CVCard
              flag="🇩🇪"
              title={t('downloadCVDE')}
              fileHref="/resume/AshleyFletcherLebenslauf.pdf"
              previewHref="/resume/AshleyFletcherLebenslauf.pdf"
              downloadLabel={t('download')}
              previewLabel={t('preview')}
            />
          </div>
        </div>

        {/* Portrait */}
        <div className="flex shrink-0 flex-col items-center">
          <div className="bg-background relative h-52 w-52 overflow-hidden rounded-full border shadow-md md:h-60 md:w-60">
            <Image
              src="/photos/AshleyFletcher.jpg"
              alt="Portrait of Ashley Fletcher"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 240px, 208px"
              priority
            />
          </div>
          {/* Socials */}
          <div className="mt-4 space-y-2 text-center">
            <div className="text-muted-foreground text-xs tracking-wide uppercase">
              {t('socialsLabel')}
            </div>
            <div className="flex justify-center gap-4">
              <Socials />
            </div>
          </div>
        </div>
      </section>

      {/* Latest project */}
      {latest && (
        <section aria-labelledby="latest-update-heading" className="w-full max-w-3xl">
          <h2 id="latest-update-heading" className="mb-4 text-center text-2xl font-semibold">
            {t('heading')}
          </h2>

          <LatestProjectCard
            name={latest.name}
            url={latest.url}
            description={latest.description || t('noDescription')}
            lastUpdated={formatIso(latest.lastUpdatedIso)}
            viewLabel={t('viewOnGitHub')}
          />
        </section>
      )}

      {/* Skills */}
      <section className="w-full max-w-4xl pt-6">
        <SkillsBar />
      </section>
    </main>
  );
}
