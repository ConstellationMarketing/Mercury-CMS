import { Link } from "react-router-dom";

export interface PracticeAreaCardItem {
  iconImage: string;
  iconImageAlt: string;
  title: string;
  description: string;
  tags: string;
  learnMoreText?: string;
  link: string;
}

export interface PracticeAreasCardsSectionContent {
  areas: PracticeAreaCardItem[];
}

const BASE = "https://designs-mercury.netlify.app/images";

const DEFAULT_AREAS: PracticeAreaCardItem[] = [
  { iconImage: `${BASE}/icon_0_0_112x112-min.png`, iconImageAlt: "Personal Injury", title: "Personal Injury", description: "Comprehensive representation for all types of injury claims, ensuring you receive the compensation you deserve for your pain and suffering.", tags: "", learnMoreText: "Learn More →", link: "/practice-areas/personal-injury" },
  { iconImage: `${BASE}/icon_0_1_112x112-min.png`, iconImageAlt: "Car Accidents", title: "Car Accidents", description: "Dedicated advocacy for victims of auto accidents, from minor collisions to catastrophic crashes that change lives forever.", tags: "", learnMoreText: "Learn More →", link: "/practice-areas/car-accidents" },
  { iconImage: `${BASE}/icon_0_2_112x112-min.png`, iconImageAlt: "Medical Malpractice", title: "Medical Malpractice", description: "Holding healthcare providers accountable when negligence causes harm to patients and their families.", tags: "", learnMoreText: "Learn More →", link: "/practice-areas/medical-malpractice" },
  { iconImage: `${BASE}/icon_1_0_112x112-min.png`, iconImageAlt: "Wrongful Death", title: "Wrongful Death", description: "Compassionate support for families seeking justice after the loss of a loved one due to negligence or wrongdoing.", tags: "", learnMoreText: "Learn More →", link: "/practice-areas/wrongful-death" },
  { iconImage: `${BASE}/icon_1_1_112x112-min.png`, iconImageAlt: "Slip & Fall", title: "Slip & Fall", description: "Protecting the rights of those injured due to dangerous property conditions and owner negligence.", tags: "", learnMoreText: "Learn More →", link: "/practice-areas/slip-and-fall" },
  { iconImage: `${BASE}/icon_1_2_112x112-min.png`, iconImageAlt: "Workers' Compensation", title: "Workers' Compensation", description: "Fighting for injured workers to receive full benefits and medical care after workplace accidents.", tags: "", learnMoreText: "Learn More →", link: "/practice-areas/workers-compensation" },
  { iconImage: `${BASE}/icon_2_0_112x112-min.png`, iconImageAlt: "Product Liability", title: "Product Liability", description: "Pursuing claims against manufacturers of defective or dangerous products that cause injury to consumers.", tags: "", learnMoreText: "Learn More →", link: "/practice-areas/product-liability" },
  { iconImage: `${BASE}/icon_2_1_112x112-min.png`, iconImageAlt: "Nursing Home Abuse", title: "Nursing Home Abuse", description: "Advocating for elderly victims of neglect and abuse in care facilities, ensuring their dignity and safety.", tags: "", learnMoreText: "Learn More →", link: "/practice-areas/nursing-home-abuse" },
  { iconImage: `${BASE}/icon_2_2_112x112-min.png`, iconImageAlt: "Premises Liability", title: "Premises Liability", description: "Ensuring property owners maintain safe conditions for visitors and guests on their premises.", tags: "", learnMoreText: "Learn More →", link: "/practice-areas/premises-liability" },
];

interface Props {
  content?: Partial<PracticeAreasCardsSectionContent>;
}

export default function PracticeAreasCardsSection({ content }: Props) {
  const areas = content?.areas?.length ? content.areas : DEFAULT_AREAS;

  return (
    <div style={{ backgroundColor: "rgb(255,255,255)", paddingBottom: 54, paddingTop: 54, width: "100%" }}>
      <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 2560, paddingBottom: 27, paddingTop: 27, width: "90%" }}>
        <div style={{ display: "grid", gap: 48, gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {areas.map((area, i) => (
            <div key={i} style={{ width: "100%" }}>
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", textAlign: "center", width: "100%" }}>
                {/* Icon */}
                <div style={{ marginBottom: 20, textAlign: "center" }}>
                  <img
                    alt={area.iconImageAlt}
                    width={112}
                    height={112}
                    loading="lazy"
                    src={area.iconImage}
                    style={{ aspectRatio: "1 / 1", display: "inline", maxWidth: "100%", verticalAlign: "middle", width: 112 }}
                  />
                </div>

                {/* Title */}
                <div style={{ marginBottom: 15, textAlign: "center" }}>
                  <h4
                    className="font-archivo"
                    style={{ color: "rgb(0,0,0)", fontSize: "23.04px", fontWeight: 600, lineHeight: "23.04px", paddingBottom: 10, wordBreak: "break-word" }}
                  >
                    {area.title}
                  </h4>
                </div>

                {/* Description */}
                <div
                  className="font-archivo"
                  style={{ color: "rgb(60,60,60)", fontSize: 18, fontWeight: 300, lineHeight: "26px", wordBreak: "break-word", marginBottom: 15, textAlign: "center" }}
                  dangerouslySetInnerHTML={{ __html: area.description }}
                />

                {/* Learn More link */}
                <div style={{ textAlign: "center" }}>
                  <Link
                    to={area.link || "/contact"}
                    className="font-archivo font-semibold hover:opacity-80 transition-opacity duration-150"
                    style={{ color: "rgb(42,110,66)", fontSize: 18, lineHeight: "27px" }}
                  >
                    {area.learnMoreText || "Learn More →"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
