import type { PracticeAreaHeroContent } from "@site/lib/cms/practiceAreaPageTypes";
import RichText from "@site/components/shared/RichText";

interface PracticeAreaHeroProps {
  content: PracticeAreaHeroContent;
}

export default function PracticeAreaHero({ content }: PracticeAreaHeroProps) {
  return (
    <div className="pt-[30px] md:pt-[54px] pb-[30px] md:pb-[54px] relative z-10">
      <div className="max-w-[2560px] mx-auto w-[95%] md:w-[90%]">
        <div>
            <h1 className="font-outfit text-[18px] md:text-[24px] leading-tight md:leading-[36px] text-brand-accent mb-[10px]">
              {content.sectionLabel}
            </h1>

            <p className="font-playfair text-[clamp(2.5rem,7vw,68.8px)] font-light leading-[1.2] text-white mb-[20px] md:mb-[30px]">
              {content.tagline}
            </p>

            <RichText
              html={content.description}
              className="font-outfit text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-white/90"
            />
        </div>
      </div>
    </div>
  );
}
