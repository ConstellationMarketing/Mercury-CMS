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

      {/* Mission & Vision Section */}
      {(content.missionVision.mission.heading || content.missionVision.vision.heading) && (
      <div className="bg-brand-accent-dark py-[40px] md:py-[60px]">
        <div className="max-w-[2560px] mx-auto w-[95%] md:w-[90%] lg:w-[80%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[8%]">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <h2 className="font-playfair text-[32px] md:text-[40px] leading-tight text-brand-accent pb-[15px] md:pb-[20px]">
                {content.missionVision.mission.heading}
              </h2>
              <RichText
                html={content.missionVision.mission.text}
                className="font-outfit text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-white"
              />
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <h2 className="font-playfair text-[32px] md:text-[40px] leading-tight text-brand-accent pb-[15px] md:pb-[20px]">
                {content.missionVision.vision.heading}
              </h2>
              <RichText
                html={content.missionVision.vision.text}
                className="font-outfit text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-white"
              />
            </div>
          </div>
        </div>
      </div>

      )}

      {/* Team Section */}
      {teamMembers.length > 0 && (
      <div className="bg-white pt-[40px] md:pt-[60px] pb-[30px] md:pb-[54px]">
        <div className="max-w-[2560px] mx-auto w-[95%] md:w-[90%] lg:w-[85%]">
          <div className="text-center mb-[30px] md:mb-[50px]">
            <div className="mb-[10px]">
              <DynamicHeading
                tag={content.headingTags?.["team.sectionLabel"]}
                defaultTag="h2"
                className="font-outfit text-[18px] md:text-[24px] leading-tight md:leading-[36px] text-[rgb(107,141,12)]"
              >
                {content.team.sectionLabel}
              </DynamicHeading>
            </div>
            <p className="font-playfair text-[32px] md:text-[48px] lg:text-[54px] leading-tight md:leading-[54px] text-black">
              {content.team.heading.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < content.team.heading.split("\n").length - 1 && (
                    <br className="hidden md:block" />
                  )}
                </span>
              ))}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

      )}

      {/* Core Values Section */}
      {coreValues.length > 0 && (
      <div className="bg-brand-dark py-[40px] md:py-[60px]">
        <div className="max-w-[2560px] mx-auto w-[95%] md:w-[90%] lg:w-[85%]">
          <div className="text-center mb-[30px] md:mb-[50px]">
            <div className="mb-[10px]">
              <DynamicHeading
                tag={content.headingTags?.["values.sectionLabel"]}
                defaultTag="h2"
                className="font-outfit text-[18px] md:text-[24px] leading-tight md:leading-[36px] text-brand-accent"
              >
                {content.values.sectionLabel}
              </DynamicHeading>
            </div>
            <p className="font-playfair text-[32px] md:text-[48px] lg:text-[54px] leading-tight md:leading-[54px] text-white">
              {content.values.heading}
            </p>
            {content.values.subtitle && (
              <p className="font-outfit text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white/80 mt-[15px]">
                {content.values.subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[5%]">
            {coreValues.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>

      )}

      {/* Stats Section */}
      {stats.length > 0 && (
      <div className="bg-white py-[30px] md:py-[40px]">
        <div className="max-w-[2560px] mx-auto w-[95%] md:w-[90%]">
          <StatsGrid stats={stats} />
        </div>
      </div>

      )}

      {/* Why Choose Us Section */}
      {whyChooseUs.length > 0 && (
      <div className="bg-white pt-[30px] md:pt-[40px] pb-[40px] md:pb-[60px]">
        <div className="max-w-[2560px] mx-auto w-[95%] md:w-[90%] lg:w-[80%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[8%]">
            {/* Left Side - Heading + Image */}
            <div>
              <div className="mb-[10px]">
                <DynamicHeading
                  tag={content.headingTags?.["whyChooseUs.sectionLabel"]}
                  defaultTag="h2"
                  className="font-outfit text-[18px] md:text-[24px] leading-tight md:leading-[36px] text-[rgb(107,141,12)]"
                >
                  {content.whyChooseUs.sectionLabel}
                </DynamicHeading>
              </div>
              <p className="font-playfair text-[32px] md:text-[48px] lg:text-[54px] leading-tight md:leading-[54px] text-black pb-[20px]">
                {content.whyChooseUs.heading}
              </p>
              <RichText
                html={content.whyChooseUs.description}
                className="font-outfit text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-black mb-[30px]"
              />
              {/* Stock image */}
              {content.whyChooseUs.image && (
                <div className="hidden lg:block">
                  <img
                    src={content.whyChooseUs.image}
                    alt={content.whyChooseUs.imageAlt || "Why Choose Us"}
                    className="w-full max-w-[400px] h-auto object-cover"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            {/* Right Side - Features List */}
            <div className="space-y-[20px] md:space-y-[30px]">
              {whyChooseUs.map((feature, index) => (
                <div key={index}>
                  <div className="mb-[15px] md:mb-[20px]">
                    <h3 className="font-outfit text-[22px] md:text-[28px] leading-tight md:leading-[28px] text-black pb-[10px]">
                      {feature.number}. {feature.title}
                    </h3>
                    <RichText
                      html={feature.description}
                      className="font-outfit text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-black"
                    />
                  </div>
                  {index < whyChooseUs.length - 1 && (
                    <div className="h-[1px] bg-brand-border/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      )}

      {/* Call to Action Section */}
      {content.cta.heading && (
      <div className="bg-brand-accent py-[40px] md:py-[60px]">
        <div className="max-w-[2560px] mx-auto w-[95%] md:w-[90%] lg:w-[80%]">
          <div className="text-center mb-[30px] md:mb-[40px]">
            <h2 className="font-playfair text-[36px] md:text-[48px] lg:text-[60px] leading-tight text-black pb-[15px]">
              {content.cta.heading}
            </h2>
            <RichText
              html={content.cta.description}
              className="font-outfit text-[18px] md:text-[22px] leading-[26px] md:leading-[32px] text-black/80"
            />
          </div>

        </div>
      </div>
      )}
    </Layout>
  );
}
