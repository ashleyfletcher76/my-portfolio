export type WorkTimelineItemConfig = {
  id: string;
  yearKey: string;
  titleKey: string;
  bodyKey: string;
  bodyPointKeys?: string[];
};

export const WORK_TIMELINE_ITEMS: WorkTimelineItemConfig[] = [
  {
    id: 'lifeguard',
    yearKey: 'lifeguardYear',
    titleKey: 'lifeguardTitle',
    bodyKey: 'lifeguardBody',
    bodyPointKeys: ['lifeguardPointOne', 'lifeguardPointTwo', 'lifeguardPointThree'],
  },
  {
    id: 'agromillora',
    yearKey: 'agromilloraYear',
    titleKey: 'agromilloraTitle',
    bodyKey: 'agromilloraBody',
    bodyPointKeys: ['agromilloraPointOne', 'agromilloraPointTwo', 'agromilloraPointThree'],
  },
  {
    id: 'leaderbrand',
    yearKey: 'leaderbrandYear',
    titleKey: 'leaderbrandTitle',
    bodyKey: 'leaderbrandBody',
    bodyPointKeys: ['leaderbrandPointOne', 'leaderbrandPointTwo', 'leaderbrandPointThree'],
  },
  {
    id: 'europapark',
    yearKey: 'europaparkYear',
    titleKey: 'europaparkTitle',
    bodyKey: 'europaparkBody',
    bodyPointKeys: ['europaparkPointOne', 'europaparkPointTwo', 'europaparkPointThree'],
  },
  {
    id: 'mlMedien',
    yearKey: 'mlMedienYear',
    titleKey: 'mlMedienTitle',
    bodyKey: 'mlMedienBody',
    bodyPointKeys: ['mlMedienPointOne', 'mlMedienPointTwo', 'mlMedienPointThree'],
  },
  {
    id: 'freelanceVideo',
    yearKey: 'freelanceVideoYear',
    titleKey: 'freelanceVideoTitle',
    bodyKey: 'freelanceVideoBody',
    bodyPointKeys: ['freelanceVideoPointOne', 'freelanceVideoPointTwo', 'freelanceVideoPointThree'],
  },
  {
    id: 'schwarzIt',
    yearKey: 'schwarzItYear',
    titleKey: 'schwarzItTitle',
    bodyKey: 'schwarzItBody',
    bodyPointKeys: [
      'schwarzItPointOne',
      'schwarzItPointTwo',
      'schwarzItPointThree',
      'schwarzItPointFour',
    ],
  },
];
