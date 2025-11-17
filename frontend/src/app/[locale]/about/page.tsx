import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutMe');
  return (
    <div className="mx-auto max-w-4xl space-y-16 px-4 pt-18">
      <h1 className="text-center text-3xl font-semibold">{t('me')}</h1>

      {/* Farming Section */}
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-2 text-[22px] leading-relaxed">
          <p>{t('farming')}</p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/farming.jpg"
            alt="Tractor"
            width={1200}
            height={800}
            className="h-auto w-full max-w-none rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Photography Section */}
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src="/images/photography.jpg"
            alt="Camera"
            width={1200}
            height={800}
            className="h-auto w-full max-w-none rounded-lg object-cover"
          />
        </div>

        <div className="space-y-2 text-[22px] leading-relaxed">
          <p>{t('photography')}</p>
        </div>
      </section>

      {/* 42 School Section */}
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-2 text-[22px] leading-relaxed">
          <p>{t('42')}</p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-none rounded-lg bg-white p-4">
            <Image
              src="/images/42_Logo.svg"
              alt="42 Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Schwarz IT Section */}
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src="/images/computer.jpg"
            alt="Computer"
            width={1200}
            height={800}
            className="none h-auto w-full rounded-lg object-cover"
          />
        </div>

        <div className="space-y-2 text-[22px] leading-relaxed">
          <p>{t('schwarz')}</p>
        </div>
      </section>
    </div>
  );
}
