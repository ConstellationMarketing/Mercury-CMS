import type { ContactPageContent } from "@site/lib/cms/contactPageTypes";
import { Section, ArrayEditor, GlobalSectionInfo, RichTextField, HeadingField, Input, Label, Textarea, ImageField } from "./EditorShared";

interface ContactEditorProps {
  content: ContactPageContent;
  onChange: (c: ContactPageContent) => void;
}

export default function ContactEditor({ content, onChange }: ContactEditorProps) {
  const update = <K extends keyof ContactPageContent>(key: K, value: ContactPageContent[K]) => {
    onChange({ ...content, [key]: value });
  };

  return (
    <div className="space-y-6">
      <ContactHeroEditor content={content} update={update} />
      <ContactInfoEditor content={content} update={update} />
      <ContactFormEditor content={content} update={update} />
      <OfficeHoursSectionEditor content={content} update={update} />
      <MapSectionEditor content={content} update={update} />
      <ContactCtaEditor content={content} update={update} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
type Updater = <K extends keyof ContactPageContent>(key: K, value: ContactPageContent[K]) => void;
type SectionProps = { content: ContactPageContent; update: Updater };

/* ------------------------------------------------------------------ */
function ContactFormEditor({ content, update }: SectionProps) {
  const cf = content.contactForm;
  const set = (patch: Partial<typeof cf>) => update("contactForm", { ...cf, ...patch });
  return (
    <Section title="Contact Form Section" defaultOpen={false}>
      <div className="grid gap-4">
        <div><Label>Heading</Label><Input value={cf?.heading || ""} onChange={(e) => set({ heading: e.target.value })} placeholder="SEND US A MESSAGE" /></div>
        <ImageField label="Side Image" value={cf?.sideImage || ""} onChange={(url) => set({ sideImage: url })} folder="contact" />
        <ImageField label="Badge Image" value={cf?.badgeImage || ""} onChange={(url) => set({ badgeImage: url })} folder="badges" />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function OfficeHoursSectionEditor({ content, update }: SectionProps) {
  const oh = content.officeHoursSection;
  const set = (patch: Partial<typeof oh>) => update("officeHoursSection", { ...oh, ...patch });
  return (
    <Section title="Office Hours" defaultOpen={false}>
      <div className="grid gap-4">
        <div><Label>Heading</Label><Input value={oh?.heading || ""} onChange={(e) => set({ heading: e.target.value })} placeholder="OFFICE HOURS" /></div>
        <ArrayEditor
          items={oh?.rows || []}
          onChange={(rows) => set({ rows })}
          itemLabel="Row"
          newItem={() => ({ day: "", hours: "" })}
          renderItem={(item, _, upd) => (
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Day / Period</Label><Input value={item.day} onChange={(e) => upd({ ...item, day: e.target.value })} placeholder="Monday - Friday" /></div>
              <div><Label>Hours</Label><Input value={item.hours} onChange={(e) => upd({ ...item, hours: e.target.value })} placeholder="9:00 AM - 6:00 PM" /></div>
            </div>
          )}
        />
        <div><Label>Note</Label><Input value={oh?.note || ""} onChange={(e) => set({ note: e.target.value })} placeholder="Appointments available by request" /></div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function ContactCtaEditor({ content, update }: SectionProps) {
  const cc = content.contactCta;
  const set = (patch: Partial<typeof cc>) => update("contactCta", { ...cc, ...patch });
  return (
    <Section title="Available 24/7 (CTA)" defaultOpen={false}>
      <div className="grid gap-4">
        <div><Label>Heading</Label><Input value={cc?.heading || ""} onChange={(e) => set({ heading: e.target.value })} placeholder="AVAILABLE 24/7" /></div>
        <div><Label>Subtitle</Label><Input value={cc?.subtitle || ""} onChange={(e) => set({ subtitle: e.target.value })} placeholder="Don't wait. Call us now..." /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Phone (digits)</Label><Input value={cc?.phone || ""} onChange={(e) => set({ phone: e.target.value })} placeholder="4045555555" /></div>
          <div><Label>Phone Display</Label><Input value={cc?.phoneDisplay || ""} onChange={(e) => set({ phoneDisplay: e.target.value })} placeholder="404-555-5555" /></div>
        </div>
        <p className="text-xs text-gray-500 italic">Leave phone blank to use the number from Site Settings.</p>
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Button Text</Label><Input value={cc?.ctaText || ""} onChange={(e) => set({ ctaText: e.target.value })} placeholder="GET HELP NOW" /></div>
          <div><Label>Button URL</Label><Input value={cc?.ctaUrl || ""} onChange={(e) => set({ ctaUrl: e.target.value })} placeholder="/contact" /></div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function MapSectionEditor({ content, update }: SectionProps) {
  const ms = content.mapSection;
  const set = (patch: Partial<typeof ms>) => update("mapSection", { ...ms, ...patch });
  return (
    <Section title="Map Section" defaultOpen={false}>
      <div className="grid gap-4">
        <div>
          <Label>Google Maps Embed URL</Label>
          <Input value={ms?.mapEmbedUrl || ""} onChange={(e) => set({ mapEmbedUrl: e.target.value })} placeholder="https://www.google.com/maps/embed?pb=..." />
        </div>
        <p className="text-xs text-gray-500 italic">Leave blank to use the URL from Site Settings.</p>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function ContactInfoEditor({ content, update }: SectionProps) {
  const ci = content.contactInfo;
  const set = (patch: Partial<typeof ci>) => update("contactInfo", { ...ci, ...patch });
  return (
    <Section title="Contact Info (Phone / Email / Address)" defaultOpen={false}>
      <div className="grid gap-4">
        <h4 className="font-medium">Phone</h4>
        <ImageField label="Phone Icon" value={ci?.phoneIcon || ""} onChange={(url) => set({ phoneIcon: url })} folder="icons" />
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Phone (digits)</Label><Input value={ci?.phone || ""} onChange={(e) => set({ phone: e.target.value })} placeholder="4045555555" /></div>
          <div><Label>Phone Display</Label><Input value={ci?.phoneDisplay || ""} onChange={(e) => set({ phoneDisplay: e.target.value })} placeholder="404-555-5555" /></div>
        </div>
        <div><Label>Phone Label</Label><Input value={ci?.phoneLabel || ""} onChange={(e) => set({ phoneLabel: e.target.value })} placeholder="Available 24/7" /></div>
        <p className="text-xs text-gray-500 italic">Leave phone blank to use the number from Site Settings.</p>
        <hr />
        <h4 className="font-medium">Email</h4>
        <ImageField label="Email Icon" value={ci?.emailIcon || ""} onChange={(url) => set({ emailIcon: url })} folder="icons" />
        <div><Label>Email Address</Label><Input value={ci?.email || ""} onChange={(e) => set({ email: e.target.value })} placeholder="info@constellationlaw.com" /></div>
        <div><Label>Email Label</Label><Input value={ci?.emailLabel || ""} onChange={(e) => set({ emailLabel: e.target.value })} placeholder="We respond within 24 hours" /></div>
        <hr />
        <h4 className="font-medium">Address</h4>
        <ImageField label="Address Icon" value={ci?.addressIcon || ""} onChange={(url) => set({ addressIcon: url })} folder="icons" />
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Address Line 1</Label><Input value={ci?.addressLine1 || ""} onChange={(e) => set({ addressLine1: e.target.value })} placeholder="PO Box 170027" /></div>
          <div><Label>Address Line 2</Label><Input value={ci?.addressLine2 || ""} onChange={(e) => set({ addressLine2: e.target.value })} placeholder="Atlanta, GA 30317-9998" /></div>
        </div>
        <div><Label>Address Label</Label><Input value={ci?.addressLabel || ""} onChange={(e) => set({ addressLabel: e.target.value })} placeholder="Main Office" /></div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function ContactHeroEditor({ content, update }: SectionProps) {
  const hero = content.hero;
  const set = (patch: Partial<typeof hero>) => update("hero", { ...hero, ...patch });
  return (
    <Section title="Hero Section">
      <div className="grid gap-4">
        <div>
          <Label>H1 Title</Label>
          <Input value={hero.h1Title || ""} onChange={(e) => set({ h1Title: e.target.value })} placeholder="GET IN TOUCH" />
        </div>
        <div>
          <Label>Subtitle</Label>
          <Input value={hero.subtitle || ""} onChange={(e) => set({ subtitle: e.target.value })} placeholder="We're Here to Help 24/7" />
        </div>
        <ImageField
          label="Background Image"
          value={hero.backgroundImage || ""}
          onChange={(url) => set({ backgroundImage: url })}
          folder="backgrounds"
        />
      </div>
    </Section>
  );
}

function useHeadingTag(content: ContactPageContent, update: Updater) {
  return {
    get: (key: string) => content.headingTags?.[key] ?? "h2",
    set: (key: string, tag: string) =>
      update("headingTags", { ...content.headingTags, [key]: tag }),
  };
}

/* ------------------------------------------------------------------ */
function HeroSection({ content, update }: SectionProps) {
  const hero = content.hero;
  const set = (patch: Partial<typeof hero>) => update("hero", { ...hero, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Hero Section">
      <div className="grid gap-4">
        <HeadingField
          label="Section Heading"
          value={hero.sectionLabel}
          onChange={(v) => set({ sectionLabel: v })}
          tag={content.headingTags?.["hero.sectionLabel"] ?? "h1"}
          onTagChange={(t) => ht.set("hero.sectionLabel", t)}
        />
        <div>
          <Label>Tagline</Label>
          <Input value={hero.tagline} onChange={(e) => set({ tagline: e.target.value })} />
        </div>
        <RichTextField label="Description" value={hero.description} onChange={(v) => set({ description: v })} />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function ContactMethodsSection({ content, update }: SectionProps) {
  return (
    <Section title="Contact Methods" defaultOpen={false}>
      <ArrayEditor
        items={content.contactMethods.methods}
        onChange={(items) => update("contactMethods", { methods: items })}
        itemLabel="Method"
        newItem={() => ({ icon: "Phone", title: "", detail: "", subDetail: "" })}
        renderItem={(item, _, upd) => (
          <div className="grid gap-3">
            <div className="grid grid-cols-4 gap-3">
              <div>
                <Label>Icon</Label>
                <Input value={item.icon} onChange={(e) => upd({ ...item, icon: e.target.value })} placeholder="Lucide icon name" />
              </div>
              <div className="col-span-3">
                <Label>Title</Label>
                <Input value={item.title} onChange={(e) => upd({ ...item, title: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Detail</Label>
                <Input value={item.detail} onChange={(e) => upd({ ...item, detail: e.target.value })} />
              </div>
              <div>
                <Label>Sub-Detail</Label>
                <Input value={item.subDetail} onChange={(e) => upd({ ...item, subDetail: e.target.value })} />
              </div>
            </div>
          </div>
        )}
      />
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function FormSection({ content, update }: SectionProps) {
  const form = content.form;
  const set = (patch: Partial<typeof form>) => update("form", { ...form, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Contact Form" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Heading"
          value={form.heading}
          onChange={(v) => set({ heading: v })}
          tag={ht.get("form.heading")}
          onTagChange={(t) => ht.set("form.heading", t)}
        />
        <RichTextField label="Subtext" value={form.subtext} onChange={(v) => set({ subtext: v })} />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function OfficeHoursSection({ content, update }: SectionProps) {
  const oh = content.officeHours;
  const set = (patch: Partial<typeof oh>) => update("officeHours", { ...oh, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Office Hours" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Heading"
          value={oh.heading}
          onChange={(v) => set({ heading: v })}
          tag={ht.get("officeHours.heading")}
          onTagChange={(t) => ht.set("officeHours.heading", t)}
        />
        <ArrayEditor
          items={oh.items}
          onChange={(items) => set({ items })}
          itemLabel="Schedule"
          newItem={() => ({ day: "", hours: "" })}
          renderItem={(item, _, upd) => (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Day</Label>
                <Input value={item.day} onChange={(e) => upd({ ...item, day: e.target.value })} />
              </div>
              <div>
                <Label>Hours</Label>
                <Input value={item.hours} onChange={(e) => upd({ ...item, hours: e.target.value })} />
              </div>
            </div>
          )}
        />
        <div>
          <Label>Note</Label>
          <Textarea value={oh.note} onChange={(e) => set({ note: e.target.value })} rows={2} />
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function ProcessSection({ content, update }: SectionProps) {
  const p = content.process;
  const set = (patch: Partial<typeof p>) => update("process", { ...p, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Process Steps" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Section Heading"
          value={p.sectionLabel}
          onChange={(v) => set({ sectionLabel: v })}
          tag={ht.get("process.sectionLabel")}
          onTagChange={(t) => ht.set("process.sectionLabel", t)}
        />
        <div>
          <Label>Subtitle</Label>
          <Input value={p.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <div>
          <Label>Subtitle</Label>
          <Input value={p.subtitle} onChange={(e) => set({ subtitle: e.target.value })} />
        </div>
        <ArrayEditor
          items={p.steps}
          onChange={(items) => set({ steps: items })}
          itemLabel="Step"
          newItem={() => ({ number: String(p.steps.length + 1), title: "", description: "" })}
          renderItem={(item, _, upd) => (
            <div className="grid gap-3">
              <div className="grid grid-cols-4 gap-3">
                <div>
                  <Label>Number</Label>
                  <Input value={item.number} onChange={(e) => upd({ ...item, number: e.target.value })} />
                </div>
                <div className="col-span-3">
                  <Label>Title</Label>
                  <Input value={item.title} onChange={(e) => upd({ ...item, title: e.target.value })} />
                </div>
              </div>
              <RichTextField label="Description" value={item.description} onChange={(v) => upd({ ...item, description: v })} />
            </div>
          )}
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function VisitOfficeSection({ content, update }: SectionProps) {
  const vo = content.visitOffice;
  const set = (patch: Partial<typeof vo>) => update("visitOffice", { ...vo, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Visit Our Office" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Heading"
          value={vo.heading}
          onChange={(v) => set({ heading: v })}
          tag={ht.get("visitOffice.heading")}
          onTagChange={(t) => ht.set("visitOffice.heading", t)}
        />
        <RichTextField label="Subtext" value={vo.subtext} onChange={(v) => set({ subtext: v })} />
        <div>
          <Label>Google Maps Embed URL</Label>
          <Input value={vo.mapEmbedUrl} onChange={(e) => set({ mapEmbedUrl: e.target.value })} placeholder="https://www.google.com/maps/embed?..." />
        </div>
      </div>
    </Section>
  );
}
