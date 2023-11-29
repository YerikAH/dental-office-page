import s from "./MainAppointment.module.css";
import SectionAppointment from "../SectionAppointment/SectionAppointment";
import SectionFindUs from "../SectionFindUs/SectionFindUs";
import SectionMap from "../SectionMap/SectionMap.tsx";
import { SECTION_APPOINTMENT } from "../../db/SectionAppointment/index.tsx";
import { SECTION_FINDUS } from "../../db/SectionFindUs/index.tsx";

function MainAppointment() {
  return (
    <main className={s.main}>
      <SectionAppointment
        services={SECTION_APPOINTMENT.services}
        title={SECTION_APPOINTMENT.title}
        text={SECTION_APPOINTMENT.text}
        form={SECTION_APPOINTMENT.form}
      />
      <SectionFindUs
        items={SECTION_FINDUS.items}
        title={SECTION_FINDUS.title}
        text={SECTION_FINDUS.text}
        tag={SECTION_FINDUS.tag}
      />
      <SectionMap />
    </main>
  );
}
export default MainAppointment;
