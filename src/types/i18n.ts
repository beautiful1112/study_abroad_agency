export type Locale = 'zh' | 'en';

export interface NavLink {
  label: string;
  href: string;
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  summary: string;
  description?: string;
}

export interface Dictionary {
  meta: {
    defaultDescription: string;
  };
  nav: {
    links: NavLink[];
    cta: string;
    langLabel: string;
    langZh: string;
    langEn: string;
  };
  footer: {
    description: string;
    disclaimer: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    brandEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutBody: string;
    aboutPoints: string[];
    aboutLink: string;
    servicesEyebrow: string;
    servicesTitle: string;
    serviceCards: ServiceItem[];
    statsTitle: string;
    statsSubtitle: string;
    statsLeft: string;
    statsLeftLabel: string;
    statsRight: string;
    statsRightLabel: string;
    statsBody1: string;
    statsBody2: string;
    statsLink: string;
    faqEyebrow: string;
    faqTitle: string;
    faqLink: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroDescription: string;
    valuesTitle: string;
    valuesSubtitle: string;
    values: { title: string; body: string }[];
    whoTitle: string;
    whoBody: string;
    whoPoints: string[];
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
  };
  services: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroDescription: string;
    missionTitle: string;
    missionBody1: string;
    missionBody2: string;
    listTitle: string;
    listSubtitle: string;
    items: ServiceItem[];
    approachTitle: string;
    approachBody: string;
    approachPoints: string[];
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
  };
  careers: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroDescription: string;
    introTitle: string;
    introBody1: string;
    introBody2: string;
    rolesTitle: string;
    rolesSubtitle: string;
    roles: { title: string; body: string }[];
    benefitsTitle: string;
    benefits: string[];
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
  };
  info: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroDescription: string;
    sectionTitle: string;
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroDescription: string;
    intro: string;
    addressLabel: string;
    contactLabel: string;
    hoursLabel: string;
    phonePrefix: string;
    emailPrefix: string;
    applicationEmailsLabel: string;
    clientEmailsLabel: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    formSuccess: string;
    mapTitle: string;
  };
  articles: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroDescription: string;
    readMore: string;
    backToList: string;
    categoryProcess: string;
    categoryIntro: string;
    disclaimer: string;
  };
  notFound: {
    metaTitle: string;
    title: string;
    body: string;
    button: string;
  };
  faqs: FaqItem[];
}
