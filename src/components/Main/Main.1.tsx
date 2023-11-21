import SectionIntro from "../SectionIntro/SectionIntro";
import SectionWhyChoice from "../SectionWhyChoice/SectionWhyChoice";
import doctor from "../../assets/doctor.png";
import SectionOurDoctors from "../SectionOurDoctors/SectionOurDoctors";
import SectionService from "../SectionService/SectionService";
import SectionQA from "../SectionQA/SectionQA";
import SectionOurClient from "../SectionOurClient/SectionOurClient";
import s from "./Main.module.css";
import SectionBestResults from "../SectionBestResults/SectionBestResults";
import SectionContact from "../SectionContact/SectionContact";
import {
  CONTACT,
  IMAGES_INTRO,
  ITEMS_DOCTORS,
  ITEMS_INFO,
  ITEMS_INTRO,
} from "../../db/db";

export function Main() {
  return (
    <main className={s.main}>
      <SectionIntro images={IMAGES_INTRO} items={ITEMS_INTRO} speed={10000} />
      <SectionWhyChoice image={doctor} info={ITEMS_INFO} />
      <SectionOurDoctors
        doctors={ITEMS_DOCTORS}
        title="Conoce a nuestros dentistas"
      />
      <SectionService
        title={SERVICE.title}
        text={SERVICE.text}
        items={SERVICE.items}
      />
      <SectionBestResults
        title={BEST.title}
        text={BEST.text}
        images={BEST.images}
      />
      <SectionContact
        title={CONTACT.title}
        text={CONTACT.text}
        inputs={CONTACT.inputs}
      />
      <SectionQA title={QA.title} text={QA.text} items={QA.items} />
      <SectionOurClient
        title={OPINIONS.title}
        text={OPINIONS.text}
        items={OPINIONS.items}
      />
    </main>
  );
}
