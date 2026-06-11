import { useState } from "react";

export interface ContactFormSectionContent {
  heading: string;
  sideImage: string;
  badgeImage: string;
}

interface Props {
  content?: Partial<ContactFormSectionContent>;
}

const inputStyle: React.CSSProperties = {
  backgroundColor: "rgb(247,247,247)",
  border: "0.909091px solid rgb(196,196,196)",
  color: "rgb(107,107,107)",
  display: "block",
  height: 50,
  padding: "12px",
  width: "100%",
  fontFamily: "Archivo, Helvetica, Arial, Lucida, sans-serif",
  fontSize: 16,
  outline: "none",
  transition: "border-color 0.3s",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  height: "auto",
  resize: "vertical",
};

export default function ContactFormSection({ content }: Props) {
  const heading = content?.heading || "SEND US A MESSAGE";
  const sideImage = content?.sideImage || "https://designs-mercury.netlify.app/images/image-12-min.jpg";
  const badgeImage = content?.badgeImage || "https://designs-mercury.netlify.app/images/image-4.png";

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    try {
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(235,235,235)", paddingBottom: 54, paddingTop: 54, width: "100%" }}>
      <div style={{ display: "flex", gap: "3%", marginLeft: "auto", marginRight: "auto", maxWidth: 1440, paddingBottom: 27, paddingTop: 27, width: "80%" }}>
        {/* Left: Form */}
        <div style={{ width: "48.5%" }}>
          <div style={{ marginBottom: "3.093%" }}>
            <h3
              className="font-archivo"
              style={{ color: "rgb(0,0,0)", fontSize: 52, lineHeight: "52px", paddingBottom: 10, wordBreak: "break-word" }}
            >
              {heading}
            </h3>
          </div>

          {submitted ? (
            <div style={{ backgroundColor: "rgb(42,110,66)", borderRadius: 10, color: "#fff", fontSize: 20, padding: "30px", textAlign: "center" }}>
              Thank you! We'll be in touch shortly.
            </div>
          ) : (
            <form
              name="contact-page"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="hp-field"
              onSubmit={handleSubmit}
              style={{ padding: 5 }}
            >
              <input type="hidden" name="form-name" value="contact-page" />

              <div style={{ marginBottom: 25 }}>
                <input type="text" name="firstName" placeholder="First Name *" required value={formData.firstName} onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ marginBottom: 25 }}>
                <input type="text" name="lastName" placeholder="Last Name *" required value={formData.lastName} onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ marginBottom: 25 }}>
                <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ marginBottom: 25 }}>
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ marginBottom: 25 }}>
                <textarea name="message" placeholder="Message *" required rows={8} value={formData.message} onChange={handleChange} style={{ ...textareaStyle, height: "auto" }} />
              </div>
              <div style={{ marginBottom: 25 }}>
                <input
                  type="submit"
                  value="SUBMIT"
                  style={{
                    backgroundColor: "rgb(94,6,14)",
                    borderRadius: 10,
                    color: "rgb(247,247,247)",
                    cursor: "pointer",
                    display: "block",
                    fontFamily: "Archivo, Helvetica, Arial, Lucida, sans-serif",
                    fontSize: 24,
                    height: 60,
                    lineHeight: "36px",
                    textAlign: "center",
                    width: "100%",
                    border: "none",
                  }}
                />
              </div>
              <div style={{ position: "absolute", visibility: "hidden" }}>
                <label htmlFor="hp-field">If you are a human seeing this field, please leave it empty.
                  <input type="text" name="hp-field" id="hp-field" style={{ visibility: "hidden" }} />
                </label>
              </div>
            </form>
          )}
        </div>

        {/* Right: Image */}
        <div
          style={{
            backgroundImage: `url("${sideImage}")`,
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 10,
            minHeight: 300,
            overflow: "hidden",
            position: "relative",
            width: "48.5%",
          }}
        >
          <div style={{ marginRight: 20, marginTop: 20, textAlign: "right" }}>
            <img
              alt="Award Badge"
              width={181}
              height={180}
              loading="lazy"
              src={badgeImage}
              style={{ aspectRatio: "181 / 180", display: "inline-block", maxWidth: "100%", verticalAlign: "middle", width: 181 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
