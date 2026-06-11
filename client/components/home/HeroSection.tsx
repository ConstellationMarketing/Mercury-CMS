import { Link } from "react-router-dom";
import type { HeroContent } from "@site/lib/cms/homePageTypes";
import { useSiteSettings } from "@site/contexts/SiteSettingsContext";

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  const { settings } = useSiteSettings();

  const ctaText = content.ctaText?.trim() || settings.headerCtaText?.trim() || "GET HELP NOW";
  const ctaUrl = content.ctaUrl?.trim() || settings.headerCtaUrl?.trim() || "/contact";

  const foundedYear = content.foundedYear || "SINCE 2010";
  const statNumber = content.statNumber || "BILLIONS";
  const statLabel = content.statLabel || "WON FOR OUR CLIENTS";
  const tagline = content.tagline || "JUST IN CASE\u00ae";
  const bgImage = content.backgroundImage || "https://designs-mercury.netlify.app/images/image-4-min.jpg";
  const attorneyImage = content.attorneyImage || "https://designs-mercury.netlify.app/images/hiclipart.com-id_siapp-480x640-copy-1-min.png";
  const awardBadgeImage = content.awardBadgeImage || "https://designs-mercury.netlify.app/images/Group-53-min.png";
  const awardBadgeAlt = content.awardBadgeAlt || "Award Badge";

  return (
    <div className="bg-white w-full" style={{ paddingTop: "24px", paddingBottom: "24px", paddingLeft: "32px", paddingRight: "32px" }}>
      {/* Rounded container with background image */}
      <div
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "98%",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        {/* Inner flex layout */}
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "2560px",
            paddingTop: "27px",
            width: "80%",
          }}
        >
          {/* Left column */}
          <div
            style={{
              marginRight: "3%",
              paddingBottom: "100px",
              paddingTop: "80px",
              width: "48.5%",
            }}
          >
            {/* SINCE 2010 */}
            <div style={{ marginBottom: "3.093%", textAlign: "right" }}>
              <p
                className="font-archivo uppercase"
                style={{ color: "rgb(255,255,255)", fontSize: "24px", lineHeight: "36px" }}
              >
                {foundedYear}
              </p>
            </div>

            {/* Spacer */}
            <div style={{ height: "23px", marginBottom: "3.093%" }} />

            {/* BILLIONS */}
            <div style={{ marginTop: "-25px", textAlign: "center" }}>
              <p
                className="font-archivo font-bold uppercase whitespace-nowrap"
                style={{ color: "rgb(255,255,255)", fontSize: "102.451px", lineHeight: "102.451px" }}
              >
                {statNumber}
              </p>
            </div>

            {/* WON FOR OUR CLIENTS with decorative bars */}
            <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "3.093%" }}>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <div
                  className="flex-1"
                  style={{ backgroundColor: "rgb(42,110,66)", height: "8px" }}
                />
                <p className="whitespace-nowrap" style={{ color: "rgb(255,255,255)" }}>
                  <span
                    className="font-archivo font-bold uppercase whitespace-nowrap"
                    style={{ color: "rgb(255,255,255)", fontSize: "28.8768px", lineHeight: "43.3152px" }}
                  >
                    {statLabel}
                  </span>
                </p>
                <div
                  className="flex-1"
                  style={{ backgroundColor: "rgb(42,110,66)", height: "8px" }}
                />
              </div>
            </div>

            {/* CTA Button */}
            <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "3.093%" }}>
              <Link
                to={ctaUrl}
                className="font-archivo inline-block whitespace-nowrap hover:opacity-90 transition-opacity duration-300 w-full text-center"
                style={{
                  backgroundColor: "rgb(252,200,47)",
                  borderRadius: "16px",
                  color: "rgb(17,71,36)",
                  fontSize: "26px",
                  lineHeight: "44.2px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  paddingLeft: "26px",
                  paddingRight: "26px",
                }}
              >
                {ctaText}
              </Link>
            </div>

            {/* JUST IN CASE® */}
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <p
                className="font-archivo uppercase"
                style={{ color: "rgb(255,255,255)", fontSize: "36px", lineHeight: "54px" }}
              >
                {tagline}
              </p>
            </div>
          </div>

          {/* Right column — attorney person bg + award badge */}
          <div
            style={{
              backgroundImage: `url("${attorneyImage}")`,
              backgroundPosition: "50% 100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              position: "relative",
              width: "48.5%",
            }}
          >
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "350px",
                textAlign: "center",
              }}
            >
              {awardBadgeImage && (
                <img
                  alt={awardBadgeAlt}
                  width={406}
                  height={174}
                  loading="lazy"
                  src={awardBadgeImage}
                  style={{
                    aspectRatio: "406 / 174",
                    display: "inline",
                    maxWidth: "100%",
                    verticalAlign: "middle",
                    width: "406px",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
