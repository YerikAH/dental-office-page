import { FIND_SECTION, RESERVE_SECTION } from "@/config";
import { ReserveSection } from "../reserve-section";
import s from "./index.module.css";
import { MapSection } from "@/components/sections";
import { FindSection } from "../find-section";

export const Main = () => {
  return (
    <main className={s.main}>
      <ReserveSection
        services={RESERVE_SECTION.services}
        title={RESERVE_SECTION.title}
        text={RESERVE_SECTION.text}
        form={RESERVE_SECTION.form}
      />
      <FindSection
        items={FIND_SECTION.items}
        tag={FIND_SECTION.tag}
        text={FIND_SECTION.text}
        title={FIND_SECTION.title}
      />
      <MapSection />
    </main>
  );
};
