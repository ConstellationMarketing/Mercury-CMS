import type { TeamSectionContent } from "@site/lib/cms/homePageTypes";

interface TeamSectionHeadingProps {
  content: TeamSectionContent;
}

export default function TeamSectionHeading({ content }: TeamSectionHeadingProps) {
  const heading = content.heading || "OUR TEAM OF LAWYERS";
  const subtext = content.subtext || "Meet the entire legal team";

  return (
    <div className="bg-white w-full" style={{ paddingTop: "54px" }}>
      <div
        className="mx-auto"
        style={{ maxWidth: "1080px", paddingTop: "27px", paddingBottom: "27px", width: "80%" }}
      >
        <div className="text-center">
          <h2
            className="font-archivo font-bold"
            style={{
              color: "rgb(0,0,0)",
              fontSize: "41.6256px",
              lineHeight: "41.6256px",
              paddingBottom: "10px",
            }}
          >
            {heading}
          </h2>
          <p
            className="font-archivo font-light"
            style={{
              color: "rgb(43,43,43)",
              fontSize: "32px",
              lineHeight: "48px",
            }}
          >
            {subtext}
          </p>
        </div>
      </div>
    </div>
  );
}
