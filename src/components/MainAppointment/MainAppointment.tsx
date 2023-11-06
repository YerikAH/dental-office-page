import s from "./MainAppointment.module.css";
import SectionAppointment from "../SectionAppointment/SectionAppointment";
import SectionFindUs from "../SectionFindUs/SectionFindUs";
import SectionMap from "../SectionMap/SectionMap.tsx";
import { FIND_US, FORM_ALL, SERVICES_APPOINTMENT } from "../../db/db.tsx";

function MainAppointment() {
  return (
    <main className={s.main}>
      <SectionAppointment
        services={SERVICES_APPOINTMENT.services}
        title={SERVICES_APPOINTMENT.title}
        text={SERVICES_APPOINTMENT.text}
        form={FORM_ALL}
      />
      <SectionFindUs
        items={FIND_US.items}
        title={FIND_US.title}
        text={FIND_US.text}
        tag={FIND_US.tag}
      />
      <SectionMap />
    </main>
  );
}
export default MainAppointment;
