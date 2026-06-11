import Seo from "@site/components/Seo";
import Layout from "@site/components/layout/Layout";
import PracticeAreaCard from "@site/components/practice/PracticeAreaCard";
import CallBox from "@site/components/shared/CallBox";
import {
  Phone,
  Calendar,
  Scale,
  Car,
  Briefcase,
  Users,
  Home,
  DollarSign,
  FileText,
  Heart,
  Shield,
  TrendingUp,
  Stethoscope,
  Building,
  type LucideIcon,
} from "lucide-react";
import { usePracticeAreasContent } from "@site/hooks/usePracticeAreasContent";
import { useGlobalPhone } from "@site/contexts/SiteSettingsContext";
import RichText from "@site/components/shared/RichText";
import DynamicHeading from "@site/components/shared/DynamicHeading";
import { Loader2 } from "lucide-react";

// Icon mapping for practice areas
const iconMap: Record<string, LucideIcon> = {
  Car,
  Stethoscope,
  Briefcase,
  Heart,
  Building,
  Shield,
  Scale,
  FileText,
  Users,
  Home,
  DollarSign,
  TrendingUp,
};

export default function PracticeAreas() {
  const { content, meta, title, publishedAt, updatedAt, isLoading } = usePracticeAreasContent();
  const { phoneNumber, phoneDisplay, phoneLabel } = useGlobalPhone();

  // Map practice areas from CMS content with icon components
  const practiceAreas = content.grid.areas.map((area) => ({
    icon: iconMap[area.icon] || Scale,
    title: area.title,
    description: area.description,
    image: area.image,
    imageAlt: area.imageAlt,
    link: area.link,
  }));

  // Map why choose items from CMS content
  const whyChooseOurPractice = content.whyChoose.items;

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-brand-accent" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo
        title={title || "Practice Areas"}
        meta={meta}
        pageContent={content}
        publishedTime={publishedAt}
        updatedTime={updatedAt}
      />

      {/* Hero Section */}
      <div style={{ backgroundColor: "rgb(255,255,255)", paddingTop: 24, paddingBottom: 24, paddingLeft: 32, paddingRight: 32, width: "100%" }}>
        <div
          style={{
            backgroundImage: `url("${content.hero.backgroundImage || "https://designs-mercury.netlify.app/images/image-6-min.jpg"}")`,
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
                  className="font-archivo font-bold uppercase"
                  style={{ color: "rgb(255,255,255)", fontSize: 88, lineHeight: "88px", wordBreak: "break-word" }}
                >
                  {content.hero.h1Title || "OUR PRACTICE AREAS"}
                </h1>
              </div>
              <div style={{ marginBottom: "3.093%", textAlign: "center" }}>
                <p
                  className="font-archivo uppercase"
                  style={{ color: "rgb(255,255,255)", fontSize: 36, lineHeight: "54px" }}
                >
                  {content.hero.subtitle || "Comprehensive Legal Services"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Intro Text Section */}
      <div style={{ backgroundColor: "rgb(255,255,255)", paddingBottom: 54, paddingTop: 54, width: "100%" }}>
        <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 1080, paddingBottom: 27, paddingTop: 27, width: "80%" }}>
          <div style={{ textAlign: "center", width: "100%" }}>
            <p
              className="font-archivo"
              style={{ color: "rgb(43,43,43)", fontSize: "25.6512px", fontWeight: 300, lineHeight: "35.1437px", wordBreak: "break-word" }}
            >
              {content.intro?.text || "With decades of experience and billions won for our clients, Constellation Law offers comprehensive legal representation across a wide range of practice areas. Our team of dedicated attorneys has the expertise and resources to handle even the most complex cases."}
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Our Practice Section */}
      <div className="bg-brand-dark py-[40px] md:py-[60px]">
        <div className="max-w-[2560px] mx-auto w-[95%] md:w-[90%] lg:w-[80%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[8%]">
            {/* Left Side - Heading + Image */}
            <div>
              <div className="mb-[10px]">
                <p className="font-outfit text-[18px] md:text-[24px] leading-tight md:leading-[36px] text-brand-accent">
                  {content.whyChoose.sectionLabel}
                </p>
              </div>
              <h2 className="font-playfair text-[32px] md:text-[48px] lg:text-[54px] leading-tight md:leading-[54px] text-white pb-[20px]">
                {content.whyChoose.heading}
              </h2>
              {content.whyChoose.subtitle && (
                <p className="font-outfit text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white/80 pb-[15px]">
                  {content.whyChoose.subtitle}
                </p>
              )}
              <RichText
                html={content.whyChoose.description}
                className="font-outfit text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white/90 mb-[30px]"
              />
              {/* Section image (shared from About page) */}
              {content.whyChoose.image && (
                <div className="hidden lg:block">
                  <img
                    src={content.whyChoose.image}
                    alt={content.whyChoose.imageAlt || "Why Choose Us"}
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
              {whyChooseOurPractice.map((feature, index) => (
                <div key={index}>
                  <div className="mb-[15px] md:mb-[20px]">
                    <h3 className="font-outfit text-[22px] md:text-[28px] leading-tight md:leading-[28px] text-white pb-[10px]">
                      {feature.number}. {feature.title}
                    </h3>
                    <RichText
                      html={feature.description}
                      className="font-outfit text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white/80"
                    />
                  </div>
                  {index < whyChooseOurPractice.length - 1 && (
                    <div className="h-[1px] bg-brand-border/50"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}
