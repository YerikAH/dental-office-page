import {
  ValuesSection,
  AboutSection,
  WelcomeSection,
  StatsSection,
  CtaSection,
} from "..";
import {
  DOCTORS_SECTION,
  VALUES_SECTION,
  WELCOME_SECTION,
  ABOUT_SECTION,
  STATS_SECTION,
  CTA_SECTION,
} from "@/config";
import { DoctorsSection } from "@/components/sections";
export const Main = () => {
  return (
    <>
      <AboutSection
        image={ABOUT_SECTION.image}
        points={ABOUT_SECTION.points}
        text={ABOUT_SECTION.text}
        title={ABOUT_SECTION.title}
      />
      <WelcomeSection
        img={WELCOME_SECTION.img}
        title={WELCOME_SECTION.title}
        text={WELCOME_SECTION.text}
        button={WELCOME_SECTION.button}
      />
      <ValuesSection
        image={VALUES_SECTION.image}
        items={VALUES_SECTION.values}
      />
      <DoctorsSection
        doctors={DOCTORS_SECTION.doctors}
        title={DOCTORS_SECTION.title}
      />
      <StatsSection items={STATS_SECTION} />
      <CtaSection
        image={CTA_SECTION.image}
        logo={CTA_SECTION.logo}
        slogan={CTA_SECTION.slogan}
        text={CTA_SECTION.text}
        title={CTA_SECTION.title}
      />
    </>
  );
};
