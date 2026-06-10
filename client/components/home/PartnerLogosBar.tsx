import type { PartnerLogo } from "@site/lib/cms/homePageTypes";

const DEFAULT_LOGOS: PartnerLogo[] = [
  { src: "https://designs-mercury.netlify.app/images/google-rating-1-min-min-min.png", alt: "Google Rating" },
  { src: "https://designs-mercury.netlify.app/images/ga_atlanta_law-firm-marketing_2023_inverse-1-min-min-min.png", alt: "Atlanta Law Firm Marketing" },
  { src: "https://designs-mercury.netlify.app/images/image-1-min.png", alt: "Award Badge" },
  { src: "https://designs-mercury.netlify.app/images/legal-talk-networkk-min-1-min-min-min.png", alt: "Legal Talk Network" },
  { src: "https://designs-mercury.netlify.app/images/image-3-min.png", alt: "Recognition Badge" },
];

interface PartnerLogosBarProps {
  logos?: PartnerLogo[];
}

export default function PartnerLogosBar({ logos }: PartnerLogosBarProps) {
  const items = logos && logos.length > 0 ? logos : DEFAULT_LOGOS;

  return (
    <div
      className="w-full"
      style={{ backgroundColor: "rgb(94,6,14)", paddingTop: "32px", paddingBottom: "32px" }}
    >
      <div
        className="flex items-center justify-center mx-auto"
        style={{ maxWidth: "2560px", width: "90%", gap: "0px" }}
      >
        {items.map((logo, i) => (
          <div key={i} style={{ width: "20%", textAlign: "center" }}>
            <img
              alt={logo.alt}
              width={190}
              height={123}
              loading="lazy"
              src={logo.src}
              style={{
                aspectRatio: "190 / 123",
                display: "inline",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
                verticalAlign: "middle",
                width: "190px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
