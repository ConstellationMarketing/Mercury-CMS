export interface ContactInfoSectionContent {
  phone: string;
  phoneDisplay: string;
  phoneLabel: string;
  phoneIcon?: string;
  email: string;
  emailLabel: string;
  emailIcon?: string;
  addressLine1: string;
  addressLine2: string;
  addressLabel: string;
  addressIcon?: string;
}

const PHONE_PATH = "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z";
const EMAIL_PATH = "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z";
const LOCATION_PATH = "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z";

function GreenIcon({ path, imageUrl }: { path: string; imageUrl?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
      {imageUrl ? (
        <img src={imageUrl} alt="" style={{ height: 64, width: 64, objectFit: "contain" }} />
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 64, width: 64, verticalAlign: "middle", overflow: "hidden" }}>
          <path d={path} fill="rgb(42,110,66)" />
        </svg>
      )}
    </div>
  );
}

interface Props {
  content?: Partial<ContactInfoSectionContent>;
  globalPhone?: string;
  globalPhoneDisplay?: string;
}

export default function ContactInfoSection({ content, globalPhone, globalPhoneDisplay }: Props) {
  const phone = content?.phone || globalPhone || "4045555555";
  const phoneDisplay = content?.phoneDisplay || globalPhoneDisplay || "404-555-5555";
  const phoneLabel = content?.phoneLabel || "Available 24/7";
  const email = content?.email || "info@constellationlaw.com";
  const emailLabel = content?.emailLabel || "We respond within 24 hours";
  const addressLine1 = content?.addressLine1 || "PO Box 170027";
  const addressLine2 = content?.addressLine2 || "Atlanta, GA 30317-9998";
  const addressLabel = content?.addressLabel || "Main Office";

  const colStyle: React.CSSProperties = { textAlign: "center", width: "31.3333%" };
  const innerStyle: React.CSSProperties = { marginLeft: "auto", marginRight: "auto", maxWidth: 400, textAlign: "center" };

  return (
    <div style={{ backgroundColor: "rgb(255,255,255)", paddingBottom: 54, paddingTop: 54, width: "100%" }}>
      <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 2560, paddingBottom: 27, paddingTop: 27, width: "90%" }}>
        <div style={{ display: "flex", gap: "3%" }}>
          {/* Phone */}
          <div style={colStyle}>
            <div style={innerStyle}>
              <GreenIcon path={PHONE_PATH} imageUrl={content?.phoneIcon} />
              <h3 className="font-archivo font-bold uppercase" style={{ color: "rgb(42,110,66)", fontSize: 24, paddingBottom: 10, wordBreak: "break-word" }}>PHONE</h3>
              <a
                href={`tel:${phone}`}
                className="font-archivo font-semibold hover:opacity-80 transition-opacity duration-150"
                style={{ color: "rgb(81,81,81)", fontSize: 28, lineHeight: "42px", wordBreak: "break-word" }}
              >
                {phoneDisplay}
              </a>
              <p className="font-archivo" style={{ color: "rgb(81,81,81)", fontWeight: 300, marginTop: 10, wordBreak: "break-word" }}>{phoneLabel}</p>
            </div>
          </div>

          {/* Email */}
          <div style={colStyle}>
            <div style={innerStyle}>
              <GreenIcon path={EMAIL_PATH} imageUrl={content?.emailIcon} />
              <h3 className="font-archivo font-bold uppercase" style={{ color: "rgb(42,110,66)", fontSize: 24, paddingBottom: 10, wordBreak: "break-word" }}>EMAIL</h3>
              <a
                href={`mailto:${email}`}
                className="font-archivo font-semibold hover:opacity-80 transition-opacity duration-150"
                style={{ color: "rgb(81,81,81)", fontSize: 24, lineHeight: "36px", wordBreak: "break-word" }}
              >
                {email}
              </a>
              <p className="font-archivo" style={{ color: "rgb(81,81,81)", fontWeight: 300, marginTop: 10, wordBreak: "break-word" }}>{emailLabel}</p>
            </div>
          </div>

          {/* Address */}
          <div style={colStyle}>
            <div style={innerStyle}>
              <GreenIcon path={LOCATION_PATH} imageUrl={content?.addressIcon} />
              <h3 className="font-archivo font-bold uppercase" style={{ color: "rgb(42,110,66)", fontSize: 24, paddingBottom: 10, wordBreak: "break-word" }}>ADDRESS</h3>
              <p className="font-archivo font-semibold" style={{ color: "rgb(81,81,81)", fontSize: 20, lineHeight: "30px", wordBreak: "break-word" }}>
                {addressLine1}<br />{addressLine2}
              </p>
              <p className="font-archivo" style={{ color: "rgb(81,81,81)", fontWeight: 300, marginTop: 10, wordBreak: "break-word" }}>{addressLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
