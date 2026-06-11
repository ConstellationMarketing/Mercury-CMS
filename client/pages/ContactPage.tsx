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





      {/* Map Section */}
      <div className="bg-brand-dark py-[40px] md:py-[60px]">
        <div className="max-w-[2560px] mx-auto w-[95%] md:w-[90%]">
          <div className="text-center mb-[30px] md:mb-[40px]">
            <h2 className="font-playfair text-[32px] md:text-[48px] leading-tight text-white pb-[10px]">
              {content.visitOffice.heading}
            </h2>
            {content.visitOffice.subtext && (
              <RichText
                html={content.visitOffice.subtext}
                className="font-outfit text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white/80"
              />
            )}
          </div>

          {(() => {
            const raw = content.visitOffice.mapEmbedUrl || settings.mapEmbedUrl || "";
            const mapSrc = raw.startsWith("<")
              ? (raw.match(/src="([^"]+)"/) || [])[1] || ""
              : raw;
            return mapSrc ? (
              <div className="bg-brand-card border border-brand-border p-[20px] md:p-[30px]">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[350px] md:h-[450px]"
                  title="Office Location"
                ></iframe>
              </div>
            ) : null;
          })()}
        </div>
      </div>
    </Layout>
  );
}
