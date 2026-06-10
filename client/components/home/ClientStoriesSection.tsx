import { useState } from "react";
import type { ClientStoriesContent } from "@site/lib/cms/homePageTypes";

const DEFAULT_VIDEOS = [
  { url: "https://www.youtube.com/embed/FkQuawiGWUw", thumbnail: "https://designs-mercury.netlify.app/images/image-9-min.jpg" },
  { url: "https://www.youtube.com/embed/FkQuawiGWUw", thumbnail: "https://designs-mercury.netlify.app/images/image-10-min.jpg" },
  { url: "https://www.youtube.com/embed/FkQuawiGWUw", thumbnail: "https://designs-mercury.netlify.app/images/image-11-min.jpg" },
];

interface ClientStoriesSectionProps {
  content: ClientStoriesContent;
}

function VideoCard({ url, thumbnail }: { url: string; thumbnail: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{ borderRadius: "10px", overflow: "hidden", position: "relative" }}>
      {/* Aspect ratio container */}
      <div style={{ paddingTop: "56.2963%", position: "relative", width: "100%", zIndex: 1 }}>
        {playing && (
          <iframe
            src={`${url}?autoplay=1`}
            title="Client Story Video"
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

      {/* Thumbnail + play button overlay */}
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
          {/* Play button — 80x80px */}
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
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="#ffffff" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ClientStoriesSection({ content }: ClientStoriesSectionProps) {
  const heading = content.heading || "OUR CLIENTS HAVE REMARKABLE STORIES TO TELL";
  const description = content.description || "Click on the links below to learn more about actual clients Constellation Law Firm has helped and how we were able to assist them in moving forward with their lives.";
  const videos = content.videos?.length ? content.videos : DEFAULT_VIDEOS;

  return (
    <div className="bg-white w-full">
      {/* Heading block */}
      <div className="mx-auto" style={{ maxWidth: "2560px", width: "80%", paddingTop: "27px", paddingBottom: "27px" }}>
        <div className="text-center w-full">
          <h2
            className="font-archivo font-bold text-center"
            style={{ color: "rgb(0,0,0)", fontSize: "41.6256px", lineHeight: "41.6256px", paddingBottom: "10px" }}
          >
            {heading}
          </h2>
          <p
            className="font-archivo font-light text-center"
            style={{ color: "rgb(43,43,43)", fontSize: "25.6512px", lineHeight: "30.7814px" }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Video cards */}
      <div
        className="flex mx-auto"
        style={{ maxWidth: "2560px", width: "90%", paddingTop: "27px", paddingBottom: "27px", gap: "3%" }}
      >
        {videos.map((video, i) => (
          <div key={i} style={{ width: "31.3333%" }}>
            <VideoCard url={video.url} thumbnail={video.thumbnail} />
          </div>
        ))}
      </div>
    </div>
  );
}
