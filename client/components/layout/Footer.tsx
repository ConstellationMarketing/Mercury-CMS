import React from "react";
import { Link } from "react-router-dom";
import { useSiteSettings } from "@site/contexts/SiteSettingsContext";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="rgb(42,110,66)" style={{ width: 20, height: 20 }}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="rgb(42,110,66)" style={{ width: 20, height: 20 }}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: 24, height: 24 }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="rgb(42, 110, 66)" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: 24, height: 24 }}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="rgb(42, 110, 66)" />
  </svg>
);

const DEFAULT_ABOUT_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Staff", href: "/about" },
  { label: "Locations", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Referrals", href: "/referrals" },
  { label: "Contact", href: "/contact" },
];

const DEFAULT_PRACTICE_LINKS = [
  { label: "Practice Area", href: "/practice-areas" },
  { label: "Practice Area", href: "/practice-areas" },
  { label: "Practice Area", href: "/practice-areas" },
  { label: "Practice Area", href: "/practice-areas" },
  { label: "Practice Area", href: "/practice-areas" },
  { label: "Practice Area", href: "/practice-areas" },
];

export default function Footer() {
  const { settings } = useSiteSettings();

  const siteName = settings.siteName?.trim() || "Constellation Law";
  const phoneNumber = settings.phoneNumber?.trim() || "4045555555";
  const phoneDisplay = settings.phoneDisplay?.trim() || "404-555-5555";
  const rawMapEmbed = settings.mapEmbedUrl?.trim() || "";
  const mapEmbedUrl = rawMapEmbed.startsWith("<")
    ? (rawMapEmbed.match(/src="([^"]+)"/) || [])[1] || ""
    : rawMapEmbed;
  const address = settings.address?.trim() || "PO Box 170027 Atlanta, GA 30317-9998";

  const copyrightRaw = settings.copyrightText?.trim() || `Copyright © 2017-${new Date().getFullYear()} | ${siteName} | All Rights Reserved`;
  const copyrightText = copyrightRaw.replace(/\{year\}/gi, String(new Date().getFullYear()));

  const aboutLinks =
    (settings.footerAboutLinks ?? []).length > 0
      ? settings.footerAboutLinks!
      : DEFAULT_ABOUT_LINKS;

  const practiceLinks =
    (settings.footerPracticeLinks ?? []).length > 0
      ? settings.footerPracticeLinks!
      : DEFAULT_PRACTICE_LINKS;

  const socialLinks = (settings.socialLinks ?? []).filter((s) => s.enabled);
  const facebookLink = socialLinks.find((s) => s.platform === "facebook")?.url || "#";
  const instagramLink = socialLinks.find((s) => s.platform === "instagram")?.url || "#";

  return (
    <footer style={{ backgroundColor: "rgb(19, 71, 36)", paddingBottom: 30, paddingTop: 30, width: "100%" }}>
      {/* Main content row */}
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 2560,
          paddingBottom: 30,
          paddingTop: 30,
          width: "90%",
        }}
      >
        <div style={{ display: "flex", gap: "3%" }}>
          {/* Column 1: About */}
          <div style={{ width: "22.75%" }}>
            <h3
              style={{
                color: "rgb(255,255,255)",
                fontFamily: "Archivo, Helvetica, Arial, Lucida, sans-serif",
                fontSize: 32,
                lineHeight: "32px",
                paddingBottom: 10,
                wordBreak: "break-word",
              }}
            >
              About
            </h3>
            <p
              style={{
                color: "rgb(255,255,255)",
                fontFamily: "Archivo, Helvetica, Arial, Lucida, sans-serif",
                fontSize: 18,
                fontWeight: 300,
                lineHeight: "36px",
                wordBreak: "break-word",
              }}
            >
              {aboutLinks.map((link, i) => (
                <React.Fragment key={i}>
                  <Link
                    to={link.href || "#"}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                  {i < aboutLinks.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Column 2: Practice Areas */}
          <div style={{ width: "22.75%" }}>
            <h3
              style={{
                color: "rgb(255,255,255)",
                fontFamily: "Archivo, Helvetica, Arial, Lucida, sans-serif",
                fontSize: 32,
                lineHeight: "32px",
                paddingBottom: 10,
                wordBreak: "break-word",
              }}
            >
              Practice Areas
            </h3>
            <p
              style={{
                color: "rgb(255,255,255)",
                fontFamily: "Archivo, Helvetica, Arial, Lucida, sans-serif",
                fontSize: 18,
                fontWeight: 300,
                lineHeight: "36px",
                wordBreak: "break-word",
              }}
            >
              {practiceLinks.map((link, i) => (
                <React.Fragment key={i}>
                  <Link
                    to={link.href || "/practice-areas"}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                  {i < practiceLinks.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Column 3: Info card */}
          <div
            style={{
              backgroundColor: "rgb(255,255,255)",
              border: "3.636px solid rgb(210,168,78)",
              borderRadius: 10,
              overflow: "hidden",
              padding: 20,
              width: "22.75%",
            }}
          >
            {/* Firm name */}
            <div style={{ marginBottom: "6.593%" }}>
              <h3
                style={{
                  color: "rgb(60,60,60)",
                  fontFamily: "Archivo, Helvetica, Arial, Lucida, sans-serif",
                  fontSize: 32,
                  lineHeight: "32px",
                  paddingBottom: 10,
                  wordBreak: "break-word",
                }}
              >
                {siteName}
              </h3>
            </div>

            {/* Address */}
            <div style={{ marginBottom: 10 }}>
              <div style={{ alignItems: "flex-start", display: "flex" }}>
                <div style={{ width: 32, flexShrink: 0 }}>
                  <PinIcon />
                </div>
                <div style={{ paddingLeft: 15 }}>
                  <h4
                    style={{
                      color: "rgb(28,28,28)",
                      fontFamily: "Archivo, Helvetica, Arial, Lucida, sans-serif",
                      fontSize: 24,
                      lineHeight: "26.4px",
                      paddingBottom: 10,
                      wordBreak: "break-word",
                    }}
                  >
                    {address}
                  </h4>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div>
              <div style={{ alignItems: "flex-start", display: "flex" }}>
                <div style={{ width: 32, flexShrink: 0 }}>
                  <PhoneIcon />
                </div>
                <div style={{ paddingLeft: 15 }}>
                  <a
                    href={`tel:${phoneNumber.replace(/\D/g, "")}`}
                    style={{
                      color: "rgb(28,28,28)",
                      fontFamily: "Archivo, Helvetica, Arial, Lucida, sans-serif",
                      fontSize: 24,
                      lineHeight: "16.8px",
                      paddingBottom: 10,
                      textDecoration: "none",
                      display: "inline",
                      wordBreak: "break-word",
                    }}
                  >
                    {phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div style={{ marginBottom: "6.593%", marginTop: 30 }}>
              <h3
                style={{
                  color: "rgb(60,60,60)",
                  fontFamily: "Archivo, Helvetica, Arial, Lucida, sans-serif",
                  fontSize: 24,
                  paddingBottom: 10,
                  wordBreak: "break-word",
                }}
              >
                FOLLOW US:
              </h3>
            </div>

            {/* Social icons */}
            <ul style={{ alignItems: "center", display: "flex", gap: 8, marginTop: -15, listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow on Facebook"
                  style={{
                    alignItems: "center",
                    backgroundColor: "rgb(255,255,255)",
                    border: "1.818px solid rgb(42,110,66)",
                    borderRadius: 3,
                    display: "inline-flex",
                    height: 44,
                    justifyContent: "center",
                    width: 44,
                    transition: "all 0.3s",
                  }}
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow on Instagram"
                  style={{
                    alignItems: "center",
                    backgroundColor: "rgb(255,255,255)",
                    border: "1.818px solid rgb(42,110,66)",
                    borderRadius: 3,
                    display: "inline-flex",
                    height: 44,
                    justifyContent: "center",
                    width: 44,
                    transition: "all 0.3s",
                  }}
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div style={{ width: "22.75%" }}>
            <div style={{ borderRadius: 10, overflow: "hidden" }}>
              {mapEmbedUrl ? (
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height={235}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Atlanta Location Map"
                  style={{ display: "block", width: "100%", height: 235, borderRadius: 10 }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: 235,
                    borderRadius: 10,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        style={{
          backgroundColor: "rgb(7, 64, 25)",
          paddingBottom: 10,
          paddingTop: 10,
          width: "100%",
        }}
      >
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 2560,
            width: "90%",
          }}
        >
          <p
            style={{
              color: "rgb(255,255,255)",
              fontFamily: "Archivo, Helvetica, Arial, Lucida, sans-serif",
              fontSize: 18,
              fontWeight: 300,
              lineHeight: "36px",
              textAlign: "center",
              wordBreak: "break-word",
            }}
          >
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}
