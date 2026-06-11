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





    </Layout>
  );
}
