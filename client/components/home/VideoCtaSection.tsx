import { useState } from "react";
import { Link } from "react-router-dom";
import type { VideoCtaContent } from "@site/lib/cms/homePageTypes";

interface VideoCtaSectionProps {
  content: VideoCtaContent;
}

export default function VideoCtaSection({ content }: VideoCtaSectionProps) {
  const [playing, setPlaying] = useState(false);

  const videoUrl = content.videoUrl || "https://www.youtube.com/embed/FkQuawiGWUw";
  const thumbnail = content.videoThumbnail || "https://designs-mercury.netlify.app/images/image-8-min.jpg";
  const heading = content.heading || "A Leading Law Firm in Atlanta";
  const description = content.description || "Helping clients and victims throughout Atlanta for 40 years.";
  const ctaText = content.ctaText || "LEARN MORE";
  const ctaUrl = content.ctaUrl || "/about";

  const isExternal = ctaUrl.startsWith("http");

  return (
    <div className="bg-white w-full" style={{ paddingTop: "54px", paddingBottom: "54px" }}>
      <div
        className="mx-auto"
        style={{ maxWidth: "2560px", width: "90%", paddingTop: "27px", paddingBottom: "27px" }}
      >
        <div className="flex" style={{ gap: "5.5%" }}>

          {/* Left — Video */}
          <div style={{ width: "47.25%" }}>
            <div style={{ borderRadius: "10px", overflow: "hidden", position: "relative" }}>
              {/* Aspect ratio wrapper */}
              <div style={{ paddingTop: "56.2963%", position: "relative", width: "100%" }}>
                {playing && (
                  <iframe
                    src={`${videoUrl}?autoplay=1`}
                    title="Law Firm Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                      borderRadius: "10px",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%",
                    }}
                  />
                )}
              </div>

              {/* Thumbnail overlay */}
              {!playing && (
                <div
                  onClick={() => setPlaying(true)}
                  style={{
                    backgroundImage: `url("${thumbnail}")`,
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "10px",
                    cursor: "pointer",
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    zIndex: 10,
                  }}
                >
                  {/* Play button — 128x128px */}
                  <div
                    style={{
                      alignItems: "center",
                      backdropFilter: "blur(4px)",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: "9999px",
                      cursor: "pointer",
                      display: "flex",
                      height: "128px",
                      justifyContent: "center",
                      left: "50%",
                      position: "absolute",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "background-color 0.3s cubic-bezier(0.4,0,0.2,1)",
                      width: "128px",
                      zIndex: 100,
                    }}
                  >
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7L8 5z" fill="#ffffff" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right — Text */}
          <div style={{ width: "47.25%" }}>
            <div style={{ marginBottom: "10px", textAlign: "center" }}>
              <h2
                className="font-archivo font-bold text-left"
                style={{
                  color: "rgb(0,0,0)",
                  fontSize: "49.6128px",
                  lineHeight: "49.6128px",
                  paddingBottom: "10px",
                }}
              >
                {heading}
              </h2>
            </div>

            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <p
                className="font-archivo font-light"
                style={{
                  color: "rgb(0,0,0)",
                  fontSize: "31.9488px",
                  lineHeight: "35.1437px",
                }}
              >
                {description}
              </p>
            </div>

            <div style={{ marginTop: "40px", textAlign: "left" }}>
              {isExternal ? (
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-archivo inline-block hover:opacity-90 transition-opacity duration-300"
                  style={{
                    backgroundColor: "rgb(252,200,47)",
                    border: "0.909091px solid rgb(252,200,47)",
                    borderRadius: "16px",
                    color: "rgb(255,255,255)",
                    fontSize: "26px",
                    lineHeight: "44.2px",
                    paddingTop: "14px",
                    paddingBottom: "14px",
                    paddingLeft: "26px",
                    paddingRight: "26px",
                  }}
                >
                  {ctaText}
                </a>
              ) : (
                <Link
                  to={ctaUrl}
                  className="font-archivo inline-block hover:opacity-90 transition-opacity duration-300"
                  style={{
                    backgroundColor: "rgb(252,200,47)",
                    border: "0.909091px solid rgb(252,200,47)",
                    borderRadius: "16px",
                    color: "rgb(255,255,255)",
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
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
