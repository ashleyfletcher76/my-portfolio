import { Link } from '@/i18n/routing';

type AppHref = React.ComponentProps<typeof Link>['href'];

export type TimelineLinkConfig = {
  href: AppHref | string;
  labelKey: string;
};

export type TimelineItemConfig = {
  id: string;
  yearKey: string;
  titleKey: string;
  bodyKey: string;
  imageAltKey: string;
  imageSrc: string;
  links?: TimelineLinkConfig[];
};

export const EDUCATION_TIMELINE_ITEMS: TimelineItemConfig[] = [
  {
    id: 'ukSchool',
    yearKey: 'ukSchoolYear',
    titleKey: 'ukSchoolTitle',
    bodyKey: 'ukSchoolBody',
    imageAltKey: 'ukSchoolImageAlt',
    imageSrc: '/images/education/school.jpg',
  },
  {
    id: 'lewes',
    yearKey: 'lewesYear',
    titleKey: 'lewesTitle',
    bodyKey: 'lewesBody',
    imageAltKey: 'lewesImageAlt',
    imageSrc: '/images/education/college.jpg',
  },
  {
    id: 'piscine',
    yearKey: 'piscineYear',
    titleKey: 'piscineTitle',
    bodyKey: 'piscineBody',
    imageAltKey: 'piscineImageAlt',
    imageSrc: '/images/education/piscine.jpg',
  },
  {
    id: 'fortyTwoIntro',
    yearKey: 'fortyTwoIntroYear',
    titleKey: 'fortyTwoIntroTitle',
    bodyKey: 'fortyTwoIntroBody',
    imageAltKey: 'fortyTwoIntroImageAlt',
    imageSrc: '/images/education/learning.jpg',
    links: [
      {
        href: 'https://www.42heilbronn.de/',
        labelKey: 'fortyTwoHeilbronnSite',
      },
    ],
  },
  {
    id: 'fortyTwoJourney',
    yearKey: 'fortyTwoJourneyYear',
    titleKey: 'fortyTwoJourneyTitle',
    bodyKey: 'fortyTwoJourneyBody',
    imageAltKey: 'fortyTwoJourneyImageAlt',
    imageSrc: '/images/education/42.jpg',
  },
  {
    id: 'internship',
    yearKey: 'internshipYear',
    titleKey: 'internshipTitle',
    bodyKey: 'internshipBody',
    imageAltKey: 'internshipImageAlt',
    imageSrc: '/images/education/internship.jpg',
    links: [
      {
        href: '/experience',
        labelKey: 'internshipCtaLabel',
      },
    ],
  },
  {
    id: 'certs',
    yearKey: 'certsYear',
    titleKey: 'certsTitle',
    bodyKey: 'certsBody',
    imageAltKey: 'certsImageAlt',
    imageSrc: '/images/education/workHome.jpg',
  },
];
