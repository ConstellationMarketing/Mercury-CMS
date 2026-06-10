import { Link } from "react-router-dom";
import { useSiteSettings } from "@site/contexts/SiteSettingsContext";

export default function TopBar() {
  const { settings } = useSiteSettings();

  const logoUrl = settings.logoUrl?.trim() || "";
  const logoAlt = settings.logoAlt?.trim() || settings.siteName?.trim() || "Logo";
  const phoneNumber = settings.phoneNumber?.trim() || "";
  const phoneDisplay = settings.phoneDisplay?.trim() || phoneNumber;
  const phoneAvailability = settings.phoneAvailability?.trim() || "";
  const ctaText = settings.headerCtaText?.trim() || "GET HELP NOW";
  const ctaUrl = settings.headerCtaUrl?.trim() || "/contact";

  return (
    <div className="bg-white w-full">
      <div
        className="flex items-center mx-auto"
        style={{
          maxWidth: "2560px",
          paddingTop: "27px",
          paddingBottom: "27px",
          paddingLeft: "2.5%",
          paddingRight: "2.5%",
        }}
      >
        {/* Logo — 60% */}
        <div className="flex items-center justify-start" style={{ width: "60%" }}>
          <div style={{ maxWidth: "438px" }}>
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={logoAlt}
                width={657}
                height={117}
                loading="lazy"
                style={{
                  width: "657px",
                  maxWidth: "100%",
                  display: "inline",
                  verticalAlign: "middle",
                  aspectRatio: "657 / 117",
                }}
              />
            ) : (
              <span
                className="font-archivo font-semibold text-black"
                style={{ fontSize: "24px" }}
              >
                {settings.siteName}
              </span>
            )}
          </div>
        </div>

        {/* Phone — 20% */}
        <div
          className="text-center"
          style={{ width: "20%", paddingRight: "30px" }}
        >
          <div className="mx-auto text-center" style={{ maxWidth: "550px" }}>
            <div className="text-left">
              <h4
                className="font-archivo font-semibold uppercase text-black text-right"
                style={{
                  fontSize: "24px",
                  paddingBottom: "10px",
                  whiteSpace: "nowrap",
                }}
              >
                {phoneAvailability}
              </h4>
              <div className="text-right">
                <a
                  href={`tel:${phoneNumber}`}
                  className="font-archivo font-semibold text-right transition-opacity duration-150 hover:opacity-80"
                  style={{
                    color: "rgb(94, 6, 14)",
                    fontSize: "30px",
                    lineHeight: "45px",
                    whiteSpace: "nowrap",
                    display: "inline",
                  }}
                >
                  {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button — 20% */}
        <div className="text-right" style={{ width: "20%" }}>
          <div className="text-right">
            <Link
              to={ctaUrl}
              className="font-archivo font-semibold text-white inline-block transition-opacity duration-300 hover:opacity-90"
              style={{
                backgroundColor: "rgb(94, 6, 14)",
                borderRadius: "16px",
                fontSize: "26px",
                lineHeight: "44.2px",
                paddingTop: "14px",
                paddingBottom: "14px",
                paddingLeft: "26px",
                paddingRight: "26px",
                whiteSpace: "nowrap",
              }}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
