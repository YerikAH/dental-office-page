import { PRINCIPAL_SERVICES_SECTION, SERVICE_SECTION } from "@/config";
import {
  DiscountSection,
  PrincipalServicesSection,
  PromotionSection,
} from "..";
import s from "./index.module.css";
import { ServiceSection } from "@/components/sections";

export const Main = () => {
  return (
    <main className={s.main}>
      <DiscountSection />
      <PromotionSection />
      <PrincipalServicesSection
        title={PRINCIPAL_SERVICES_SECTION.title}
        text={PRINCIPAL_SERVICES_SECTION.text}
        cards={PRINCIPAL_SERVICES_SECTION.cards}
      />
      <ServiceSection
        items={SERVICE_SECTION.items}
        text={SERVICE_SECTION.text}
        title={SERVICE_SECTION.title}
      />
    </main>
  );
};
