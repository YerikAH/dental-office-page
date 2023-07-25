import s from "./SectionBestResults.module.css";
import { SectionBestResultsProps } from "../../interface/props";
import DragImage from "../DragImage/DragImage";

function SectionBestResults({ title, text, images }: SectionBestResultsProps) {
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
}
export default SectionBestResults;
