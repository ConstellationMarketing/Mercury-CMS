// Type definitions for structured Practice Areas page content
// Each section maps directly to a static component's data needs

export interface PracticeAreasHeroContent {
  sectionLabel: string; // "– Practice Areas" (H1)
  tagline: string; // "Comprehensive Legal Expertise" (styled text)
  description: string; // Description paragraph
  phone: string;
  phoneLabel: string;
  h1Title: string;       // e.g. "OUR PRACTICE AREAS"
  subtitle: string;      // e.g. "Comprehensive Legal Services"
  backgroundImage: string; // hero bg image URL
}

export interface PracticeAreaGridItem {
  icon: string; // Lucide icon name
  title: string; // "Personal Injury"
  description: string; // Description text
  image: string; // Background image URL
  imageAlt: string; // Image alt text
  link: string; // Link to detail page
}

export interface PracticeAreasGridContent {
  heading: string; // "Our Areas of Practice"
  description: string; // Intro paragraph
  areas: PracticeAreaGridItem[];
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export interface WhyChooseContent {
  sectionLabel: string; // "– Why Choose Us"
  heading: string; // "Experience Across All Practice Areas"
  subtitle: string; // Subtitle text
  description: string; // Description paragraph
  image: string; // Section image (shared from About page)
  imageAlt: string; // Image alt text
  items: WhyChooseItem[];
}

export interface CTAContent {
  heading: string; // "Ready to Discuss Your Case?"
  description: string; // Subtitle text
  primaryButton: {
    label: string; // "Call Us 24/7"
    phone: string; // Phone number
  };
  secondaryButton: {
    label: string; // "Schedule Now"
    sublabel: string; // "Free Consultation"
    link: string; // Link URL
  };
}

export interface PracticeAreasIntroContent {
  text: string;
}

export interface PracticeAreaCardItem {
  iconImage: string;
  iconImageAlt: string;
  title: string;
  description: string;
  tags: string;
  learnMoreText?: string;
  link: string;
}

export interface PracticeAreasCardsContent {
  areas: PracticeAreaCardItem[];
}

export interface PracticeAreasCtaContent {
  heading: string;
  subtitle: string;
  phone: string;
  phoneDisplay: string;
  ctaText: string;
  ctaUrl: string;
}

export interface PracticeAreasVideoSectionContent {
  videoUrl: string;
  thumbnailImage: string;
  heading: string;
  text: string;
  ctaText: string;
  ctaUrl: string;
}

// Complete Practice Areas page content structure
export interface PracticeAreasPageContent {
  hero: PracticeAreasHeroContent;
  intro: PracticeAreasIntroContent;
  cards: PracticeAreasCardsContent;
  videoSection: PracticeAreasVideoSectionContent;
  practiceCta: PracticeAreasCtaContent;
  grid: PracticeAreasGridContent;
  whyChoose: WhyChooseContent;
  cta: CTAContent;
  /** Maps heading keys (e.g. "grid.heading") to HTML tag names (e.g. "h2") */
  headingTags?: Record<string, string>;
}

// Default content - empty defaults, content comes exclusively from the CMS
export const defaultPracticeAreasContent: PracticeAreasPageContent = {
  hero: {
    sectionLabel: "",
    tagline: "",
    description: "",
    phone: "",
    phoneLabel: "",
    h1Title: "",
    subtitle: "",
    backgroundImage: "",
  },
  intro: {
    text: "",
  },
  cards: {
    areas: [],
  },
  videoSection: {
    videoUrl: "",
    thumbnailImage: "",
    heading: "",
    text: "",
    ctaText: "",
    ctaUrl: "",
  },
  practiceCta: {
    heading: "",
    subtitle: "",
    phone: "",
    phoneDisplay: "",
    ctaText: "",
    ctaUrl: "",
  },
  grid: {
    heading: "",
    description: "",
    areas: [],
  },
  whyChoose: {
    sectionLabel: "",
    heading: "",
    subtitle: "",
    image: "",
    imageAlt: "",
    description: "",
    items: [],
  },
  cta: {
    heading: "",
    description: "",
    primaryButton: {
      label: "",
      phone: "",
    },
    secondaryButton: {
      label: "",
      sublabel: "",
      link: "",
    },
  },
};
