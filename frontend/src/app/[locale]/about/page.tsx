import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { AboutSection } from './AboutSection';

export default function AboutPage() {
  const t = useTranslations('AboutMe');
  return (
    <div className="space-y-8 px-4 pt-16">
      <h1 className="text-center text-3xl font-semibold">{t('me')}</h1>

      {/* Farming */}
      <AboutSection
        text={t('farming')}
        image={
          <Image
            src="/images/about/farming.jpg"
            alt="Tractor"
            width={1000}
            height={800}
            className="h-auto w-full max-w-none rounded-lg object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
            priority
          />
        }
      />

      {/* Photography */}
      <AboutSection
        text={t('photography')}
        imageOnLeft
        image={
          <Image
            src="/images/about/photography.jpg"
            alt="Camera"
            width={1000}
            height={800}
            className="h-auto w-full max-w-none rounded-lg object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
            priority
          />
        }
      />

      {/* 42 */}
      <AboutSection
        text={t('42')}
        image={
          <div className="rounded-lg bg-white p-6">
            <Image
              src="/images/42_Logo.svg"
              alt="42"
              width={200}
              height={200}
              className="object-contain"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
        }
      />

      {/* internship */}
      <AboutSection
        text={t('schwarz')}
        imageOnLeft
        image={
          <Image
            src="/images/about/computer.jpg"
            alt="Computer"
            width={1000}
            height={800}
            className="h-auto w-full max-w-none rounded-lg object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        }
      />
    </div>
  );
}
