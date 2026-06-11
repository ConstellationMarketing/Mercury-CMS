// Type definitions for structured About page content
// Each section maps directly to a static component's data needs

export interface AboutHeroContent {
  sectionLabel: string; // "– About Us" (H1)
  tagline: string; // "Dedicated to Justice & Excellence" (styled paragraph)
  description: string; // Description paragraph
  phone: string;
  phoneLabel: string;
  // New design fields
  h1Title: string;           // e.g. "ABOUT US"
  subtitle: string;          // e.g. "Serving Atlanta Since 2010"
  backgroundImage: string;   // hero bg image URL
}

export interface StoryContent {
  sectionLabel: string; // "– Our Story"
  heading: string; // "Building Trust Since 1999"
  paragraphs: string[]; // Array of paragraph texts
  image: string;
  imageAlt: string;
  ctaText: string;   // e.g. "GET HELP NOW"
  ctaUrl: string;    // e.g. "/contact"
}

export interface MissionVisionContent {
  mission: {
    heading: string; // "Our Mission"
    text: string; // Mission paragraph
  };
  vision: {
    heading: string; // "Our Vision"
    text: string; // Vision paragraph
  };
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  imageAlt: string;
  specialties: string[];
}

export interface TeamContent {
  sectionLabel: string; // "– Our Legal Team"
  heading: string; // "Experienced Attorneys..."
  members: TeamMember[];
}

export interface ValueItem {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface ValuesContent {
  sectionLabel: string; // "– Our Values"
  heading: string; // "Principles That Guide Our Practice"
  subtitle: string; // Subtitle text (NEW)
  items: ValueItem[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsContent {
  stats: StatItem[];
}

export interface WhyChooseUsItem {
  number: string;
  title: string;
  description: string;
}

export interface WhyChooseUsContent {
  sectionLabel: string; // "– Why Choose Us"
  heading: string; // "What Sets Us Apart"
  description: string; // Intro paragraph
  image: string; // Section image
  imageAlt: string; // Image alt text
  items: WhyChooseUsItem[];
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

export interface AboutTeamMemberItem {
  name: string;
  role: string;
  image: string;
  imageAlt?: string;
  bio?: string;
}

export interface AboutFeaturedAttorney extends AboutTeamMemberItem {
  email: string;
  phone: string;
  phoneDisplay: string;
  facebookUrl: string;
  instagramUrl: string;
}

export interface AboutTeamMembersContent {
  featured: AboutFeaturedAttorney;
  members: AboutTeamMemberItem[];
}

export interface AboutTeamSectionContent {
  heading: string;
  subtext: string;
}

export interface PartnerLogoItem {
  src: string;
  alt: string;
}

export interface AboutPartnerLogosContent {
  logos: PartnerLogoItem[];
}

export interface AboutTestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface AboutTestimonialsContent {
  heading: string;
  subtitle: string;
  testimonials: AboutTestimonialItem[];
}

export interface AboutReadyCTAContent {
  heading: string;
  subtitle: string;
  phone: string;
  phoneDisplay: string;
  ctaText: string;
  ctaUrl: string;
}

// Complete About page content structure
export interface AboutPageContent {
  hero: AboutHeroContent;
  story: StoryContent;
  teamSection: AboutTeamSectionContent;
  teamMembers: AboutTeamMembersContent;
  partnerLogos: AboutPartnerLogosContent;
  aboutTestimonials: AboutTestimonialsContent;
  readyCta: AboutReadyCTAContent;
  missionVision: MissionVisionContent;
  team: TeamContent;
  values: ValuesContent;
  stats: StatsContent;
  whyChooseUs: WhyChooseUsContent;
  cta: CTAContent;
  /** Maps heading keys (e.g. "story.heading") to HTML tag names (e.g. "h2") */
  headingTags?: Record<string, string>;
}

// Default content - empty defaults, content comes exclusively from the CMS
export const defaultAboutContent: AboutPageContent = {
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
  story: {
    sectionLabel: "",
    heading: "",
    paragraphs: [],
    image: "",
    imageAlt: "",
    ctaText: "",
    ctaUrl: "",
  },
  teamSection: {
    heading: "",
    subtext: "",
  },
  teamMembers: {
    featured: {
      name: "",
      role: "",
      image: "",
      imageAlt: "",
      bio: "",
      email: "",
      phone: "",
      phoneDisplay: "",
      facebookUrl: "",
      instagramUrl: "",
    },
    members: [],
  },
  partnerLogos: {
    logos: [],
  },
  aboutTestimonials: {
    heading: "",
    subtitle: "",
    testimonials: [],
  },
  readyCta: {
    heading: "",
    subtitle: "",
    phone: "",
    phoneDisplay: "",
    ctaText: "",
    ctaUrl: "",
  },
  missionVision: {
    mission: {
      heading: "",
      text: "",
    },
    vision: {
      heading: "",
      text: "",
    },
  },
  team: {
    sectionLabel: "",
    heading: "",
    members: [],
  },
  values: {
    sectionLabel: "",
    heading: "",
    subtitle: "",
    items: [],
  },
  stats: {
    stats: [],
  },
  whyChooseUs: {
    sectionLabel: "",
    heading: "",
    description: "",
    image: "",
    imageAlt: "",
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
