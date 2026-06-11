import { Link } from "react-router-dom";
import Seo from "@site/components/Seo";
import Layout from "@site/components/layout/Layout";
import { usePracticeAreasContent } from "@site/hooks/usePracticeAreasContent";
import PracticeAreasCardsSection from "@site/components/practice/PracticeAreasCardsSection";
import PracticeAreasVideoSection from "@site/components/practice/PracticeAreasVideoSection";
import { useGlobalPhone } from "@site/contexts/SiteSettingsContext";
import { Loader2 } from "lucide-react";

export default function PracticeAreas() {
  const { content, meta, title, publishedAt, updatedAt, isLoading } = usePracticeAreasContent();
  const { phoneNumber, phoneDisplay } = useGlobalPhone();

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

      {/* Video + Text Section */}
      <PracticeAreasVideoSection content={content.videoSection} />

      {/* Need Legal Assistance CTA */}
      <div style={{ backgroundColor: "rgb(235,235,235)", paddingBottom: 54, paddingTop: 54, width: "100%" }}>
        <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 1440, paddingBottom: 27, paddingTop: 27, width: "80%" }}>
          <div style={{ textAlign: "center" }}>
            <h2
              className="font-archivo font-bold"
              style={{ color: "rgb(0,0,0)", fontSize: 52, lineHeight: "52px", paddingBottom: 20, wordBreak: "break-word" }}
            >
              {content.practiceCta?.heading || "NEED LEGAL ASSISTANCE?"}
            </h2>
            <p
              className="font-archivo"
              style={{ color: "rgb(43,43,43)", fontSize: 24, fontWeight: 300, lineHeight: "34px", marginBottom: 30, wordBreak: "break-word" }}
            >
              {content.practiceCta?.subtitle || "Contact our experienced legal team today. We're available 24/7."}
            </p>
            <div style={{ marginBottom: 30, textAlign: "center" }}>
              <a
                href={`tel:${content.practiceCta?.phone || phoneNumber}`}
                className="font-archivo font-bold hover:opacity-80 transition-opacity duration-150"
                style={{ color: "rgb(94,6,14)", fontSize: 48, lineHeight: "72px" }}
              >
                {content.practiceCta?.phoneDisplay || phoneDisplay}
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link
                to={content.practiceCta?.ctaUrl || "/contact"}
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
                {content.practiceCta?.ctaText || "GET HELP NOW"}
              </Link>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}
