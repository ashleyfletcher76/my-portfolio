type LanguageFilterBarProps = {
  languages: string[];
  selected: string;
  onSelect: (lang: string) => void;
  t: (key: string) => string;
};

export function LanguageFilterBar({ languages, selected, onSelect, t }: LanguageFilterBarProps) {
  return (
    <>
      <p className="text-muted-foreground mb-3 text-sm">
        {t('filterIntro')}{' '}
        <span className="font-medium">{selected === 'all' ? t('allLanguages') : selected}</span>
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => onSelect(lang)}
            aria-pressed={selected === lang}
            className={[
              'rounded-full border px-3 py-1 text-xs transition',
              selected === lang
                ? 'bg-accent text-accent-foreground border-accent bg-black text-white'
                : 'border-gray-300 bg-gray-100 text-black hover:bg-gray-200',
            ].join(' ')}
          >
            {lang === 'all' ? t('allLanguages') : lang}
          </button>
        ))}
      </div>
    </>
  );
}
