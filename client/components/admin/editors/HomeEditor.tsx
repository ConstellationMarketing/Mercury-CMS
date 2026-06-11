import type { HomePageContent } from "@site/lib/cms/homePageTypes";
import { Section, ArrayEditor, ImageField, RichTextField, HeadingField, Input, Label, Textarea } from "./EditorShared";

interface HomeEditorProps {
  content: HomePageContent;
  onChange: (c: HomePageContent) => void;
}

export default function HomeEditor({ content, onChange }: HomeEditorProps) {
  const update = <K extends keyof HomePageContent>(key: K, value: HomePageContent[K]) => {
    onChange({ ...content, [key]: value });
  };

  return (
    <div className="space-y-6">
      <HeroSection content={content} update={update} />
      <StatsVideoSectionEditor content={content} update={update} />
      <PartnerLogosSection content={content} update={update} />
      <TeamSectionHeadingEditor content={content} update={update} />
      <TeamMembersSectionEditor content={content} update={update} />
      <VideoCtaSectionEditor content={content} update={update} />
      <ClientStoriesSectionEditor content={content} update={update} />
      <ContactFormSectionEditor content={content} update={update} />
      <IconPracticeAreasSectionEditor content={content} update={update} />
      <FaqSectionEditor content={content} update={update} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
type Updater = <K extends keyof HomePageContent>(key: K, value: HomePageContent[K]) => void;
type SectionProps = { content: HomePageContent; update: Updater };

function useHeadingTag(content: HomePageContent, update: Updater) {
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
          label="H1 Title"
          value={hero.h1Title}
          onChange={(v) => set({ h1Title: v })}
          tag={ht.get("hero.h1Title") === "h2" ? "h1" : ht.get("hero.h1Title")}
          onTagChange={(t) => ht.set("hero.h1Title", t)}
        />

        <h4 className="font-medium mt-2 border-t pt-3">Stat Block</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Founded Year Text</Label>
            <Input value={hero.foundedYear} onChange={(e) => set({ foundedYear: e.target.value })} placeholder="SINCE 2010" />
          </div>
          <div>
            <Label>Stat Number</Label>
            <Input value={hero.statNumber} onChange={(e) => set({ statNumber: e.target.value })} placeholder="BILLIONS" />
          </div>
        </div>
        <div>
          <Label>Stat Label</Label>
          <Input value={hero.statLabel} onChange={(e) => set({ statLabel: e.target.value })} placeholder="WON FOR OUR CLIENTS" />
        </div>
        <div>
          <Label>Tagline</Label>
          <Input value={hero.tagline} onChange={(e) => set({ tagline: e.target.value })} placeholder="JUST IN CASE®" />
        </div>

        <h4 className="font-medium mt-2 border-t pt-3">Images</h4>
        <ImageField
          label="Hero Background Image"
          value={hero.backgroundImage}
          onChange={(url) => set({ backgroundImage: url })}
          folder="backgrounds"
        />
        <ImageField
          label="Attorney Image (right column)"
          value={hero.attorneyImage}
          onChange={(url) => set({ attorneyImage: url })}
          folder="team"
        />
        <ImageField
          label="Award Badge Image"
          value={hero.awardBadgeImage}
          onChange={(url) => set({ awardBadgeImage: url })}
          altValue={hero.awardBadgeAlt}
          onAltChange={(awardBadgeAlt) => set({ awardBadgeAlt })}
          onSelectAsset={(asset) => set({ awardBadgeImage: asset.url, awardBadgeAlt: asset.suggestedAltText || hero.awardBadgeAlt })}
          folder="awards"
        />
        <div>
          <Label>Award Badge Alt Text</Label>
          <Input value={hero.awardBadgeAlt} onChange={(e) => set({ awardBadgeAlt: e.target.value })} />
        </div>

        <h4 className="font-medium mt-2 border-t pt-3">CTA Button</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Button Text</Label>
            <Input value={hero.ctaText} onChange={(e) => set({ ctaText: e.target.value })} placeholder="GET HELP NOW" />
          </div>
          <div>
            <Label>Button URL</Label>
            <Input value={hero.ctaUrl} onChange={(e) => set({ ctaUrl: e.target.value })} placeholder="/contact" />
          </div>
        </div>

        <p className="text-xs text-gray-500 italic">Phone number is managed in Site Settings &gt; Contact Info</p>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function StatsVideoSectionEditor({ content, update }: SectionProps) {
  const sv = content.statsVideo;
  const set = (patch: Partial<typeof sv>) => update("statsVideo", { ...sv, ...patch });

  return (
    <Section title="Stats / Video Section" defaultOpen={false}>
      <div className="grid gap-4">
        <h4 className="font-medium">Video Card</h4>
        <div>
          <Label>Video URL (YouTube embed)</Label>
          <Input value={sv.videoUrl} onChange={(e) => set({ videoUrl: e.target.value })} placeholder="https://www.youtube.com/embed/..." />
        </div>
        <ImageField
          label="Video Thumbnail"
          value={sv.videoThumbnail}
          onChange={(url) => set({ videoThumbnail: url })}
          folder="backgrounds"
        />

        <h4 className="font-medium mt-2 border-t pt-3">Stat Card 1</h4>
        <ImageField
          label="Background Image"
          value={sv.stat1BackgroundImage}
          onChange={(url) => set({ stat1BackgroundImage: url })}
          folder="backgrounds"
        />
        <ImageField
          label="Badge Image (e.g. 3X graphic)"
          value={sv.stat1BadgeImage}
          onChange={(url) => set({ stat1BadgeImage: url })}
          altValue={sv.stat1BadgeAlt}
          onAltChange={(stat1BadgeAlt) => set({ stat1BadgeAlt })}
          onSelectAsset={(asset) => set({ stat1BadgeImage: asset.url, stat1BadgeAlt: asset.suggestedAltText || sv.stat1BadgeAlt })}
          folder="badges"
        />
        <div>
          <Label>Badge Alt Text</Label>
          <Input value={sv.stat1BadgeAlt} onChange={(e) => set({ stat1BadgeAlt: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Headline (e.g. BIGGER PAYOUTS)</Label>
            <Input value={sv.stat1Headline} onChange={(e) => set({ stat1Headline: e.target.value })} />
          </div>
          <div>
            <Label>Subtext (e.g. WHEN YOU HIRE US)</Label>
            <Input value={sv.stat1Subtext} onChange={(e) => set({ stat1Subtext: e.target.value })} />
          </div>
        </div>
        <div>
          <Label>Founded Year Text (e.g. SINCE 2010)</Label>
          <Input value={sv.stat1FoundedYear} onChange={(e) => set({ stat1FoundedYear: e.target.value })} />
        </div>

        <h4 className="font-medium mt-2 border-t pt-3">Stat Card 2</h4>
        <ImageField
          label="Background Image"
          value={sv.stat2BackgroundImage}
          onChange={(url) => set({ stat2BackgroundImage: url })}
          folder="backgrounds"
        />
        <ImageField
          label="Badge Image (e.g. 99% graphic)"
          value={sv.stat2BadgeImage}
          onChange={(url) => set({ stat2BadgeImage: url })}
          altValue={sv.stat2BadgeAlt}
          onAltChange={(stat2BadgeAlt) => set({ stat2BadgeAlt })}
          onSelectAsset={(asset) => set({ stat2BadgeImage: asset.url, stat2BadgeAlt: asset.suggestedAltText || sv.stat2BadgeAlt })}
          folder="badges"
        />
        <div>
          <Label>Badge Alt Text</Label>
          <Input value={sv.stat2BadgeAlt} onChange={(e) => set({ stat2BadgeAlt: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Label (e.g. CLIENT)</Label>
            <Input value={sv.stat2Label} onChange={(e) => set({ stat2Label: e.target.value })} />
          </div>
          <div>
            <Label>Subtext (e.g. SATISFACTION)</Label>
            <Input value={sv.stat2Subtext} onChange={(e) => set({ stat2Subtext: e.target.value })} />
          </div>
        </div>
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
          <Label>Heading (e.g. OUR TEAM OF LAWYERS)</Label>
          <Input value={ts.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <div>
          <Label>Subtext (e.g. Meet the entire legal team)</Label>
          <Input value={ts.subtext} onChange={(e) => set({ subtext: e.target.value })} />
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function TeamMembersSectionEditor({ content, update }: SectionProps) {
  const tm = content.teamMembers;
  const setFeatured = (patch: Partial<typeof tm.featured>) =>
    update("teamMembers", { ...tm, featured: { ...tm.featured, ...patch } });

  return (
    <Section title="Team Members" defaultOpen={false}>
      <div className="grid gap-4">
        <h4 className="font-medium">Featured Attorney</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Name</Label>
            <Input value={tm.featured.name} onChange={(e) => setFeatured({ name: e.target.value })} />
          </div>
          <div>
            <Label>Role / Title</Label>
            <Input value={tm.featured.role} onChange={(e) => setFeatured({ role: e.target.value })} />
          </div>
        </div>
        <ImageField
          label="Photo"
          value={tm.featured.image}
          onChange={(url) => setFeatured({ image: url })}
          altValue={tm.featured.imageAlt || ""}
          onAltChange={(imageAlt) => setFeatured({ imageAlt })}
          onSelectAsset={(asset) => setFeatured({ image: asset.url, imageAlt: asset.suggestedAltText || tm.featured.imageAlt })}
          folder="team"
        />
        <div>
          <Label>Photo Alt Text</Label>
          <Input value={tm.featured.imageAlt || ""} onChange={(e) => setFeatured({ imageAlt: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Email</Label>
            <Input value={tm.featured.email} onChange={(e) => setFeatured({ email: e.target.value })} />
          </div>
          <div>
            <Label>Phone Display (e.g. 404-555-5555)</Label>
            <Input value={tm.featured.phoneDisplay} onChange={(e) => setFeatured({ phoneDisplay: e.target.value })} />
          </div>
        </div>
        <div>
          <Label>Phone (digits only, for tel: link)</Label>
          <Input value={tm.featured.phone} onChange={(e) => setFeatured({ phone: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Facebook URL</Label>
            <Input value={tm.featured.facebookUrl} onChange={(e) => setFeatured({ facebookUrl: e.target.value })} />
          </div>
          <div>
            <Label>Instagram URL</Label>
            <Input value={tm.featured.instagramUrl} onChange={(e) => setFeatured({ instagramUrl: e.target.value })} />
          </div>
        </div>

        <h4 className="font-medium mt-2 border-t pt-3">Team Grid (3×2)</h4>
        <ArrayEditor
          items={tm.members}
          onChange={(members) => update("teamMembers", { ...tm, members })}
          itemLabel="Member"
          newItem={() => ({ name: "", role: "", image: "", imageAlt: "" })}
          renderItem={(item, _, upd) => (
            <div className="grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Name</Label>
                  <Input value={item.name} onChange={(e) => upd({ ...item, name: e.target.value })} />
                </div>
                <div>
                  <Label>Role</Label>
                  <Input value={item.role} onChange={(e) => upd({ ...item, role: e.target.value })} />
                </div>
              </div>
              <ImageField
                label="Photo"
                value={item.image}
                onChange={(url) => upd({ ...item, image: url })}
                altValue={item.imageAlt || ""}
                onAltChange={(imageAlt) => upd({ ...item, imageAlt })}
                onSelectAsset={(asset) => upd({ ...item, image: asset.url, imageAlt: asset.suggestedAltText || item.imageAlt })}
                folder="team"
              />
              <div>
                <Label>Photo Alt Text</Label>
                <Input value={item.imageAlt || ""} onChange={(e) => upd({ ...item, imageAlt: e.target.value })} />
              </div>
            </div>
          )}
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function VideoCtaSectionEditor({ content, update }: SectionProps) {
  const vc = content.videoCta;
  const set = (patch: Partial<typeof vc>) => update("videoCta", { ...vc, ...patch });

  return (
    <Section title="Video + CTA Section" defaultOpen={false}>
      <div className="grid gap-4">
        <div>
          <Label>Video URL (YouTube embed)</Label>
          <Input value={vc.videoUrl} onChange={(e) => set({ videoUrl: e.target.value })} placeholder="https://www.youtube.com/embed/..." />
        </div>
        <ImageField
          label="Video Thumbnail"
          value={vc.videoThumbnail}
          onChange={(url) => set({ videoThumbnail: url })}
          folder="backgrounds"
        />
        <div>
          <Label>Heading</Label>
          <Input value={vc.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <div>
          <Label>Description</Label>
          <Textarea value={vc.description} onChange={(e) => set({ description: e.target.value })} rows={3} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>CTA Button Text</Label>
            <Input value={vc.ctaText} onChange={(e) => set({ ctaText: e.target.value })} />
          </div>
          <div>
            <Label>CTA Button URL</Label>
            <Input value={vc.ctaUrl} onChange={(e) => set({ ctaUrl: e.target.value })} />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function ClientStoriesSectionEditor({ content, update }: SectionProps) {
  const cs = content.clientStories;
  const set = (patch: Partial<typeof cs>) => update("clientStories", { ...cs, ...patch });

  return (
    <Section title="Client Stories Section" defaultOpen={false}>
      <div className="grid gap-4">
        <div>
          <Label>Heading</Label>
          <Input value={cs.heading} onChange={(e) => set({ heading: e.target.value })} placeholder="OUR CLIENTS HAVE REMARKABLE STORIES TO TELL" />
        </div>
        <div>
          <Label>Description</Label>
          <Textarea value={cs.description} onChange={(e) => set({ description: e.target.value })} rows={3} />
        </div>
        <h4 className="font-medium mt-2 border-t pt-3">Video Cards</h4>
        <ArrayEditor
          items={cs.videos}
          onChange={(videos) => set({ videos })}
          itemLabel="Video"
          newItem={() => ({ url: "", thumbnail: "" })}
          renderItem={(item, _, upd) => (
            <div className="grid gap-3">
              <div>
                <Label>Video URL (YouTube embed)</Label>
                <Input value={item.url} onChange={(e) => upd({ ...item, url: e.target.value })} placeholder="https://www.youtube.com/embed/..." />
              </div>
              <ImageField
                label="Thumbnail Image"
                value={item.thumbnail}
                onChange={(url) => upd({ ...item, thumbnail: url })}
                folder="backgrounds"
              />
            </div>
          )}
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function ContactFormSectionEditor({ content, update }: SectionProps) {
  const cf = content.contactFormSection;
  const set = (patch: Partial<typeof cf>) => update("contactFormSection", { ...cf, ...patch });

  return (
    <Section title="Contact Form Section (What's Your Story?)" defaultOpen={false}>
      <div className="grid gap-4">
        <div>
          <Label>Heading</Label>
          <Input value={cf.heading} onChange={(e) => set({ heading: e.target.value })} placeholder="WHAT'S YOUR STORY?" />
        </div>
        <ImageField
          label="Right Column Background Image"
          value={cf.backgroundImage}
          onChange={(url) => set({ backgroundImage: url })}
          folder="backgrounds"
        />
        <ImageField
          label="Badge Image (top-right corner)"
          value={cf.badgeImage}
          onChange={(url) => set({ badgeImage: url })}
          altValue={cf.badgeAlt}
          onAltChange={(badgeAlt) => set({ badgeAlt })}
          onSelectAsset={(asset) => set({ badgeImage: asset.url, badgeAlt: asset.suggestedAltText || cf.badgeAlt })}
          folder="awards"
        />
        <div>
          <Label>Badge Alt Text</Label>
          <Input value={cf.badgeAlt} onChange={(e) => set({ badgeAlt: e.target.value })} />
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function IconPracticeAreasSectionEditor({ content, update }: SectionProps) {
  return (
    <Section title="Practice Areas Icon Grid" defaultOpen={false}>
      <ArrayEditor
        items={content.iconPracticeAreas}
        onChange={(items) => update("iconPracticeAreas", items)}
        itemLabel="Practice Area"
        newItem={() => ({ icon: "", iconAlt: "", title: "", subPractices: [] })}
        renderItem={(item, _, upd) => (
          <div className="grid gap-3">
            <ImageField
              label="Icon (112×112)"
              value={item.icon}
              onChange={(url) => upd({ ...item, icon: url })}
              altValue={item.iconAlt || ""}
              onAltChange={(iconAlt) => upd({ ...item, iconAlt })}
              onSelectAsset={(asset) => upd({ ...item, icon: asset.url, iconAlt: asset.suggestedAltText || item.iconAlt })}
              folder="icons"
            />
            <div>
              <Label>Icon Alt Text</Label>
              <Input value={item.iconAlt || ""} onChange={(e) => upd({ ...item, iconAlt: e.target.value })} />
            </div>
            <div>
              <Label>Title</Label>
              <Input value={item.title} onChange={(e) => upd({ ...item, title: e.target.value })} />
            </div>
            <div>
              <Label>Sub-Practices (one per line)</Label>
              <Textarea
                value={(item.subPractices ?? []).join("\n")}
                onChange={(e) => upd({ ...item, subPractices: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean) })}
                rows={4}
                placeholder={"Sub-Practice 1\nSub-Practice 2\nSub-Practice 3"}
              />
            </div>
          </div>
        )}
      />
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function PartnerLogosSection({ content, update }: SectionProps) {
  return (
    <Section title="Partner Logos" defaultOpen={false}>
      <ArrayEditor
        items={content.partnerLogos}
        onChange={(items) => update("partnerLogos", items)}
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
              onSelectAsset={(asset) => upd({
                ...item,
                src: asset.url,
                alt: asset.suggestedAltText || item.alt,
              })}
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
function AboutSectionEditor({ content, update }: SectionProps) {
  const about = content.about;
  const set = (patch: Partial<typeof about>) => update("about", { ...about, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="About Section" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Section Heading"
          value={about.sectionLabel}
          onChange={(v) => set({ sectionLabel: v })}
          tag={ht.get("about.sectionLabel")}
          onTagChange={(t) => ht.set("about.sectionLabel", t)}
        />
        <div>
          <Label>Subtitle</Label>
          <Input value={about.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <RichTextField label="Description" value={about.description} onChange={(v) => set({ description: v })} />
        <p className="text-xs text-gray-500 italic">Phone number is managed in Site Settings &gt; Contact Info</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Contact Label</Label>
            <Input value={about.contactLabel} onChange={(e) => set({ contactLabel: e.target.value })} />
          </div>
          <div>
            <Label>Contact Text</Label>
            <Input value={about.contactText} onChange={(e) => set({ contactText: e.target.value })} />
          </div>
        </div>
        <ImageField
          label="Attorney Image"
          value={about.attorneyImage}
          onChange={(url) => set({ attorneyImage: url })}
          altValue={about.attorneyImageAlt}
          onAltChange={(attorneyImageAlt) => set({ attorneyImageAlt })}
          onSelectAsset={(asset) => set({
            attorneyImage: asset.url,
            attorneyImageAlt: asset.suggestedAltText || about.attorneyImageAlt,
          })}
          folder="team"
        />
        <div>
          <Label>Attorney Image Alt</Label>
          <Input value={about.attorneyImageAlt} onChange={(e) => set({ attorneyImageAlt: e.target.value })} />
        </div>

        <h4 className="font-medium mt-2">Features</h4>
        <ArrayEditor
          items={about.features}
          onChange={(items) => set({ features: items })}
          itemLabel="Feature"
          newItem={() => ({ number: String(about.features.length + 1), title: "", description: "" })}
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

        <h4 className="font-medium mt-2">Stats</h4>
        <ArrayEditor
          items={about.stats}
          onChange={(items) => set({ stats: items })}
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
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function PracticeAreasIntroSection({ content, update }: SectionProps) {
  const intro = content.practiceAreasIntro;
  const set = (patch: Partial<typeof intro>) => update("practiceAreasIntro", { ...intro, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Practice Areas Intro" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Title"
          value={intro.sectionLabel}
          onChange={(v) => set({ sectionLabel: v })}
          tag={ht.get("practiceAreasIntro.sectionLabel")}
          onTagChange={(t) => ht.set("practiceAreasIntro.sectionLabel", t)}
        />
        <div>
          <Label>Text</Label>
          <Input value={intro.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Button Text Line 1</Label>
            <Input value={intro.buttonTextLine1 || ""} onChange={(e) => set({ buttonTextLine1: e.target.value })} placeholder="Discover" />
          </div>
          <div>
            <Label>Button Text Line 2</Label>
            <Input value={intro.buttonTextLine2 || ""} onChange={(e) => set({ buttonTextLine2: e.target.value })} placeholder="All Practice Areas" />
          </div>
        </div>
        <div>
          <Label>Button Link</Label>
          <Input value={intro.buttonLink} onChange={(e) => set({ buttonLink: e.target.value })} placeholder="/practice-areas/" />
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function PracticeAreasItemsSection({ content, update }: SectionProps) {
  return (
    <Section title="Practice Areas Grid" defaultOpen={false}>
      <ArrayEditor
        items={content.practiceAreas}
        onChange={(items) => update("practiceAreas", items)}
        itemLabel="Practice Area"
        newItem={() => ({ title: "", image: "", imageAlt: "", link: "/practice-areas" })}
        renderItem={(item, _, upd) => (
          <div className="grid gap-3">
            <div>
              <Label>Title</Label>
              <Input value={item.title} onChange={(e) => upd({ ...item, title: e.target.value })} />
            </div>
            <ImageField
              label="Image"
              value={item.image}
              onChange={(url) => upd({ ...item, image: url })}
              altValue={item.imageAlt}
              onAltChange={(imageAlt) => upd({ ...item, imageAlt })}
              onSelectAsset={(asset) => upd({
                ...item,
                image: asset.url,
                imageAlt: asset.suggestedAltText || item.imageAlt,
              })}
              folder="practice-areas"
            />
            <div>
              <Label>Image Alt Text</Label>
              <Input value={item.imageAlt} onChange={(e) => upd({ ...item, imageAlt: e.target.value })} placeholder="Describe the image" />
            </div>
            <div>
              <Label>Link</Label>
              <Input value={item.link} onChange={(e) => upd({ ...item, link: e.target.value })} />
            </div>
          </div>
        )}
      />
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function AwardsSection({ content, update }: SectionProps) {
  const awards = content.awards;
  const set = (patch: Partial<typeof awards>) => update("awards", { ...awards, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Awards & Memberships" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Section Heading"
          value={awards.sectionLabel}
          onChange={(v) => set({ sectionLabel: v })}
          tag={ht.get("awards.sectionLabel")}
          onTagChange={(t) => ht.set("awards.sectionLabel", t)}
        />
        <div>
          <Label>Subtitle</Label>
          <Input value={awards.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <RichTextField label="Description" value={awards.description} onChange={(v) => set({ description: v })} />
        <h4 className="font-medium">Award Logos</h4>
        <ArrayEditor
          items={awards.logos}
          onChange={(items) => set({ logos: items })}
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
                onSelectAsset={(asset) => upd({
                  ...item,
                  src: asset.url,
                  alt: asset.suggestedAltText || item.alt,
                })}
                folder="awards"
              />
              <div>
                <Label>Alt Text</Label>
                <Input value={item.alt} onChange={(e) => upd({ ...item, alt: e.target.value })} />
              </div>
            </div>
          )}
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function TestimonialsSection({ content, update }: SectionProps) {
  const t = content.testimonials;
  const set = (patch: Partial<typeof t>) => update("testimonials", { ...t, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Testimonials" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Section Heading"
          value={t.sectionLabel}
          onChange={(v) => set({ sectionLabel: v })}
          tag={ht.get("testimonials.sectionLabel")}
          onTagChange={(t2) => ht.set("testimonials.sectionLabel", t2)}
        />
        <div>
          <Label>Subtitle</Label>
          <Input value={t.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <ImageField
          label="Background Image"
          value={t.backgroundImage}
          onChange={(url) => set({ backgroundImage: url })}
          altValue={t.backgroundImageAlt || ""}
          onAltChange={(backgroundImageAlt) => set({ backgroundImageAlt })}
          onSelectAsset={(asset) => set({
            backgroundImage: asset.url,
            backgroundImageAlt: asset.suggestedAltText || t.backgroundImageAlt || "",
          })}
          folder="backgrounds"
        />
        <div>
          <Label>Background Image Alt Text</Label>
          <Input value={t.backgroundImageAlt || ""} onChange={(e) => set({ backgroundImageAlt: e.target.value })} placeholder="Describe the background image" />
        </div>
        <ArrayEditor
          items={t.items}
          onChange={(items) => set({ items })}
          itemLabel="Testimonial"
          newItem={() => ({ text: "", author: "", ratingImage: "", ratingImageAlt: "" })}
          renderItem={(item, _, upd) => (
            <div className="grid gap-3">
              <div>
                <Label>Author</Label>
                <Input value={item.author} onChange={(e) => upd({ ...item, author: e.target.value })} />
              </div>
              <RichTextField label="Text" value={item.text} onChange={(v) => upd({ ...item, text: v })} />
              <ImageField
                label="Rating Image"
                value={item.ratingImage}
                onChange={(url) => upd({ ...item, ratingImage: url })}
                altValue={item.ratingImageAlt || ""}
                onAltChange={(ratingImageAlt) => upd({ ...item, ratingImageAlt })}
                onSelectAsset={(asset) => upd({
                  ...item,
                  ratingImage: asset.url,
                  ratingImageAlt: asset.suggestedAltText || item.ratingImageAlt || "",
                })}
                folder="logos"
              />
              <div>
                <Label>Rating Image Alt Text</Label>
                <Input value={item.ratingImageAlt || ""} onChange={(e) => upd({ ...item, ratingImageAlt: e.target.value })} placeholder="e.g. 5 star rating" />
              </div>
            </div>
          )}
        />
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
          <Label>Subtitle Line 1</Label>
          <Input value={p.headingLine1} onChange={(e) => set({ headingLine1: e.target.value })} />
        </div>
        <div>
          <Label>Subtitle Line 2</Label>
          <Input value={p.headingLine2} onChange={(e) => set({ headingLine2: e.target.value })} />
        </div>
        <ArrayEditor
          items={p.steps}
          onChange={(items) => set({ steps: items })}
          itemLabel="Step"
          newItem={() => ({ number: "", title: "", description: "" })}
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
function GoogleReviewsSection({ content, update }: SectionProps) {
  const r = content.googleReviews;
  const set = (patch: Partial<typeof r>) => update("googleReviews", { ...r, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Google Reviews" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Section Heading"
          value={r.sectionLabel}
          onChange={(v) => set({ sectionLabel: v })}
          tag={ht.get("googleReviews.sectionLabel")}
          onTagChange={(t) => ht.set("googleReviews.sectionLabel", t)}
        />
        <div>
          <Label>Subtitle</Label>
          <Input value={r.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <RichTextField label="Description" value={r.description} onChange={(v) => set({ description: v })} />
        <ArrayEditor
          items={r.reviews}
          onChange={(items) => set({ reviews: items })}
          itemLabel="Review"
          newItem={() => ({ text: "", author: "", ratingImage: "", ratingImageAlt: "" })}
          renderItem={(item, _, upd) => (
            <div className="grid gap-3">
              <div>
                <Label>Author</Label>
                <Input value={item.author} onChange={(e) => upd({ ...item, author: e.target.value })} />
              </div>
              <RichTextField label="Review Text" value={item.text} onChange={(v) => upd({ ...item, text: v })} />
              <ImageField
                label="Rating Image"
                value={item.ratingImage}
                onChange={(url) => upd({ ...item, ratingImage: url })}
                altValue={item.ratingImageAlt || ""}
                onAltChange={(ratingImageAlt) => upd({ ...item, ratingImageAlt })}
                onSelectAsset={(asset) => upd({
                  ...item,
                  ratingImage: asset.url,
                  ratingImageAlt: asset.suggestedAltText || item.ratingImageAlt || "",
                })}
                folder="logos"
              />
              <div>
                <Label>Rating Image Alt Text</Label>
                <Input value={item.ratingImageAlt || ""} onChange={(e) => upd({ ...item, ratingImageAlt: e.target.value })} placeholder="e.g. 5 star rating" />
              </div>
            </div>
          )}
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function FaqSectionEditor({ content, update }: SectionProps) {
  const faq = content.faq;
  const set = (patch: Partial<typeof faq>) => update("faq", { ...faq, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="FAQ Section" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Heading"
          value={faq.heading}
          onChange={(v) => set({ heading: v })}
          tag={ht.get("faq.heading")}
          onTagChange={(t) => ht.set("faq.heading", t)}
        />
        <RichTextField label="Description" value={faq.description} onChange={(v) => set({ description: v })} />
        <ImageField
          label="Video Thumbnail"
          value={faq.videoThumbnail}
          onChange={(url) => set({ videoThumbnail: url })}
          altValue={faq.videoThumbnailAlt || ""}
          onAltChange={(videoThumbnailAlt) => set({ videoThumbnailAlt })}
          onSelectAsset={(asset) => set({
            videoThumbnail: asset.url,
            videoThumbnailAlt: asset.suggestedAltText || faq.videoThumbnailAlt || "",
          })}
          folder="backgrounds"
        />
        <div>
          <Label>Video Thumbnail Alt Text</Label>
          <Input value={faq.videoThumbnailAlt || ""} onChange={(e) => set({ videoThumbnailAlt: e.target.value })} placeholder="Describe the thumbnail image" />
        </div>
        <div>
          <Label>Video URL</Label>
          <Input value={faq.videoUrl} onChange={(e) => set({ videoUrl: e.target.value })} />
        </div>
        <ArrayEditor
          items={faq.items}
          onChange={(items) => set({ items })}
          itemLabel="FAQ"
          newItem={() => ({ question: "", answer: "" })}
          renderItem={(item, _, upd) => (
            <div className="grid gap-3">
              <div>
                <Label>Question</Label>
                <Input value={item.question} onChange={(e) => upd({ ...item, question: e.target.value })} />
              </div>
              <RichTextField label="Answer" value={item.answer} onChange={(v) => upd({ ...item, answer: v })} />
            </div>
          )}
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function ContactSectionEditor({ content, update }: SectionProps) {
  const c = content.contact;
  const set = (patch: Partial<typeof c>) => update("contact", { ...c, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Contact Section" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Section Heading"
          value={c.sectionLabel}
          onChange={(v) => set({ sectionLabel: v })}
          tag={ht.get("contact.sectionLabel")}
          onTagChange={(t) => ht.set("contact.sectionLabel", t)}
        />
        <div>
          <Label>Subtitle</Label>
          <Input value={c.heading} onChange={(e) => set({ heading: e.target.value })} />
        </div>
        <RichTextField label="Description" value={c.description} onChange={(v) => set({ description: v })} />
        <ImageField
          label="Section Image"
          value={c.image}
          onChange={(url) => set({ image: url })}
          altValue={c.imageAlt}
          onAltChange={(imageAlt) => set({ imageAlt })}
          onSelectAsset={(asset) => set({
            image: asset.url,
            imageAlt: asset.suggestedAltText || c.imageAlt,
          })}
          folder="team"
        />
        <div>
          <Label>Image Alt Text</Label>
          <Input value={c.imageAlt} onChange={(e) => set({ imageAlt: e.target.value })} placeholder="Describe the image" />
        </div>
        <ImageField
          label="Background Image"
          value={c.backgroundImage || ""}
          onChange={(url) => set({ backgroundImage: url })}
          altValue={c.backgroundImageAlt || ""}
          onAltChange={(backgroundImageAlt) => set({ backgroundImageAlt })}
          onSelectAsset={(asset) => set({
            backgroundImage: asset.url,
            backgroundImageAlt: asset.suggestedAltText || c.backgroundImageAlt || "",
          })}
          folder="backgrounds"
        />
        <div>
          <Label>Background Image Alt Text</Label>
          <Input value={c.backgroundImageAlt || ""} onChange={(e) => set({ backgroundImageAlt: e.target.value })} placeholder="Describe the background image" />
        </div>
        <p className="text-xs text-gray-500 italic">Phone and address are managed in Site Settings &gt; Contact Info</p>
        <div>
          <Label>Form Heading</Label>
          <Input value={c.formHeading} onChange={(e) => set({ formHeading: e.target.value })} />
        </div>
        <div>
          <Label>Availability Text</Label>
          <Input value={c.availabilityText || ""} onChange={(e) => set({ availabilityText: e.target.value })} placeholder="Our intake team is available 24 hours a day, seven days a week" />
        </div>
      </div>
    </Section>
  );
}
