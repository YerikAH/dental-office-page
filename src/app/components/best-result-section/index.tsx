import s from "./index.module.css";
import { DragImage } from "./drag-image";
import { StaticImageData } from "next/image";

export interface Props {
  title: string;
  text: string;
  images: {
    smile_good: StaticImageData;
    smile_bad: StaticImageData;
  };
}

export const BestResultsSection = ({ title, text, images }: Props) => {
  return (
    <section className={s.section}>
      <div className={s.section__intro}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={s.section__contain}>
        <div className={s.section__decoration}></div>
        <DragImage
          smile_bad={images.smile_bad}
          smile_good={images.smile_good}
        />
      </div>
    </section>
  );
};
