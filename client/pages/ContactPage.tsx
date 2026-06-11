import Seo from "@site/components/Seo";
import Layout from "@site/components/layout/Layout";
import ContactForm from "@site/components/home/ContactForm";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { useContactContent } from "@site/hooks/useContactContent";
import ContactInfoSection from "@site/components/contact/ContactInfoSection";
import ContactFormSection from "@site/components/contact/ContactFormSection";
import ContactOfficeHoursSection from "@site/components/contact/ContactOfficeHoursSection";
import { useGlobalPhone, useSiteSettings } from "@site/contexts/SiteSettingsContext";
import RichText from "@site/components/shared/RichText";
import DynamicHeading from "@site/components/shared/DynamicHeading";
import { Loader2 } from "lucide-react";

// Icon mapping for contact methods
const iconMap: Record<string, LucideIcon> = {
  Phone,
  Mail,
  MapPin,
  Clock,
};

export default function ContactPage() {
  const { content, meta, title, publishedAt, updatedAt, isLoading } = useContactContent();
  const { phoneNumber, phoneDisplay, phoneLabel } = useGlobalPhone();
  const { settings } = useSiteSettings();

  // Map contact methods from CMS content with icon components
  const contactMethods = content.contactMethods.methods.map((method) => {
    let detail = method.detail;
    let subDetail = method.subDetail;

    // Fallback to Site Settings when CMS fields are empty
    if (method.title === "Phone" && !detail) {
      detail = phoneDisplay;
    }
    if (method.title === "Office") {
      if (!detail) detail = settings.addressLine1 || "";
      if (!subDetail) subDetail = settings.addressLine2 || "";
    }

    return {
      icon: iconMap[method.icon] || Phone,
      title: method.title,
      detail,
      subdDetail: subDetail,
    };
  });

  // Map office hours from CMS content
  const officeHours = content.officeHours.items;

  // Map process steps from CMS content
  const whatToExpect = content.process.steps;

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-brand-accent" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo
        title={title || "Contact Us"}
        meta={meta}
        pageContent={content}
        publishedTime={publishedAt}
        updatedTime={updatedAt}
      />

      {/* Hero Section */}
      <div style={{ backgroundColor: "rgb(255,255,255)", paddingTop: 24, paddingBottom: 24, paddingLeft: 32, paddingRight: 32, width: "100%" }}>
        <div
          style={{
            backgroundImage: `url("${content.hero.backgroundImage || "https://designs-mercury.netlify.app/images/image-7-min.jpg"}")`,
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 10,
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "98%",
            overflow: "hidden",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: 2560,
              paddingBottom: 120,
              paddingTop: 120,
              width: "80%",
            }}
          >
            <div style={{ textAlign: "center", width: "100%" }}>
              <div style={{ marginBottom: 20, textAlign: "center" }}>
                <h1
                  className="font-archivo font-bold uppercase"
                  style={{ color: "rgb(255,255,255)", fontSize: "102.451px", lineHeight: "102.451px", wordBreak: "break-word" }}
                >
                  {content.hero.h1Title || "GET IN TOUCH"}
                </h1>
              </div>
              <div style={{ marginBottom: "3.093%", textAlign: "center" }}>
                <p
                  className="font-archivo uppercase"
                  style={{ color: "rgb(255,255,255)", fontSize: 36, lineHeight: "54px" }}
                >
                  {content.hero.subtitle || "We're Here to Help 24/7"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <ContactInfoSection
        content={content.contactInfo}
        globalPhone={phoneNumber}
        globalPhoneDisplay={phoneDisplay}
      />

      {/* Contact Form Section */}
      <ContactFormSection content={content.contactForm} />

      {/* Office Hours Section */}
      <ContactOfficeHoursSection content={content.officeHoursSection} />

      {/* Map Section */}
      {(() => {
        const raw = content.mapSection?.mapEmbedUrl || settings.mapEmbedUrl || "";
        const mapSrc = raw.startsWith("<") ? (raw.match(/src="([^"]+)"/) || [])[1] || "" : raw;
        if (!mapSrc) return null;
        return (
          <div style={{ backgroundColor: "rgb(255,255,255)", paddingBottom: 54, paddingTop: 54, width: "100%" }}>
            <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 2560, width: "90%" }}>
              <div style={{ borderRadius: 10, overflow: "hidden" }}>
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Atlanta Location Map"
                  style={{ borderRadius: 10, display: "block", height: 450, width: "100%" }}
                />
              </div>
            </div>
          </div>
        );
      })()}

    </Layout>
  );
}
