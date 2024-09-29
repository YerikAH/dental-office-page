import s from "./index.module.css";
import {
  HERO_SECTION,
  WHY_SECTION,
  DOCTORS_SECTION,
  QA_SECTION,
  SERVICE_SECTION,
  BEST_RESULT_SECTION,
  TESTIMONIAL_SECTION,
} from "@/config";
import {
  WhySection,
  HeroSection,
  QaSection,
  ContactSection,
  BestResultsSection,
  TestimonialsSection,
} from "..";
import { CONTACT_SECTION } from "@/config/ContactSection";
import { DoctorsSection, ServiceSection } from "@/components/sections";

export const Main = () => {
  return (
    <main className={s.main}>
      <HeroSection
        images={HERO_SECTION.images_intro}
        items={HERO_SECTION.items_intro}
        speed={10000}
      />
      <WhySection image={WHY_SECTION.image} info={WHY_SECTION} />
      <DoctorsSection
        doctors={DOCTORS_SECTION.doctors}
        title={DOCTORS_SECTION.title}
      />
      <ServiceSection
        items={SERVICE_SECTION.items}
        text={SERVICE_SECTION.text}
        title={SERVICE_SECTION.title}
      />
      <BestResultsSection
        title={BEST_RESULT_SECTION.title}
        text={BEST_RESULT_SECTION.text}
        images={BEST_RESULT_SECTION.images}
      />
      <ContactSection
        title={CONTACT_SECTION.title}
        text={CONTACT_SECTION.text}
        inputs={CONTACT_SECTION.inputs}
      />
      <QaSection
        title={QA_SECTION.title}
        text={QA_SECTION.text}
        items={QA_SECTION.items}
      />
      <TestimonialsSection
        items={TESTIMONIAL_SECTION.items}
        text={TESTIMONIAL_SECTION.text}
        title={TESTIMONIAL_SECTION.title}
      />
    </main>
  );
};
