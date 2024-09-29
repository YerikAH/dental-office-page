import { CONTACT_INFO_SECTION, SUPPORT_SECTION } from "@/config";
import { ContactInfoSection, SupportSection } from "..";
import s from "./index.module.css";
import { MapSection } from "@/components/sections";

export const Main = () => {
  return (
    <main className={s.main}>
      <ContactInfoSection
        inputs={CONTACT_INFO_SECTION.inputs}
        title={CONTACT_INFO_SECTION.title}
        text={CONTACT_INFO_SECTION.text}
        address={CONTACT_INFO_SECTION.address}
        contacts={CONTACT_INFO_SECTION.contacts}
      />
      <SupportSection
        email={SUPPORT_SECTION.email}
        phoneNumber={SUPPORT_SECTION.phoneNumber}
        text={SUPPORT_SECTION.text}
        title={SUPPORT_SECTION.title}
      />
      <MapSection />
    </main>
  );
};
