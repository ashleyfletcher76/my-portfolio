'use client';

import { useTranslations } from 'next-intl';
import { FaJava } from 'react-icons/fa';
import { SiReact, SiVuedotjs, SiDocker, SiKotlin, SiCplusplus, SiC } from 'react-icons/si';

const skills = [
  { Icon: SiReact, label: 'React', color: 'text-sky-400' },
  { Icon: SiVuedotjs, label: 'Vue.js', color: 'text-emerald-500' },
  { Icon: SiDocker, label: 'Docker', color: 'text-blue-500' },
  { Icon: FaJava, label: 'Java', color: 'text-red-500' },
  { Icon: SiKotlin, label: 'Kotlin', color: 'text-violet-500' },
  { Icon: SiCplusplus, label: 'C++', color: 'text-blue-600' },
  { Icon: SiC, label: 'C', color: 'text-gray-500' },
];

export default function SkillsBar() {
  const t = useTranslations('HomePage');
  return (
    <section className="mx-auto w-full max-w-5xl">
      <h3 className="mb-4 text-center text-lg font-semibold">{t('skillsPhrase')}</h3>
      <ul
        className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7"
        role="list"
      >
        {skills.map(({ Icon, label, color }) => (
          <li key={label} className="flex flex-col items-center gap-2">
            <div
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent px-6 py-4 shadow-sm backdrop-blur-sm hover:shadow-md dark:from-white/5"
              title={label}
            >
              <Icon aria-hidden className={`h-8 w-8 ${color}`} />
            </div>

            <span className="mt-1 text-center text-sm">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
