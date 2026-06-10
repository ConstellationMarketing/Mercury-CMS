import type { PracticeAreaIconItem } from "@site/lib/cms/homePageTypes";

const BASE = "https://designs-mercury.netlify.app/images";

const DEFAULT_ITEMS: PracticeAreaIconItem[] = [
  { icon: `${BASE}/icon_0_0_112x112-min.png`, title: "Practice Area", subPractices: ["Sub-Practice", "Sub-Practice", "Sub-Practice"] },
  { icon: `${BASE}/icon_0_1_112x112-min.png`, title: "Practice Area", subPractices: ["Sub-Practice", "Sub-Practice", "Sub-Practice"] },
  { icon: `${BASE}/icon_0_2_112x112-min.png`, title: "Practice Area", subPractices: ["Sub-Practice", "Sub-Practice", "Sub-Practice"] },
  { icon: `${BASE}/icon_1_0_112x112-min.png`, title: "Practice Area", subPractices: ["Sub-Practice", "Sub-Practice", "Sub-Practice"] },
  { icon: `${BASE}/icon_1_1_112x112-min.png`, title: "Practice Area", subPractices: ["Sub-Practice", "Sub-Practice", "Sub-Practice"] },
  { icon: `${BASE}/icon_1_2_112x112-min.png`, title: "Practice Area", subPractices: ["Sub-Practice", "Sub-Practice", "Sub-Practice"] },
  { icon: `${BASE}/icon_2_0_112x112-min.png`, title: "Practice Area", subPractices: ["Sub-Practice", "Sub-Practice", "Sub-Practice"] },
  { icon: `${BASE}/icon_2_1_112x112-min.png`, title: "Practice Area", subPractices: ["Sub-Practice", "Sub-Practice", "Sub-Practice"] },
  { icon: `${BASE}/icon_2_2_112x112-min.png`, title: "Practice Area", subPractices: ["Sub-Practice", "Sub-Practice", "Sub-Practice"] },
];

interface PracticeAreasIconGridProps {
  items?: PracticeAreaIconItem[];
}

function PracticeAreaCard({ item }: { item: PracticeAreaIconItem }) {
  return (
    <div style={{ alignItems: "flex-start", display: "flex", width: "100%" }}>
      {/* Icon */}
      <div style={{ width: "112px", flexShrink: 0 }}>
        <img
          alt={item.iconAlt || item.title}
          width={112}
          height={112}
          loading="lazy"
          src={item.icon}
          style={{ aspectRatio: "1", display: "inline", maxWidth: "100%", verticalAlign: "middle", width: "112px" }}
        />
      </div>
      {/* Text */}
      <div style={{ paddingLeft: "15px" }}>
        <h4
          className="font-archivo font-semibold"
          style={{ color: "rgb(0,0,0)", fontSize: "23.04px", lineHeight: "23.04px", paddingBottom: "10px" }}
        >
          {item.title}
        </h4>
        <p
          className="font-archivo font-light"
          style={{ color: "rgb(60,60,60)", fontSize: "19.968px", lineHeight: "25.9584px" }}
        >
          {item.subPractices.map((sub, i) => (
            <span key={i}>
              {sub}
              {i < item.subPractices.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function PracticeAreasIconGrid({ items }: PracticeAreasIconGridProps) {
  const all = items && items.length > 0 ? items : DEFAULT_ITEMS;

  // Split into rows of 3
  const rows: PracticeAreaIconItem[][] = [];
  for (let i = 0; i < all.length; i += 3) {
    rows.push(all.slice(i, i + 3));
  }

  return (
    <div className="bg-white w-full" style={{ paddingTop: "54px", paddingBottom: "54px" }}>
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="flex mx-auto"
          style={{ maxWidth: "2560px", width: "95%", paddingTop: "27px", paddingBottom: "27px", gap: "0px" }}
        >
          {row.map((item, colIdx) => (
            <div key={colIdx} style={{ width: "33.3333%" }}>
              <div style={{ marginBottom: rowIdx === 0 && colIdx === 0 ? "30px" : undefined }}>
                <PracticeAreaCard item={item} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
