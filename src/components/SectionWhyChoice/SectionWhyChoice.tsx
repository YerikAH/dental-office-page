import s from "./SectionWhyChoice.module.css";
import CardInfo from "../CardInfo/CardInfo";
import {SectionWhyChoiceProps} from '../../interface/props'

function SectionWhyChoice({info, image}: SectionWhyChoiceProps) {
  return (
    <section className={s.section}>
      <div>
        <CardInfo
          label={info.label}
          title={info.title}
          slogan={info.slogan}
          text={info.text}
          button={info.button}
          items={info.items}
        />
      </div>
      <div>
        <img src={image} alt="doctor" />
      </div>
    </section>
  );
}
export default SectionWhyChoice;
