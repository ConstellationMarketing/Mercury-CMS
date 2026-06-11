export interface OfficeHoursRow {
  day: string;
  hours: string;
}

export interface ContactOfficeHoursSectionContent {
  heading: string;
  rows: OfficeHoursRow[];
  note: string;
}

const DEFAULT: ContactOfficeHoursSectionContent = {
  heading: "OFFICE HOURS",
  rows: [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday - Sunday", hours: "24/7 Emergency Line" },
  ],
  note: "Appointments available by request",
};

interface Props {
  content?: Partial<ContactOfficeHoursSectionContent>;
}

export default function ContactOfficeHoursSection({ content }: Props) {
  const heading = content?.heading || DEFAULT.heading;
  const rows = content?.rows?.length ? content.rows : DEFAULT.rows;
  const note = content?.note ?? DEFAULT.note;

  return (
    <div style={{ backgroundColor: "rgb(255,255,255)", paddingBottom: 54, paddingTop: 54, width: "100%" }}>
      <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 1080, paddingBottom: 27, paddingTop: 27, width: "80%" }}>
        <div style={{ textAlign: "center" }}>
          <h2
            className="font-archivo font-bold"
            style={{ color: "rgb(0,0,0)", fontSize: "41.6256px", lineHeight: "41.6256px", paddingBottom: 20, wordBreak: "break-word" }}
          >
            {heading}
          </h2>
          <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 600 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {rows.map((row, i) => (
                <div
                  key={i}
                  style={{ borderBottom: "0.909091px solid rgb(229,231,235)", display: "flex", justifyContent: "space-between", paddingBottom: 16 }}
                >
                  <span
                    className="font-archivo font-semibold"
                    style={{ color: "rgb(42,110,66)", fontSize: 20, lineHeight: "30px", wordBreak: "break-word" }}
                  >
                    {row.day}
                  </span>
                  <span
                    className="font-archivo"
                    style={{ color: "rgb(81,81,81)", fontSize: 20, lineHeight: "30px", wordBreak: "break-word" }}
                  >
                    {row.hours}
                  </span>
                </div>
              ))}
              {note && (
                <div style={{ marginTop: 20, textAlign: "center" }}>
                  <p
                    className="font-archivo"
                    style={{ color: "rgb(81,81,81)", fontSize: 18, fontWeight: 300, lineHeight: "27px", wordBreak: "break-word" }}
                  >
                    {note}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
