import s from "./Main.module.css";
import Welcome from "../Welcome/Welcome";
import SectionNumbers from "../SectionNumbers/SectionNumbers";
import SectionOurDoctors from "../SectionOurDoctors/SectionOurDoctors";
import SectionVisionMision from "../SectionVisionMision/SectionVisionMision";
import SectionParallax from "../SectionParallax/SectionParallax";
import SectionPromotion from "../SectionPromotion/SectionPromotion";
import { SECTION_PROMOTION } from "../../db/SectionPromotion";
import { WELCOME } from "../../db/Welcome";
import { SECTION_VISION_MISION } from "../../db/SectionVisionMision";
import { SECTION_OUR_DOCTORS } from "../../db/SectionOurDoctors";
import { SECTION_NUMBERS } from "../../db/SectionNumbers";
import { SECTION_PARALLAX } from "../../db/SectionParallax";

function MainOur() {
  return (
    <main className={s.main}>
      <SectionPromotion
        image={SECTION_PROMOTION.image}
        points={SECTION_PROMOTION.points}
        text={SECTION_PROMOTION.text}
        title={SECTION_PROMOTION.title}
      />
      <Welcome
        img={WELCOME.img}
        title={WELCOME.title}
        text={WELCOME.text}
        button={WELCOME.button}
      />
      <SectionVisionMision
        items={SECTION_VISION_MISION.misionVision}
        image={SECTION_VISION_MISION.image}
      />
      <SectionOurDoctors
        doctors={SECTION_OUR_DOCTORS.doctors}
        title={SECTION_OUR_DOCTORS.title}
      />
      <SectionNumbers ITEMS={SECTION_NUMBERS} />
      <SectionParallax
        text={SECTION_PARALLAX.text}
        logo={SECTION_PARALLAX.logo}
        slogan={SECTION_PARALLAX.slogan}
        title={SECTION_PARALLAX.title}
        image={SECTION_PARALLAX.image}
      />
    </main>
  );
}
export default MainOur;
