'use client';

import { useTranslations } from 'next-intl';
import { useState, useMemo } from 'react';

import { LanguageFilterBar } from './LanguageFilterBar';
import { ProjectCard } from './ProjectCard';

import type { AllProject } from '@/lib/api';

export default function ProjectsFilterGrid({
  projects = [],
  locale,
  translationNamespace,
}: {
  projects?: AllProject[];
  locale: string;
  translationNamespace: string;
}) {
  const t = useTranslations(translationNamespace);

  const formatIso = (iso: string) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(
      new Date(iso),
    );

  const languages = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.languages.forEach((lang) => set.add(lang)));
    return ['all', ...Array.from(set).sort()];
  }, [projects]);

  const [selected, setSelected] = useState('all');

  const filtered = useMemo(() => {
    if (selected === 'all') return projects;
    return projects.filter((p) =>
      Array.isArray(p.languages) ? p.languages.includes(selected) : false,
    );
  }, [selected, projects]);

  return (
    <div className="mt-2">
      <LanguageFilterBar languages={languages} selected={selected} onSelect={setSelected} t={t} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((p) => (
          <ProjectCard key={p.name} project={p} t={t} formatIso={formatIso} />
        ))}
      </div>
    </div>
  );
}
