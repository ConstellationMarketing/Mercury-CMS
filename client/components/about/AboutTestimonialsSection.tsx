import type { AboutTestimonialsContent } from "@site/lib/cms/aboutPageTypes";

const STAR_PATH = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

function StarRow() {
  return (
    <div style={{ display: "flex", gap: 4, justifyContent: "center", marginBottom: 20 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: "rgb(252,200,47)", height: 24, width: 24, verticalAlign: "middle", overflow: "hidden" }}
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}

const DEFAULT_CONTENT: AboutTestimonialsContent = {
  heading: "WHAT OUR CLIENTS SAY",
  subtitle: "Real stories from real clients who trusted us with their cases",
  testimonials: [
    {
      quote: '"Constellation Law fought for me when I couldn\'t fight for myself. They secured a settlement that changed my life."',
      name: "Sarah J.",
      role: "Car Accident Victim",
    },
    {
      quote: '"Professional, compassionate, and results-driven. I couldn\'t have asked for better representation."',
      name: "Michael T.",
      role: "Slip & Fall Victim",
    },
    {
      quote: '"After my accident, I was lost. Constellation Law guided me every step of the way and won my case."',
      name: "Jennifer R.",
      role: "Medical Malpractice Victim",
    },
  ],
};

interface Props {
  content?: Partial<AboutTestimonialsContent>;
}

export default function AboutTestimonialsSection({ content }: Props) {
  const heading = content?.heading || DEFAULT_CONTENT.heading;
  const subtitle = content?.subtitle || DEFAULT_CONTENT.subtitle;
  const testimonials =
    content?.testimonials && content.testimonials.length > 0
      ? content.testimonials
      : DEFAULT_CONTENT.testimonials;

  return (
    <div style={{ backgroundColor: "rgb(255,255,255)", paddingBottom: 54, paddingTop: 54, width: "100%" }}>
      {/* Heading */}
      <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 2560, paddingBottom: 27, paddingTop: 27, width: "80%" }}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h2
            className="font-archivo font-bold"
            style={{ color: "rgb(0,0,0)", fontSize: "41.6256px", lineHeight: "41.6256px", paddingBottom: 10, wordBreak: "break-word" }}
          >
            {heading}
          </h2>
          <p
            className="font-archivo"
            style={{ color: "rgb(43,43,43)", fontSize: "25.6512px", fontWeight: 300, lineHeight: "30.7814px", wordBreak: "break-word" }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          gap: "3%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 2560,
          paddingBottom: 27,
          paddingTop: 27,
          width: "90%",
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "rgb(247,247,247)",
              borderRadius: 10,
              overflow: "hidden",
              paddingBottom: 40,
              paddingLeft: 40,
              paddingRight: 40,
              paddingTop: 40,
              width: "31.3333%",
            }}
          >
            <StarRow />
            <div style={{ marginBottom: 20, textAlign: "center" }}>
              <p
                className="font-archivo"
                style={{ color: "rgb(60,60,60)", fontSize: 20, fontWeight: 300, lineHeight: "30px", wordBreak: "break-word" }}
              >
                {t.quote}
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4
                className="font-archivo font-bold"
                style={{ color: "rgb(42,110,66)", fontSize: 20, lineHeight: "20px", paddingBottom: 5, wordBreak: "break-word" }}
              >
                {t.name}
              </h4>
              <p
                className="font-archivo"
                style={{ color: "rgb(81,81,81)", wordBreak: "break-word" }}
              >
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
