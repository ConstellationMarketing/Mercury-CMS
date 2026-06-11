import type { BlogHeroData } from "@site/lib/cms/publicLoaders";

interface BlogHeroProps {
  hero: BlogHeroData;
}

export default function BlogHero({ hero }: BlogHeroProps) {
  const sectionLabel = hero.title;
  const tagline = hero.subtitle;

  return (
    <div className="bg-brand-dark pt-[30px] md:pt-[54px] pb-[30px] md:pb-[54px]">
      <div className="max-w-[2560px] mx-auto w-[95%] md:w-[90%]">
        <div>
          <h1 className="font-outfit text-[18px] md:text-[24px] leading-tight md:leading-[36px] text-brand-accent mb-[10px]">
            {sectionLabel}
          </h1>
          <p className="font-playfair text-[clamp(2.5rem,7vw,68.8px)] font-light leading-[1.2] text-white mb-[20px] md:mb-[30px]">
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
