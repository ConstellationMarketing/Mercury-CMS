import type { PracticeAreasPageContent } from "@site/lib/cms/practiceAreasPageTypes";
import { Section, ArrayEditor, ImageField, GlobalSectionInfo, RichTextField, HeadingField, Input, Label, Textarea } from "./EditorShared";

interface PracticeAreasEditorProps {
  content: PracticeAreasPageContent;
  onChange: (c: PracticeAreasPageContent) => void;
}

export default function PracticeAreasEditor({ content, onChange }: PracticeAreasEditorProps) {
  const update = <K extends keyof PracticeAreasPageContent>(key: K, value: PracticeAreasPageContent[K]) => {
    onChange({ ...content, [key]: value });
  };

  return (
    <div className="space-y-6">
      <HeroSection content={content} update={update} />
      <IntroSection content={content} update={update} />
      <CardsSection content={content} update={update} />
      <VideoSectionEditor content={content} update={update} />
      <PracticeCtaEditor content={content} update={update} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
type Updater = <K extends keyof PracticeAreasPageContent>(key: K, value: PracticeAreasPageContent[K]) => void;
type SectionProps = { content: PracticeAreasPageContent; update: Updater };

function useHeadingTag(content: PracticeAreasPageContent, update: Updater) {
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

  return (
    <Section title="Hero Section">
      <div className="grid gap-4">
        <div>
          <Label>H1 Title</Label>
          <Input value={hero.h1Title || ""} onChange={(e) => set({ h1Title: e.target.value })} placeholder="OUR PRACTICE AREAS" />
        </div>
        <div>
          <Label>Subtitle</Label>
          <Input value={hero.subtitle || ""} onChange={(e) => set({ subtitle: e.target.value })} placeholder="Comprehensive Legal Services" />
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
function IntroSection({ content, update }: SectionProps) {
  const intro = content.intro;
  const set = (patch: Partial<typeof intro>) => update("intro", { ...intro, ...patch });

  return (
    <Section title="Intro Text" defaultOpen={false}>
      <div className="grid gap-4">
        <div>
          <Label>Text</Label>
          <Textarea
            value={intro?.text || ""}
            onChange={(e) => set({ text: e.target.value })}
            rows={4}
            placeholder="With decades of experience..."
          />
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function CardsSection({ content, update }: SectionProps) {
  const cards = content.cards;
  return (
    <Section title="Practice Area Cards" defaultOpen={false}>
      <ArrayEditor
        items={cards?.areas || []}
        onChange={(areas) => update("cards", { areas })}
        itemLabel="Card"
        newItem={() => ({ iconImage: "", iconImageAlt: "", title: "", description: "", tags: "", learnMoreText: "", link: "" })}
        renderItem={(item, _, upd) => (
          <div className="grid gap-3">
            <div><Label>Title</Label><Input value={item.title} onChange={(e) => upd({ ...item, title: e.target.value })} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Learn More Text</Label><Input value={item.learnMoreText || ""} onChange={(e) => upd({ ...item, learnMoreText: e.target.value })} placeholder="Learn More →" /></div>
              <div><Label>Learn More URL</Label><Input value={item.link} onChange={(e) => upd({ ...item, link: e.target.value })} placeholder="/practice-areas/personal-injury" /></div>
            </div>
            <ImageField
              label="Icon Image (112×112)"
              value={item.iconImage}
              onChange={(url) => upd({ ...item, iconImage: url })}
              altValue={item.iconImageAlt}
              onAltChange={(iconImageAlt) => upd({ ...item, iconImageAlt })}
              folder="icons"
            />
            <RichTextField label="Description" value={item.description} onChange={(v) => upd({ ...item, description: v })} />
          </div>
        )}
      />
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function PracticeCtaEditor({ content, update }: SectionProps) {
  const pc = content.practiceCta;
  const set = (patch: Partial<typeof pc>) => update("practiceCta", { ...pc, ...patch });

  return (
    <Section title="Need Legal Assistance (CTA)" defaultOpen={false}>
      <div className="grid gap-4">
        <div><Label>Heading</Label><Input value={pc?.heading || ""} onChange={(e) => set({ heading: e.target.value })} placeholder="NEED LEGAL ASSISTANCE?" /></div>
        <div><Label>Subtitle</Label><Input value={pc?.subtitle || ""} onChange={(e) => set({ subtitle: e.target.value })} placeholder="Contact our experienced legal team today..." /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Phone (digits)</Label><Input value={pc?.phone || ""} onChange={(e) => set({ phone: e.target.value })} placeholder="4045555555" /></div>
          <div><Label>Phone Display</Label><Input value={pc?.phoneDisplay || ""} onChange={(e) => set({ phoneDisplay: e.target.value })} placeholder="404-555-5555" /></div>
        </div>
        <p className="text-xs text-gray-500 italic">Leave phone blank to use the number from Site Settings.</p>
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Button Text</Label><Input value={pc?.ctaText || ""} onChange={(e) => set({ ctaText: e.target.value })} placeholder="GET HELP NOW" /></div>
          <div><Label>Button URL</Label><Input value={pc?.ctaUrl || ""} onChange={(e) => set({ ctaUrl: e.target.value })} placeholder="/contact" /></div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function VideoSectionEditor({ content, update }: SectionProps) {
  const vs = content.videoSection;
  const set = (patch: Partial<typeof vs>) => update("videoSection", { ...vs, ...patch });

  return (
    <Section title="Video + Text Section" defaultOpen={false}>
      <div className="grid gap-4">
        <div>
          <Label>Video URL (YouTube embed)</Label>
          <Input value={vs?.videoUrl || ""} onChange={(e) => set({ videoUrl: e.target.value })} placeholder="https://www.youtube.com/embed/..." />
        </div>
        <ImageField
          label="Thumbnail Image"
          value={vs?.thumbnailImage || ""}
          onChange={(url) => set({ thumbnailImage: url })}
          folder="video-thumbnails"
        />
        <div>
          <Label>Heading</Label>
          <Input value={vs?.heading || ""} onChange={(e) => set({ heading: e.target.value })} placeholder="Experience You Can Trust" />
        </div>
        <RichTextField label="Text" value={vs?.text || ""} onChange={(v) => set({ text: v })} />
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Button Text</Label><Input value={vs?.ctaText || ""} onChange={(e) => set({ ctaText: e.target.value })} placeholder="SCHEDULE CONSULTATION" /></div>
          <div><Label>Button URL</Label><Input value={vs?.ctaUrl || ""} onChange={(e) => set({ ctaUrl: e.target.value })} placeholder="/contact" /></div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
function GridSection({ content, update }: SectionProps) {
  const grid = content.grid;
  const set = (patch: Partial<typeof grid>) => update("grid", { ...grid, ...patch });
  const ht = useHeadingTag(content, update);

  return (
    <Section title="Practice Areas Grid" defaultOpen={false}>
      <div className="grid gap-4">
        <HeadingField
          label="Heading"
          value={grid.heading}
          onChange={(v) => set({ heading: v })}
          tag={ht.get("grid.heading")}
          onTagChange={(t) => ht.set("grid.heading", t)}
        />
        <RichTextField label="Description" value={grid.description} onChange={(v) => set({ description: v })} />
        <ArrayEditor
          items={grid.areas}
          onChange={(items) => set({ areas: items })}
          itemLabel="Practice Area"
          newItem={() => ({ icon: "FileText", title: "", description: "", image: "", imageAlt: "", link: "/practice-areas" })}
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
              <ImageField
                label="Background Image"
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
                <Input value={item.imageAlt} onChange={(e) => upd({ ...item, imageAlt: e.target.value })} placeholder="Describe the background image" />
              </div>
              <div>
                <Label>Link</Label>
                <Input value={item.link} onChange={(e) => upd({ ...item, link: e.target.value })} />
              </div>
            </div>
          )}
        />
      </div>
    </Section>
  );
}
