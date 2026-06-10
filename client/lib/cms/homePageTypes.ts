// Type definitions for structured homepage content
// Each section maps directly to a static component's data needs

export interface HeroContent {
  h1Title: string;
  headline: string;
  highlightedText: string;
  phone: string;
  phoneLabel: string;
  // New design fields
  foundedYear: string;       // e.g. "SINCE 2010"
  statNumber: string;        // e.g. "BILLIONS"
  statLabel: string;         // e.g. "WON FOR OUR CLIENTS"
  tagline: string;           // e.g. "JUST IN CASE®"
  backgroundImage: string;   // hero bg image URL
  attorneyImage: string;     // right column person bg image URL
  awardBadgeImage: string;   // award badge image URL
  awardBadgeAlt: string;
}

export interface PartnerLogo {
  src: string;
  alt: string;
}

export interface AboutFeature {
  number: string;
  title: string;
  description: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutContent {
  sectionLabel: string;
  heading: string;
  description: string;
  phone: string;
  phoneLabel: string;
  contactLabel: string;
  contactText: string;
  attorneyImage: string;
  attorneyImageAlt: string;
  features: AboutFeature[];
  stats: AboutStat[];
}

export interface PracticeAreaItem {
  title: string;
  image: string;
  imageAlt: string;
  link: string;
}

export interface PracticeAreasIntroContent {
  sectionLabel: string;
  heading: string;
  buttonLink: string;
  buttonTextLine1: string;
  buttonTextLine2: string;
}

export interface AwardsContent {
  sectionLabel: string;
  heading: string;
  description: string;
  logos: Array<{ src: string; alt: string }>;
}

export interface TestimonialItem {
  text: string;
  author: string;
  ratingImage: string;
  ratingImageAlt?: string;
}

export interface TestimonialsContent {
  sectionLabel: string;
  heading: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
  items: TestimonialItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  sectionLabel: string;
  headingLine1: string;
  headingLine2: string;
  steps: ProcessStep[];
}

export interface GoogleReviewItem {
  text: string;
  author: string;
  ratingImage: string;
  ratingImageAlt?: string;
}

export interface GoogleReviewsContent {
  sectionLabel: string;
  heading: string;
  description: string;
  reviews: GoogleReviewItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  heading: string;
  description: string;
  videoThumbnail: string;
  videoThumbnailAlt?: string;
  videoUrl: string;
  items: FaqItem[];
}

export interface ContactContent {
  sectionLabel: string;
  heading: string;
  description: string;
  phone: string;
  phoneLabel: string;
  address: string;
  formHeading: string;
  availabilityText: string;
  image: string;
  imageAlt: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

export interface StatsVideoContent {
  videoUrl: string;           // YouTube embed URL
  videoThumbnail: string;     // Thumbnail image over the video
  stat1BackgroundImage: string;
  stat1BadgeImage: string;    // e.g. "3X" badge
  stat1BadgeAlt: string;
  stat1Headline: string;      // e.g. "BIGGER PAYOUTS"
  stat1Subtext: string;       // e.g. "WHEN YOU HIRE US"
  stat1FoundedYear: string;   // e.g. "SINCE 2010"
  stat2BackgroundImage: string;
  stat2Label: string;         // e.g. "CLIENT"
  stat2BadgeImage: string;    // e.g. "99%" badge
  stat2BadgeAlt: string;
  stat2Subtext: string;       // e.g. "SATISFACTION"
}

export interface TeamSectionContent {
  heading: string;   // e.g. "OUR TEAM OF LAWYERS"
  subtext: string;   // e.g. "Meet the entire legal team"
}

// Complete homepage content structure
export interface HomePageContent {
  hero: HeroContent;
  statsVideo: StatsVideoContent;
  teamSection: TeamSectionContent;
  partnerLogos: PartnerLogo[];
  about: AboutContent;
  practiceAreasIntro: PracticeAreasIntroContent;
  practiceAreas: PracticeAreaItem[];
  awards: AwardsContent;
  testimonials: TestimonialsContent;
  process: ProcessContent;
  googleReviews: GoogleReviewsContent;
  faq: FaqContent;
  contact: ContactContent;
  /** Maps heading keys (e.g. "about.heading") to HTML tag names (e.g. "h2") */
  headingTags?: Record<string, string>;
}

// Default content - empty defaults, content comes exclusively from the CMS
export const defaultHomeContent: HomePageContent = {
  hero: {
    h1Title: "",
    headline: "",
    highlightedText: "",
    phone: "",
    phoneLabel: "",
    foundedYear: "",
    statNumber: "",
    statLabel: "",
    tagline: "",
    backgroundImage: "",
    attorneyImage: "",
    awardBadgeImage: "",
    awardBadgeAlt: "",
  },
  teamSection: {
    heading: "",
    subtext: "",
  },
  statsVideo: {
    videoUrl: "",
    videoThumbnail: "",
    stat1BackgroundImage: "",
    stat1BadgeImage: "",
    stat1BadgeAlt: "",
    stat1Headline: "",
    stat1Subtext: "",
    stat1FoundedYear: "",
    stat2BackgroundImage: "",
    stat2Label: "",
    stat2BadgeImage: "",
    stat2BadgeAlt: "",
    stat2Subtext: "",
  },
  partnerLogos: [],
  about: {
    sectionLabel: "",
    heading: "",
    description: "",
    phone: "",
    phoneLabel: "",
    contactLabel: "",
    contactText: "",
    attorneyImage: "",
    attorneyImageAlt: "",
    features: [],
    stats: [],
  },
  practiceAreasIntro: {
    sectionLabel: "",
    heading: "",
    buttonLink: "",
    buttonTextLine1: "",
    buttonTextLine2: "",
  },
  practiceAreas: [],
  awards: {
    sectionLabel: "",
    heading: "",
    description: "",
    logos: [],
  },
  testimonials: {
    sectionLabel: "",
    heading: "",
    backgroundImage: "",
    backgroundImageAlt: "",
    items: [],
  },
  process: {
    sectionLabel: "",
    headingLine1: "",
    headingLine2: "",
    steps: [],
  },
  googleReviews: {
    sectionLabel: "",
    heading: "",
    description: "",
    reviews: [],
  },
  faq: {
    heading: "",
    description: "",
    videoThumbnail: "",
    videoThumbnailAlt: "",
    videoUrl: "",
    items: [],
  },
  contact: {
    sectionLabel: "",
    heading: "",
    description: "",
    phone: "",
    phoneLabel: "",
    address: "",
    formHeading: "",
    availabilityText: "",
    image: "",
    imageAlt: "",
    backgroundImage: "",
    backgroundImageAlt: "",
  },
};
