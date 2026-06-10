import { useState } from "react";
import type { ContactFormSectionContent } from "@site/lib/cms/homePageTypes";

const inputStyle: React.CSSProperties = {
  backgroundColor: "rgb(247,247,247)",
  border: "0.909091px solid rgb(196,196,196)",
  color: "rgb(107,107,107)",
  display: "inline-block",
  height: "50px",
  padding: "12px",
  transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
  width: "100%",
};

interface ContactFormSectionProps {
  content: ContactFormSectionContent;
}

export default function ContactFormSection({ content }: ContactFormSectionProps) {
  const heading = content.heading || "WHAT'S YOUR STORY?";
  const bgImage = content.backgroundImage || "https://designs-mercury.netlify.app/images/image-12-min.jpg";
  const badgeImage = content.badgeImage || "https://designs-mercury.netlify.app/images/image-4.png";
  const badgeAlt = content.badgeAlt || "Award Badge";

  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    "hp-field": "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/", { method: "POST", body: data });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  }

  return (
    <div className="w-full" style={{ backgroundColor: "rgb(235,235,235)", paddingTop: "54px", paddingBottom: "54px" }}>
      <div
        className="flex mx-auto"
        style={{ maxWidth: "1440px", width: "80%", paddingTop: "27px", paddingBottom: "27px", gap: "3%" }}
      >
        {/* Left — Form */}
        <div style={{ width: "48.5%" }}>
          <div style={{ marginBottom: "3.093%" }}>
            <h3
              className="font-archivo"
              style={{ color: "rgb(0,0,0)", fontSize: "52px", lineHeight: "52px", paddingBottom: "10px" }}
            >
              {heading}
            </h3>
          </div>

          {submitted ? (
            <p className="font-archivo text-black" style={{ fontSize: "20px" }}>
              Thank you! We'll be in touch soon.
            </p>
          ) : (
            <form
              name="contact-story"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="hp-field"
              onSubmit={handleSubmit}
              style={{ padding: "5px" }}
            >
              <input type="hidden" name="form-name" value="contact-story" />

              <div style={{ marginBottom: "25px" }}>
                <input type="text" name="firstName" placeholder="First Name *" required value={fields.firstName} onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <input type="text" name="lastName" placeholder="Last Name *" required value={fields.lastName} onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <input type="email" name="email" placeholder="Email Address *" required value={fields.email} onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <input type="tel" name="phone" placeholder="Phone Number" value={fields.phone} onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <textarea
                  name="message"
                  placeholder="Message *"
                  required
                  rows={8}
                  value={fields.message}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "rgb(247,247,247)",
                    border: "0.909091px solid rgb(196,196,196)",
                    color: "rgb(107,107,107)",
                    display: "inline-block",
                    padding: "12px",
                    resize: "vertical",
                    transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                    width: "100%",
                  }}
                />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <button
                  type="submit"
                  className="font-archivo hover:opacity-90 transition-opacity duration-500 cursor-pointer"
                  style={{
                    backgroundColor: "rgb(94,6,14)",
                    borderRadius: "10px",
                    color: "rgb(247,247,247)",
                    display: "inline-block",
                    fontSize: "24px",
                    height: "60px",
                    lineHeight: "36px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  SUBMIT
                </button>
              </div>

              {/* Honeypot */}
              <div style={{ position: "absolute", visibility: "hidden" }}>
                <label htmlFor="hp-field">
                  If you are a human seeing this field, please leave it empty.
                  <input type="text" name="hp-field" value={fields["hp-field"]} onChange={handleChange} style={{ visibility: "hidden" }} />
                </label>
              </div>
            </form>
          )}
        </div>

        {/* Right — Background image with badge */}
        <div
          style={{
            backgroundImage: `url("${bgImage}")`,
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            minHeight: "300px",
            overflow: "hidden",
            position: "relative",
            width: "48.5%",
          }}
        >
          <div style={{ marginRight: "20px", marginTop: "20px", textAlign: "right" }}>
            {badgeImage && (
              <img
                alt={badgeAlt}
                width={181}
                height={180}
                loading="lazy"
                src={badgeImage}
                style={{ aspectRatio: "181/180", display: "inline-block", maxWidth: "100%", verticalAlign: "middle", width: "181px" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
