import Seo from "@site/components/Seo";
import Layout from "@site/components/layout/Layout";
import { Link } from "react-router-dom";
import StatsGrid from "@site/components/shared/StatsGrid";
import TeamMemberCard from "@site/components/about/TeamMemberCard";
import ValueCard from "@site/components/about/ValueCard";
import {
  Phone as PhoneIcon,
  Calendar,
  Scale,
  Award,
  Users,
  Heart,
  type LucideIcon,
  Loader2,
} from "lucide-react";
import { useAboutContent } from "@site/hooks/useAboutContent";
import TeamSectionHeading from "@site/components/home/TeamSectionHeading";
import AboutTeamMembersSection from "@site/components/about/AboutTeamMembersSection";
import PartnerLogosBar from "@site/components/home/PartnerLogosBar";
import AboutTestimonialsSection from "@site/components/about/AboutTestimonialsSection";
import { useGlobalPhone } from "@site/contexts/SiteSettingsContext";
import RichText from "@site/components/shared/RichText";
import DynamicHeading from "@site/components/shared/DynamicHeading";

// Icon mapping for values section
const iconMap: Record<string, LucideIcon> = {
  Scale,
  Award,
  Users,
  Heart,
};

export default function AboutUs() {
  const { content, meta, title, publishedAt, updatedAt, isLoading } = useAboutContent();
  const { phoneNumber, phoneDisplay, phoneLabel } = useGlobalPhone();

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-brand-accent" />
        </div>
      </Layout>
    );
  }

  // Map team members from CMS content
  const teamMembers = content.team.members;

  // Map core values from CMS content with icon components
  const coreValues = content.values.items.map((item) => ({
    icon: iconMap[item.icon] || Scale,
    title: item.title,
    description: item.description,
  }));

  // Map stats from CMS content
  const stats = content.stats.stats;

  // Map why choose us from CMS content
  const whyChooseUs = content.whyChooseUs.items;

  return (
    <Layout>
      <Seo
        title={title || "About Us"}
        meta={meta}
        pageContent={content}
        publishedTime={publishedAt}
        updatedTime={updatedAt}
      />

      {/* Hero Section */}
      <div style={{ backgroundColor: "rgb(255,255,255)", paddingTop: 24, paddingBottom: 24, paddingLeft: 32, paddingRight: 32, width: "100%" }}>
        <div
          style={{
            backgroundImage: `url("${content.hero.backgroundImage || "https://designs-mercury.netlify.app/images/image-4-min.jpg"}")`,
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 10,
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "98%",
            overflow: "hidden",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: 2560,
              paddingBottom: 120,
              paddingTop: 120,
              width: "80%",
            }}
          >
            <div style={{ textAlign: "center", width: "100%" }}>
              <div style={{ marginBottom: 20, textAlign: "center" }}>
                <h1
                  className="font-archivo font-bold uppercase whitespace-nowrap"
                  style={{ color: "rgb(255,255,255)", fontSize: "102.451px", lineHeight: "102.451px" }}
                >
                  {content.hero.h1Title || "ABOUT US"}
                </h1>
              </div>
              <div style={{ marginBottom: "3.093%", textAlign: "center" }}>
                <p
                  className="font-archivo uppercase"
                  style={{ color: "rgb(255,255,255)", fontSize: 36, lineHeight: "54px" }}
                >
                  {content.hero.subtitle || "Serving Atlanta Since 2010"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div style={{ backgroundColor: "rgb(255,255,255)", paddingBottom: 54, paddingTop: 54, width: "100%" }}>
        <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 2560, paddingBottom: 27, paddingTop: 27, width: "90%" }}>
          <div style={{ display: "flex", gap: "5.5%" }}>
            {/* Left column */}
            <div style={{ width: "47.25%" }}>
              <div style={{ marginBottom: 10 }}>
                <h2
                  className="font-archivo font-bold"
                  style={{ color: "rgb(0,0,0)", fontSize: "49.6128px", lineHeight: "49.6128px", paddingBottom: 10, wordBreak: "break-word" }}
                >
                  {content.story.heading || "Our Story"}
                </h2>
              </div>
              <div style={{ marginBottom: 20 }}>
                {content.story.paragraphs.length > 0 ? content.story.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-archivo"
                    style={{
                      color: "rgb(0,0,0)",
                      fontSize: "25.6512px",
                      fontWeight: 300,
                      lineHeight: "35.1437px",
                      marginBottom: index < content.story.paragraphs.length - 1 ? 20 : 0,
                      wordBreak: "break-word",
                    }}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                )) : (
                  <>
                    <p className="font-archivo" style={{ color: "rgb(0,0,0)", fontSize: "25.6512px", fontWeight: 300, lineHeight: "35.1437px", marginBottom: 20 }}>Constellation Law has been serving the Atlanta community since 2010, fighting tirelessly for the rights of injury victims. Our team of dedicated attorneys brings over 100 years of combined legal experience to every case we handle.</p>
                    <p className="font-archivo" style={{ color: "rgb(0,0,0)", fontSize: "25.6512px", fontWeight: 300, lineHeight: "35.1437px", marginBottom: 20 }}>We believe in personalized attention and aggressive representation. When you hire Constellation Law, you're not just getting a lawyer – you're getting a team of advocates who will fight for maximum compensation.</p>
                    <p className="font-archivo" style={{ color: "rgb(0,0,0)", fontSize: "25.6512px", fontWeight: 300, lineHeight: "35.1437px" }}>Our track record speaks for itself: billions won for our clients, a 99% satisfaction rating, and recognition as one of Atlanta's premier personal injury firms.</p>
                  </>
                )}
              </div>
              <div style={{ marginTop: 40 }}>
                <Link
                  to={content.story.ctaUrl || "/contact"}
                  className="font-archivo inline-block hover:opacity-90 transition-opacity duration-300"
                  style={{
                    backgroundColor: "rgb(252,200,47)",
                    borderRadius: 16,
                    color: "rgb(17,71,36)",
                    fontSize: 26,
                    lineHeight: "44.2px",
                    paddingTop: 14,
                    paddingBottom: 14,
                    paddingLeft: 26,
                    paddingRight: 26,
                  }}
                >
                  {content.story.ctaText || "GET HELP NOW"}
                </Link>
              </div>
            </div>

            {/* Right column - image */}
            <div style={{ width: "47.25%" }}>
              <div style={{ borderRadius: 10, overflow: "hidden" }}>
                <img
                  src={content.story.image || "https://designs-mercury.netlify.app/images/image-12-min.jpg"}
                  alt={content.story.imageAlt || "Our Team"}
                  loading="lazy"
                  style={{ height: "100%", maxWidth: "100%", objectFit: "cover", width: "100%", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section Heading */}
      <TeamSectionHeading content={{ heading: content.teamSection?.heading || "", subtext: content.teamSection?.subtext || "" }} />


      {/* Team Members Section */}
      <AboutTeamMembersSection content={content.teamMembers} />

      {/* Partner Logos / Awards Bar */}
      <PartnerLogosBar logos={content.partnerLogos?.logos?.length ? content.partnerLogos.logos : undefined} />

      {/* Client Testimonials */}
      <AboutTestimonialsSection content={content.aboutTestimonials} />

      {/* Ready to Get Started CTA */}
      <div style={{ backgroundColor: "rgb(235,235,235)", paddingBottom: 54, paddingTop: 54, width: "100%" }}>
        <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 1440, paddingBottom: 27, paddingTop: 27, width: "80%" }}>
          <div style={{ textAlign: "center" }}>
            <h2
              className="font-archivo font-bold"
              style={{ color: "rgb(0,0,0)", fontSize: 52, lineHeight: "52px", paddingBottom: 20, wordBreak: "break-word" }}
            >
              {content.readyCta?.heading || "READY TO GET STARTED?"}
            </h2>
            <p
              className="font-archivo"
              style={{ color: "rgb(43,43,43)", fontSize: 24, fontWeight: 300, lineHeight: "34px", marginBottom: 30, wordBreak: "break-word" }}
            >
              {content.readyCta?.subtitle || "Contact us today for a free consultation. We're available 24/7 to help you."}
            </p>
            <div style={{ marginBottom: 30, textAlign: "center" }}>
              <a
                href={`tel:${content.readyCta?.phone || phoneNumber}`}
                className="font-archivo font-bold hover:opacity-80 transition-opacity duration-150"
                style={{ color: "rgb(94,6,14)", fontSize: 48, lineHeight: "72px" }}
              >
                {content.readyCta?.phoneDisplay || phoneDisplay}
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link
                to={content.readyCta?.ctaUrl || "/contact"}
                className="font-archivo hover:opacity-90 transition-opacity duration-300"
                style={{
                  backgroundColor: "rgb(252,200,47)",
                  borderRadius: 16,
                  color: "rgb(17,71,36)",
                  fontSize: 26,
                  lineHeight: "44.2px",
                  paddingBottom: 14,
                  paddingLeft: 26,
                  paddingRight: 26,
                  paddingTop: 14,
                  whiteSpace: "nowrap",
                }}
              >
                {content.readyCta?.ctaText || "GET HELP NOW"}
              </Link>
            </div>
          </div>
        </div>
      </div>




    </Layout>
  );
}
