import s from "./Main.module.css";
import SectionIntro from "../SectionIntro/SectionIntro";
import SectionWhyChoice from "../SectionWhyChoice/SectionWhyChoice";
import SectionOurDoctors from "../SectionOurDoctors/SectionOurDoctors";
import SectionService from "../SectionService/SectionService";
import SectionQA from "../SectionQA/SectionQA";
import SectionOurClient from "../SectionOurClient/SectionOurClient";
import SectionBestResults from "../SectionBestResults/SectionBestResults";
import SectionContact from "../SectionContact/SectionContact";

import {
  BEST,
  CONTACT,
  IMAGES_INTRO,
  ITEMS_DOCTORS,
  ITEMS_INFO,
  ITEMS_INTRO,
  OPINIONS,
  QA,
  SERVICES,
} from "../../db/db";

function Main() {
  return (
    <main className={s.main}>
      <SectionIntro images={IMAGES_INTRO} items={ITEMS_INTRO} speed={10000} />
      <SectionWhyChoice image={ITEMS_INFO.image} info={ITEMS_INFO} />
      <SectionOurDoctors
        doctors={ITEMS_DOCTORS}
        title="Conoce a nuestros dentistas"
      />
      <SectionService
        title={SERVICES.title}
        text={SERVICES.text}
        items={SERVICES.items}
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

export default Main;
