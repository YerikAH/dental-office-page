import s from "./index.module.css";
import Image, { StaticImageData } from "next/image";
import { CardInfo } from "./card-info";

interface Props {
  info: {
    label: string;
    title: string;
    slogan: string;
    text: string;
    items: string[];
    button: string;
  };
  image: StaticImageData;
}

export const WhySection = ({ info, image }: Props) => {
  return (
    <section className={s.section}>
      <div className={s.section__info}>
        <CardInfo
          label={info.label}
          title={info.title}
          slogan={info.slogan}
          text={info.text}
          button={info.button}
          items={info.items}
        />
      </div>
      <div className={s.section__image}>
        <Image src={image} alt="doctor" />
      </div>
    </section>
  );
};
