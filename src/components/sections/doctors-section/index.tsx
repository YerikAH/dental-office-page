import { StaticImageData } from "next/image";
import { CarouselCards } from "./carousel-cards";
import s from "./index.module.css";

export interface Props {
  doctors: {
    image: StaticImageData;
    name: string;
    special: string;
    text: string;
    fb: string;
    email: string;
    phone: string;
    url: string;
  }[];
  title: string;
}

export const DoctorsSection = ({ doctors, title }: Props) => {
  return (
    <section className={s.section} id="Nosotros">
      <div className={s.section__contain}>
        <div className={s.section__contain__title}>
          <h3>{title}</h3>
          <div />
        </div>
        <CarouselCards cards={doctors} />
      </div>
    </section>
  );
};
