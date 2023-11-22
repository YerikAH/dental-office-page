import s from "./Main.module.css";
import SectionIntro from "../SectionIntro/SectionIntro";
import SectionWhyChoice from "../SectionWhyChoice/SectionWhyChoice";
import SectionOurDoctors from "../SectionOurDoctors/SectionOurDoctors";
import SectionService from "../SectionService/SectionService";
import SectionQA from "../SectionQA/SectionQA";
import SectionOurClient from "../SectionOurClient/SectionOurClient";
import SectionBestResults from "../SectionBestResults/SectionBestResults";
import SectionContact from "../SectionContact/SectionContact";

import { SECTION_INTRO } from "../../db/SectionIntro";
import { SECTION_WHY_CHOICE } from "../../db/SectionWhyChoice";
import { SECTION_OUR_DOCTORS } from "../../db/SectionOurDoctors";
import { SECTION_SERVICES } from "../../db/SectionService";
import { SECTION_BEST_RESULT } from "../../db/SectionBestResults";
import { SECTION_CONTACT } from "../../db/SectionContact";
import { SECTION_QA } from "../../db/SectionQA";
import { SECTION_OUR_CLIENTS } from "../../db/SectionOurClient";

function Main() {
  return (
    <main className={s.main}>
      <SectionIntro
        images={SECTION_INTRO.images_intro}
        items={SECTION_INTRO.items_intro}
        speed={10000}
      />
      <SectionWhyChoice
        image={SECTION_WHY_CHOICE.image}
        info={SECTION_WHY_CHOICE}
      />
      <SectionOurDoctors
        doctors={SECTION_OUR_DOCTORS.doctors}
        title={SECTION_OUR_DOCTORS.title}
      />
      <SectionService
        title={SECTION_SERVICES.title}
        text={SECTION_SERVICES.text}
        items={SECTION_SERVICES.items}
      />
      <SectionBestResults
        title={SECTION_BEST_RESULT.title}
        text={SECTION_BEST_RESULT.text}
        images={SECTION_BEST_RESULT.images}
      />
      <SectionContact
        title={SECTION_CONTACT.title}
        text={SECTION_CONTACT.text}
        inputs={SECTION_CONTACT.inputs}
      />
      <SectionQA
        title={SECTION_QA.title}
        text={SECTION_QA.text}
        items={SECTION_QA.items}
      />
      <SectionOurClient
        title={SECTION_OUR_CLIENTS.title}
        text={SECTION_OUR_CLIENTS.text}
        items={SECTION_OUR_CLIENTS.items}
      />
    </main>
  );
}

export default Main;
