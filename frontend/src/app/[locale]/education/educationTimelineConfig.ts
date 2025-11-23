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
  bodyPointKeys?: string[];
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
    bodyPointKeys: ['ukSchoolPointOne', 'ukSchoolPointTwo', 'ukSchoolPointThree'],
    imageAltKey: 'ukSchoolImageAlt',
    imageSrc: '/images/education/school.jpg',
  },
  {
    id: 'lewes',
    yearKey: 'lewesYear',
    titleKey: 'lewesTitle',
    bodyKey: 'lewesBody',
    bodyPointKeys: ['lewesPointOne', 'lewesPointTwo', 'lewesPointThree'],
    imageAltKey: 'lewesImageAlt',
    imageSrc: '/images/education/school2.jpg',
  },
  {
    id: 'piscine',
    yearKey: 'piscineYear',
    titleKey: 'piscineTitle',
    bodyKey: 'piscineBody',
    bodyPointKeys: ['piscinePointOne', 'piscinePointTwo', 'piscinePointThree'],
    imageAltKey: 'piscineImageAlt',
    imageSrc: '/images/education/piscine.jpg',
  },
  {
    id: 'fortyTwoIntro',
    yearKey: 'fortyTwoIntroYear',
    titleKey: 'fortyTwoIntroTitle',
    bodyKey: 'fortyTwoIntroBody',
    bodyPointKeys: ['fortyTwoIntroPointOne', 'fortyTwoIntroPointTwo', 'fortyTwoIntroPointThree'],
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
    bodyPointKeys: [
      'fortyTwoJourneyPointOne',
      'fortyTwoJourneyPointTwo',
      'fortyTwoJourneyPointThree',
    ],
    imageAltKey: 'fortyTwoJourneyImageAlt',
    imageSrc: '/images/education/42.jpg',
  },
  {
    id: 'internship',
    yearKey: 'internshipYear',
    titleKey: 'internshipTitle',
    bodyKey: 'internshipBody',
    bodyPointKeys: ['internshipPointOne', 'internshipPointTwo', 'internshipPointThree'],
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
    bodyPointKeys: ['certsPointOne', 'certsPointTwo', 'certsPointThree'],
    imageAltKey: 'certsImageAlt',
    imageSrc: '/images/education/workHome.jpg',
  },
];

export const CERTIFICATES = [
  {
    id: 'spring-security',
    filePath: '/certificates/CertificateOfCompletion_Spring_6_SpringSecurity.pdf',
    titleKey: 'Spring 6 & Spring Security',
  },
  {
    id: 'tdd-spring',
    filePath:
      '/certificates/CertificateOfCompletion_TestDrivenDevelopmentInSpringBootWithJUnitAndMockito.pdf',
    titleKey: 'Test-Driven Development in Spring Boot with JUnit and Mockito',
  },
  {
    id: 'intro-spring-boot',
    filePath: '/certificates/IntroductionToSpringBootAndSpringCore.pdf',
    titleKey: 'Introduction to Spring Boot and Spring Core',
  },
  {
    id: 'learn-spring',
    filePath: '/certificates/LearnSpring.pdf',
    titleKey: 'Learn Spring',
  },
];
