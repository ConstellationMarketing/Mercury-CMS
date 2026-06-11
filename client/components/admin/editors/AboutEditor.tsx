import type { AboutPageContent } from "@site/lib/cms/aboutPageTypes";
import { Section, ArrayEditor, ImageField, RichTextField, HeadingField, Input, Label, Textarea } from "./EditorShared";

interface AboutEditorProps {
  content: AboutPageContent;
  onChange: (c: AboutPageContent) => void;
}

export default function AboutEditor({ content, onChange }: AboutEditorProps) {
  const update = <K extends keyof AboutPageContent>(key: K, value: AboutPageContent[K]) => {
    onChange({ ...content, [key]: value });
  };

  return (
    <div className="space-y-6">
      <HeroSection content={content} update={update} />
      <StorySection content={content} update={update} />
      <TeamSectionHeadingEditor content={content} update={update} />
      <AboutTeamMembersEditor content={content} update={update} />
      <PartnerLogosEditor content={content} update={update} />
      <AboutTestimonialsEditor content={content} update={update} />
      <ReadyCTAEditor content={content} update={update} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
type Updater = <K extends keyof AboutPageContent>(key: K, value: AboutPageContent[K]) => void;
type SectionProps = { content: AboutPageContent; update: Updater };

function useHeadingTag(content: AboutPageContent, update: Updater) {
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
        <div>
          <Label>H1 Title</Label>
          <Input value={hero.h1Title || ""} onChange={(e) => set({ h1Title: e.target.value })} placeholder="ABOUT US" />
        </div>
        <div>
          <Label>Subtitle</Label>
          <Input value={hero.subtitle || ""} onChange={(e) => set({ subtitle: e.target.value })} placeholder="Serving Atlanta Since 2010" />
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

/* ------------------------------------------------------------------ */
function TeamSectionHeadingEditor({ content, update }: SectionProps) {
  const ts = content.teamSection;
  const set = (patch: Partial<typeof ts>) => update("teamSection", { ...ts, ...patch });

  return (
    <Section title="Team Section Heading" defaultOpen={false}>
      <div className="grid gap-4">
        <div>
          <Label>Heading</Label>
          <Input value={ts?.heading || ""} onChange={(e) => set({ heading: e.target.value })} placeholder="OUR TEAM OF LAWYERS" />
        </div>
        <div>
          <Label>Subtext</Label>
          <Input value={ts?.subtext || ""} onChange={(e) => set({ subtext: e.target.value })} placeholder="Meet the entire legal team" />
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function AboutTeamMembersEditor({ content, update }: SectionProps) {
  const tm = content.teamMembers;
  const setFeatured = (patch: Partial<typeof tm.featured>) =>
    update("teamMembers", { ...tm, featured: { ...tm.featured, ...patch } });

  return (
    <Section title="Team Members" defaultOpen={false}>
      <div className="grid gap-4">
        <h4 className="font-medium">Featured Attorney</h4>
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Name</Label><Input value={tm.featured.name} onChange={(e) => setFeatured({ name: e.target.value })} /></div>
          <div><Label>Role</Label><Input value={tm.featured.role} onChange={(e) => setFeatured({ role: e.target.value })} placeholder="LAWYER AND FOUNDER" /></div>
        </div>
        <ImageField label="Photo" value={tm.featured.image} onChange={(url) => setFeatured({ image: url })} altValue={tm.featured.imageAlt || ""} onAltChange={(imageAlt) => setFeatured({ imageAlt })} onSelectAsset={(a) => setFeatured({ image: a.url, imageAlt: a.suggestedAltText || tm.featured.imageAlt })} folder="team" />
        <div><Label>Bio</Label><Textarea value={tm.featured.bio || ""} onChange={(e) => setFeatured({ bio: e.target.value })} rows={3} /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Email</Label><Input value={tm.featured.email} onChange={(e) => setFeatured({ email: e.target.value })} /></div>
          <div><Label>Phone Display</Label><Input value={tm.featured.phoneDisplay} onChange={(e) => setFeatured({ phoneDisplay: e.target.value })} placeholder="404-555-5555" /></div>
        </div>
        <div><Label>Phone (digits for tel: link)</Label><Input value={tm.featured.phone} onChange={(e) => setFeatured({ phone: e.target.value })} /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Facebook URL</Label><Input value={tm.featured.facebookUrl} onChange={(e) => setFeatured({ facebookUrl: e.target.value })} /></div>
          <div><Label>Instagram URL</Label><Input value={tm.featured.instagramUrl} onChange={(e) => setFeatured({ instagramUrl: e.target.value })} /></div>
        </div>

        <h4 className="font-medium mt-2 border-t pt-3">Team Grid (3 columns)</h4>
        <ArrayEditor
          items={tm.members}
          onChange={(members) => update("teamMembers", { ...tm, members })}
          itemLabel="Member"
          newItem={() => ({ name: "", role: "", image: "", imageAlt: "", bio: "" })}
          renderItem={(item, _, upd) => (
            <div className="grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Name</Label><Input value={item.name} onChange={(e) => upd({ ...item, name: e.target.value })} /></div>
                <div><Label>Role</Label><Input value={item.role} onChange={(e) => upd({ ...item, role: e.target.value })} placeholder="ATTORNEY" /></div>
              </div>
              <ImageField label="Photo" value={item.image} onChange={(url) => upd({ ...item, image: url })} altValue={item.imageAlt || ""} onAltChange={(imageAlt) => upd({ ...item, imageAlt })} onSelectAsset={(a) => upd({ ...item, image: a.url, imageAlt: a.suggestedAltText || item.imageAlt })} folder="team" />
              <div><Label>Bio</Label><Textarea value={item.bio || ""} onChange={(e) => upd({ ...item, bio: e.target.value })} rows={2} /></div>
            </div>
          )}
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function StorySection({ content, update }: SectionProps) {
  const story = content.story;
  const set = (patch: Partial<typeof story>) => update("story", { ...story, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Our Story" defaultOpen={false}>
      <div className="grid gap-4">
        <div>
          <Label>Heading</Label>
          <Input value={story.heading} onChange={(e) => set({ heading: e.target.value })} placeholder="Our Story" />
        </div>
        <h4 className="font-medium mt-2">Paragraphs</h4>
        <ArrayEditor
          items={story.paragraphs.map((text, i) => ({ id: String(i), text }))}
          onChange={(items) => set({ paragraphs: items.map((it) => it.text) })}
          itemLabel="Paragraph"
          newItem={() => ({ id: String(Date.now()), text: "" })}
          renderItem={(item, _, upd) => (
            <RichTextField label="" value={item.text} onChange={(v) => upd({ ...item, text: v })} />
          )}
        />
        <h4 className="font-medium mt-2 border-t pt-3">CTA Button</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Button Text</Label>
            <Input value={story.ctaText || ""} onChange={(e) => set({ ctaText: e.target.value })} placeholder="GET HELP NOW" />
          </div>
          <div>
            <Label>Button URL</Label>
            <Input value={story.ctaUrl || ""} onChange={(e) => set({ ctaUrl: e.target.value })} placeholder="/contact" />
          </div>
        </div>
        <h4 className="font-medium mt-2 border-t pt-3">Image</h4>
        <ImageField
          label="Story Image"
          value={story.image}
          onChange={(url) => set({ image: url })}
          altValue={story.imageAlt}
          onAltChange={(imageAlt) => set({ imageAlt })}
          onSelectAsset={(asset) => set({
            image: asset.url,
            imageAlt: asset.suggestedAltText || story.imageAlt,
          })}
          folder="team"
        />
        <div>
          <Label>Image Alt Text</Label>
          <Input value={story.imageAlt} onChange={(e) => set({ imageAlt: e.target.value })} />
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function PartnerLogosEditor({ content, update }: SectionProps) {
  const pl = content.partnerLogos;
  return (
    <Section title="Partner Logos / Awards Bar" defaultOpen={false}>
      <ArrayEditor
        items={pl.logos}
        onChange={(logos) => update("partnerLogos", { logos })}
        itemLabel="Logo"
        newItem={() => ({ src: "", alt: "" })}
        renderItem={(item, _, upd) => (
          <div className="grid gap-3">
            <ImageField
              label="Logo Image"
              value={item.src}
              onChange={(url) => upd({ ...item, src: url })}
              altValue={item.alt}
              onAltChange={(alt) => upd({ ...item, alt })}
              folder="logos"
            />
            <div>
              <Label>Alt Text</Label>
              <Input value={item.alt} onChange={(e) => upd({ ...item, alt: e.target.value })} />
            </div>
          </div>
        )}
      />
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function AboutTestimonialsEditor({ content, update }: SectionProps) {
  const at = content.aboutTestimonials;
  const set = (patch: Partial<typeof at>) => update("aboutTestimonials", { ...at, ...patch });

  return (
    <Section title="Client Testimonials" defaultOpen={false}>
      <div className="grid gap-4">
        <div>
          <Label>Heading</Label>
          <Input value={at.heading} onChange={(e) => set({ heading: e.target.value })} placeholder="WHAT OUR CLIENTS SAY" />
        </div>
        <div>
          <Label>Subtitle</Label>
          <Input value={at.subtitle} onChange={(e) => set({ subtitle: e.target.value })} placeholder="Real stories from real clients..." />
        </div>
        <ArrayEditor
          items={at.testimonials}
          onChange={(testimonials) => set({ testimonials })}
          itemLabel="Testimonial"
          newItem={() => ({ quote: "", name: "", role: "" })}
          renderItem={(item, _, upd) => (
            <div className="grid gap-3">
              <div>
                <Label>Quote</Label>
                <Textarea value={item.quote} onChange={(e) => upd({ ...item, quote: e.target.value })} rows={3} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Name</Label><Input value={item.name} onChange={(e) => upd({ ...item, name: e.target.value })} /></div>
                <div><Label>Role / Case Type</Label><Input value={item.role} onChange={(e) => upd({ ...item, role: e.target.value })} /></div>
              </div>
            </div>
          )}
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function ReadyCTAEditor({ content, update }: SectionProps) {
  const rc = content.readyCta;
  const set = (patch: Partial<typeof rc>) => update("readyCta", { ...rc, ...patch });

  return (
    <Section title="Ready to Get Started (CTA)" defaultOpen={false}>
      <div className="grid gap-4">
        <div>
          <Label>Heading</Label>
          <Input value={rc.heading} onChange={(e) => set({ heading: e.target.value })} placeholder="READY TO GET STARTED?" />
        </div>
        <div>
          <Label>Subtitle</Label>
          <Input value={rc.subtitle} onChange={(e) => set({ subtitle: e.target.value })} placeholder="Contact us today for a free consultation..." />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Phone (digits, for tel: link)</Label>
            <Input value={rc.phone} onChange={(e) => set({ phone: e.target.value })} placeholder="4045555555" />
          </div>
          <div>
            <Label>Phone Display</Label>
            <Input value={rc.phoneDisplay} onChange={(e) => set({ phoneDisplay: e.target.value })} placeholder="404-555-5555" />
          </div>
        </div>
        <p className="text-xs text-gray-500 italic">Leave phone blank to use the number from Site Settings.</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Button Text</Label>
            <Input value={rc.ctaText} onChange={(e) => set({ ctaText: e.target.value })} placeholder="GET HELP NOW" />
          </div>
          <div>
            <Label>Button URL</Label>
            <Input value={rc.ctaUrl} onChange={(e) => set({ ctaUrl: e.target.value })} placeholder="/contact" />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function MissionVisionSection({ content, update }: SectionProps) {
  const mv = content.missionVision;
  const set = (patch: Partial<typeof mv>) => update("missionVision", { ...mv, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Mission & Vision" defaultOpen={false}>
      <div className="grid gap-4">
        <h4 className="font-medium">Mission</h4>
        <HeadingField
          label="Heading"
          value={mv.mission.heading}
          onChange={(v) => set({ mission: { ...mv.mission, heading: v } })}
          tag={ht.get("mission.heading")}
          onTagChange={(t) => ht.set("mission.heading", t)}
        />
        <RichTextField label="Text" value={mv.mission.text} onChange={(v) => set({ mission: { ...mv.mission, text: v } })} />
        <hr />
        <h4 className="font-medium">Vision</h4>
        <HeadingField
          label="Heading"
          value={mv.vision.heading}
          onChange={(v) => set({ vision: { ...mv.vision, heading: v } })}
          tag={ht.get("vision.heading")}
          onTagChange={(t) => ht.set("vision.heading", t)}
        />
        <RichTextField label="Text" value={mv.vision.text} onChange={(v) => set({ vision: { ...mv.vision, text: v } })} />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function TeamSection({ content, update }: SectionProps) {
  const team = content.team;
  const set = (patch: Partial<typeof team>) => update("team", { ...team, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Team Members" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Section Heading"
          value={team.sectionLabel}
          onChange={(v) => set({ sectionLabel: v })}
          tag={ht.get("team.sectionLabel")}
          onTagChange={(t) => ht.set("team.sectionLabel", t)}
        />
        <div>
          <Label>Subtitle</Label>
          <Input value={team.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <ArrayEditor
          items={team.members}
          onChange={(items) => set({ members: items })}
          itemLabel="Member"
          newItem={() => ({ name: "", title: "", bio: "", image: "", imageAlt: "", specialties: [] })}
          renderItem={(item, _, upd) => (
            <div className="grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Name</Label>
                  <Input value={item.name} onChange={(e) => upd({ ...item, name: e.target.value })} />
                </div>
                <div>
                  <Label>Title</Label>
                  <Input value={item.title} onChange={(e) => upd({ ...item, title: e.target.value })} />
                </div>
              </div>
              <RichTextField label="Bio" value={item.bio} onChange={(v) => upd({ ...item, bio: v })} />
              <ImageField
                label="Photo"
                value={item.image}
                onChange={(url) => upd({ ...item, image: url })}
                altValue={item.imageAlt}
                onAltChange={(imageAlt) => upd({ ...item, imageAlt })}
                onSelectAsset={(asset) => upd({
                  ...item,
                  image: asset.url,
                  imageAlt: asset.suggestedAltText || item.imageAlt,
                })}
                folder="team"
              />
              <div>
                <Label>Photo Alt Text</Label>
                <Input value={item.imageAlt} onChange={(e) => upd({ ...item, imageAlt: e.target.value })} placeholder="Describe the photo" />
              </div>
              <div>
                <Label>Specialties (comma-separated)</Label>
                <Input
                  value={item.specialties.join(", ")}
                  onChange={(e) => upd({ ...item, specialties: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
                />
              </div>
            </div>
          )}
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function ValuesSection({ content, update }: SectionProps) {
  const values = content.values;
  const set = (patch: Partial<typeof values>) => update("values", { ...values, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Our Values" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Section Heading"
          value={values.sectionLabel}
          onChange={(v) => set({ sectionLabel: v })}
          tag={ht.get("values.sectionLabel")}
          onTagChange={(t) => ht.set("values.sectionLabel", t)}
        />
        <div>
          <Label>Subtitle</Label>
          <Input value={values.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <div>
          <Label>Description</Label>
          <Input value={values.subtitle} onChange={(e) => set({ subtitle: e.target.value })} />
        </div>
        <ArrayEditor
          items={values.items}
          onChange={(items) => set({ items })}
          itemLabel="Value"
          newItem={() => ({ icon: "Star", title: "", description: "" })}
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
              <RichTextField label="Description" value={item.description} onChange={(v) => upd({ ...item, description: v })} />
            </div>
          )}
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function StatsSection({ content, update }: SectionProps) {
  return (
    <Section title="Stats" defaultOpen={false}>
      <ArrayEditor
        items={content.stats.stats}
        onChange={(items) => update("stats", { stats: items })}
        itemLabel="Stat"
        newItem={() => ({ value: "", label: "" })}
        renderItem={(item, _, upd) => (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Value</Label>
              <Input value={item.value} onChange={(e) => upd({ ...item, value: e.target.value })} />
            </div>
            <div>
              <Label>Label</Label>
              <Input value={item.label} onChange={(e) => upd({ ...item, label: e.target.value })} />
            </div>
          </div>
        )}
      />
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function WhyChooseUsSection({ content, update }: SectionProps) {
  const wcu = content.whyChooseUs;
  const set = (patch: Partial<typeof wcu>) => update("whyChooseUs", { ...wcu, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Why Choose Us" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Section Heading"
          value={wcu.sectionLabel}
          onChange={(v) => set({ sectionLabel: v })}
          tag={ht.get("whyChooseUs.sectionLabel")}
          onTagChange={(t) => ht.set("whyChooseUs.sectionLabel", t)}
        />
        <div>
          <Label>Subtitle</Label>
          <Input value={wcu.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <RichTextField label="Description" value={wcu.description} onChange={(v) => set({ description: v })} />
        <ImageField
          label="Section Image"
          value={wcu.image}
          onChange={(url) => set({ image: url })}
          altValue={wcu.imageAlt}
          onAltChange={(imageAlt) => set({ imageAlt })}
          onSelectAsset={(asset) => set({
            image: asset.url,
            imageAlt: asset.suggestedAltText || wcu.imageAlt,
          })}
          folder="about"
        />
        <div>
          <Label>Image Alt Text</Label>
          <Input value={wcu.imageAlt} onChange={(e) => set({ imageAlt: e.target.value })} />
        </div>
        <ArrayEditor
          items={wcu.items}
          onChange={(items) => set({ items })}
          itemLabel="Item"
          newItem={() => ({ number: String(wcu.items.length + 1), title: "", description: "" })}
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
function CTASection({ content, update }: SectionProps) {
  const cta = content.cta;
  const set = (patch: Partial<typeof cta>) => update("cta", { ...cta, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Call to Action" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Heading"
          value={cta.heading}
          onChange={(v) => set({ heading: v })}
          tag={ht.get("cta.heading")}
          onTagChange={(t) => ht.set("cta.heading", t)}
        />
        <RichTextField label="Description" value={cta.description} onChange={(v) => set({ description: v })} />
        <p className="text-xs text-gray-500 italic">Phone number is managed in Site Settings &gt; Contact Info</p>
        <hr />
        <h4 className="font-medium">Secondary Button</h4>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label>Label</Label>
            <Input value={cta.secondaryButton.label} onChange={(e) => set({ secondaryButton: { ...cta.secondaryButton, label: e.target.value } })} />
          </div>
          <div>
            <Label>Sublabel</Label>
            <Input value={cta.secondaryButton.sublabel} onChange={(e) => set({ secondaryButton: { ...cta.secondaryButton, sublabel: e.target.value } })} />
          </div>
          <div>
            <Label>Link</Label>
            <Input value={cta.secondaryButton.link} onChange={(e) => set({ secondaryButton: { ...cta.secondaryButton, link: e.target.value } })} />
          </div>
        </div>
      </div>
    </Section>
  );
}
