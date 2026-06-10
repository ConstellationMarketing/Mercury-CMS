import { useState } from "react";
import type { StatsVideoContent } from "@site/lib/cms/homePageTypes";

interface StatsVideoSectionProps {
  content: StatsVideoContent;
}

export default function StatsVideoSection({ content }: StatsVideoSectionProps) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const videoUrl = content.videoUrl || "https://www.youtube.com/embed/FkQuawiGWUw";
  const videoThumbnail = content.videoThumbnail || "https://designs-mercury.netlify.app/images/image-5-min.jpg";

  const stat1Bg = content.stat1BackgroundImage || "https://designs-mercury.netlify.app/images/image-6-min.jpg";
  const stat1Badge = content.stat1BadgeImage || "https://designs-mercury.netlify.app/images/3X-min.png";
  const stat1BadgeAlt = content.stat1BadgeAlt || "3X";
  const stat1Headline = content.stat1Headline || "BIGGER PAYOUTS";
  const stat1Subtext = content.stat1Subtext || "WHEN YOU HIRE US";
  const stat1FoundedYear = content.stat1FoundedYear || "SINCE 2010";

  const stat2Bg = content.stat2BackgroundImage || "https://designs-mercury.netlify.app/images/image-7-min.jpg";
  const stat2Label = content.stat2Label || "CLIENT";
  const stat2Badge = content.stat2BadgeImage || "https://designs-mercury.netlify.app/images/99.png";
  const stat2BadgeAlt = content.stat2BadgeAlt || "99%";
  const stat2Subtext = content.stat2Subtext || "SATISFACTION";

  return (
    <div
      className="w-full"
      style={{ backgroundColor: "rgb(217,217,217)", paddingTop: "20px", paddingBottom: "20px" }}
    >
      <div
        className="flex mx-auto"
        style={{
          gap: "3%",
          maxWidth: "2560px",
          paddingTop: "27px",
          paddingBottom: "27px",
          paddingLeft: "16px",
          paddingRight: "16px",
          width: "98%",
        }}
      >
        {/* Card 1 — Video */}
        <div
          style={{
            borderRadius: "10px",
            height: "339px",
            overflow: "hidden",
            position: "relative",
            width: "31.3333%",
          }}
        >
          {/* YouTube iframe (shown after play click) */}
          <div style={{ height: "100%", paddingTop: "56.2963%", position: "relative", width: "100%" }}>
            {videoPlaying && (
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="Law Firm Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  height: "100%",
                  left: 0,
                  position: "absolute",
                  top: 0,
                  width: "100%",
                }}
              />
            )}
          </div>

          {/* Thumbnail overlay (hidden when playing) */}
          {!videoPlaying && (
            <div
              onClick={() => setVideoPlaying(true)}
              style={{
                backgroundImage: `url("${videoThumbnail}")`,
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
              {/* Play button */}
              <div
                style={{
                  alignItems: "center",
                  backdropFilter: "blur(4px)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "9999px",
                  cursor: "pointer",
                  display: "flex",
                  height: "80px",
                  justifyContent: "center",
                  left: "50%",
                  position: "absolute",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  transition: "background-color 0.3s cubic-bezier(0.4,0,0.2,1)",
                  width: "80px",
                  zIndex: 100,
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7L8 5z" fill="#ffffff" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Card 2 — 3X Stats */}
        <div
          style={{
            backgroundImage: `url("${stat1Bg}")`,
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            height: "339px",
            overflow: "hidden",
            paddingBottom: "30px",
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "60px",
            width: "31.3333%",
          }}
        >
          {/* 23px spacer */}
          <div style={{ height: "23px", marginBottom: "4.787%" }} />

          {/* 3X badge + text */}
          <div style={{ marginBottom: "4.787%" }}>
            <div style={{ alignItems: "flex-start", display: "flex", width: "100%" }}>
              <div>
                <img
                  alt={stat1BadgeAlt}
                  width={127}
                  height={70}
                  loading="lazy"
                  src={stat1Badge}
                  style={{ aspectRatio: "127/70", maxWidth: "100%", verticalAlign: "middle", width: "129px" }}
                />
              </div>
              <div style={{ paddingLeft: "15px" }}>
                <h4
                  className="font-archivo uppercase"
                  style={{
                    color: "rgb(255,255,255)",
                    fontSize: "31.9488px",
                    lineHeight: "31.9488px",
                    paddingBottom: "10px",
                  }}
                >
                  {stat1Headline}
                </h4>
                <p
                  className="font-archivo font-light"
                  style={{
                    color: "rgb(255,255,255)",
                    fontSize: "25.6512px",
                    lineHeight: "38.4768px",
                  }}
                >
                  {stat1Subtext}
                </p>
              </div>
            </div>
          </div>

          {/* 23px spacer */}
          <div style={{ height: "23px", marginBottom: "4.787%" }} />

          {/* SINCE 2010 */}
          <div style={{ textAlign: "right" }}>
            <p
              className="font-archivo uppercase"
              style={{ color: "rgb(255,255,255)", fontSize: "20px", lineHeight: "30px" }}
            >
              {stat1FoundedYear}
            </p>
          </div>
        </div>

        {/* Card 3 — 99% Satisfaction */}
        <div
          style={{
            backgroundImage: `url("${stat2Bg}")`,
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            height: "339px",
            overflow: "hidden",
            paddingTop: "80px",
            width: "31.3333%",
          }}
        >
          {/* CLIENT label */}
          <div style={{ marginBottom: "4.787%" }}>
            <p
              className="font-archivo uppercase text-center"
              style={{ color: "rgb(255,255,255)", fontSize: "31.9488px", lineHeight: "47.9232px" }}
            >
              {stat2Label}
            </p>
          </div>

          {/* 99% badge + SATISFACTION */}
          <div style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center", width: "100%" }}>
            <div style={{ display: "inline-block", marginBottom: "30px", textAlign: "center" }}>
              <img
                alt={stat2BadgeAlt}
                width={205}
                height={70}
                loading="lazy"
                src={stat2Badge}
                style={{ aspectRatio: "205/70", maxWidth: "100%", verticalAlign: "middle", width: "205px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                className="font-archivo font-light text-center"
                style={{ color: "rgb(255,255,255)", fontSize: "25.6512px", lineHeight: "38.4768px" }}
              >
                {stat2Subtext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
