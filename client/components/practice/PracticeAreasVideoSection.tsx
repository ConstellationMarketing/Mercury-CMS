import { useState } from "react";
import { Link } from "react-router-dom";

export interface PracticeAreasVideoSectionContent {
  videoUrl: string;
  thumbnailImage: string;
  heading: string;
  text: string;
  ctaText: string;
  ctaUrl: string;
}

const DEFAULT: PracticeAreasVideoSectionContent = {
  videoUrl: "https://www.youtube.com/embed/FkQuawiGWUw?feature=oembed",
  thumbnailImage: "https://designs-mercury.netlify.app/images/image-8-min.jpg",
  heading: "Experience You Can Trust",
  text: "<p>Our attorneys have successfully handled thousands of cases across all practice areas, securing billions in compensation for our clients.</p><p>When you need aggressive representation and personalized attention, trust the team at Constellation Law.</p>",
  ctaText: "SCHEDULE CONSULTATION",
  ctaUrl: "/contact",
};

interface Props {
  content?: Partial<PracticeAreasVideoSectionContent>;
}

export default function PracticeAreasVideoSection({ content }: Props) {
  const [playing, setPlaying] = useState(false);

  const videoUrl = content?.videoUrl || DEFAULT.videoUrl;
  const thumbnail = content?.thumbnailImage || DEFAULT.thumbnailImage;
  const heading = content?.heading || DEFAULT.heading;
  const text = content?.text || DEFAULT.text;
  const ctaText = content?.ctaText || DEFAULT.ctaText;
  const ctaUrl = content?.ctaUrl || DEFAULT.ctaUrl;

  return (
    <div style={{ backgroundColor: "rgb(255,255,255)", paddingBottom: 54, paddingTop: 54, width: "100%" }}>
      <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 2560, paddingBottom: 27, paddingTop: 27, width: "90%" }}>
        <div style={{ display: "flex", gap: "5.5%" }}>
          {/* Left: Video */}
          <div style={{ width: "47.25%" }}>
            <div style={{ borderRadius: 10, overflow: "hidden", position: "relative" }}>
              {/* 16:9 aspect ratio wrapper */}
              <div style={{ paddingTop: "56.25%", position: "relative", width: "100%" }}>
                {playing ? (
                  <iframe
                    src={`${videoUrl}${videoUrl.includes("?") ? "&" : "?"}autoplay=1`}
                    title={heading}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: 10, height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}
                  />
                ) : (
                  <div
                    onClick={() => setPlaying(true)}
                    style={{
                      backgroundImage: `url("${thumbnail}")`,
                      backgroundPosition: "50% 50%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      borderRadius: 10,
                      cursor: "pointer",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%",
                      zIndex: 10,
                    }}
                  >
                    {/* Play button */}
                    <div
                      style={{
                        alignItems: "center",
                        backdropFilter: "blur(4px)",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        borderRadius: "9999px",
                        cursor: "pointer",
                        display: "flex",
                        height: 128,
                        justifyContent: "center",
                        left: "50%",
                        position: "absolute",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 128,
                        zIndex: 100,
                      }}
                    >
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7L8 5z" fill="#ffffff" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Text + CTA */}
          <div style={{ width: "47.25%" }}>
            <div style={{ marginBottom: 10 }}>
              <h2
                className="font-archivo font-bold"
                style={{ color: "rgb(0,0,0)", fontSize: "49.6128px", lineHeight: "49.6128px", paddingBottom: 10, wordBreak: "break-word" }}
              >
                {heading}
              </h2>
            </div>
            <div
              className="font-archivo practice-video-text"
              style={{ color: "rgb(43,43,43)", fontSize: "31.9488px", fontWeight: 300, lineHeight: "35.1437px", wordBreak: "break-word", marginBottom: 20 }}
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <div style={{ marginTop: 40 }}>
              <Link
                to={ctaUrl}
                className="font-archivo inline-block hover:opacity-90 transition-opacity duration-300"
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
                }}
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
