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
import PracticeAreasCardsSection from "@site/components/practice/PracticeAreasCardsSection";
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

      {/* Practice Areas Cards Grid */}
      <PracticeAreasCardsSection content={content.cards} />


    </Layout>
  );
}
