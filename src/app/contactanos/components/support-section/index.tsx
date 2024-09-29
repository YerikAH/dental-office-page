import s from "./index.module.css";
import headphones from "@/assets/icon/headphones-icon.png";
import settings from "@/assets/icon/setting-icon.png";
import curve from "@/assets/illustration/curve.svg";
import Image from "next/image";

interface Props {
  title: string;
  text: string;
  email: string;
  phoneNumber: string;
}
export const SupportSection = ({ title, text, email, phoneNumber }: Props) => {
  return (
    <section className={s.section}>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={s.section__package}>
        <div className={s.section__package__icon}>
          <Image src={headphones} alt="image" />
          <p>Soporte al cliente</p>
        </div>
        <div className={s.section__package__icon}>
          <Image src={settings} alt="image" />
          <p>Apoyo técnico</p>
        </div>
        <div className={s.section__package__contact}>
          <p>por favor contáctenos al</p>
          <span>{phoneNumber}</span>
        </div>
      </div>
      <div className={`${s.section__package} ${s.section__package__special}`}>
        <p>
          Estamos aquí para responder a tus consultas y brindarte el apoyo que
          necesitas. <br /> ¡Contáctanos hoy! <span>{email}</span>
        </p>
        <Image alt="curve" className={s.curve} src={curve} />
      </div>
    </section>
  );
};
