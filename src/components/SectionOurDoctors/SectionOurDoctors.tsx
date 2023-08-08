import CarouselCards from "../CarouselCards/CarouselCards";
import s from "./SectionOurDoctors.module.css";
import { SectionOurDoctorsProps } from "../../interface/props";

function SectionOurDoctors({ doctors, title, sectionRefs }: SectionOurDoctorsProps) {
  return (
    <section className={s.section} ref={sectionRefs?.[1]} id="Nosotros">
      <div className={s.section__contain}>
        <div className={s.section__contain__title}>
          <h3>{title}</h3>
          <div />
        </div>
        <CarouselCards cards={doctors} />
      </div>
    </section>
  );
}
export default SectionOurDoctors;
