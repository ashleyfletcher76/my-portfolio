'use client';

import { FaJava } from 'react-icons/fa';
import { SiReact, SiVuedotjs, SiDocker, SiKotlin, SiCplusplus, SiC } from 'react-icons/si';

const skills = [
  { Icon: SiReact, label: 'React' },
  { Icon: SiVuedotjs, label: 'Vue.js' },
  { Icon: SiDocker, label: 'Docker' },
  { Icon: FaJava, label: 'Java' },
  { Icon: SiKotlin, label: 'Kotlin' },
  { Icon: SiCplusplus, label: 'C++' },
  { Icon: SiC, label: 'C' },
];

export default function SkillsBar() {
  return (
    <ul
      className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7"
      role="list"
    >
      {skills.map(({ Icon, label }) => (
        <li
          key={label}
          className="bg-card flex items-center justify-center rounded-2xl border px-6 py-4 shadow-sm"
          title={label}
        >
          <Icon aria-hidden className="h-8 w-8" />
          <span className="sr-only">{label}</span>
        </li>
      ))}
    </ul>
  );
}
