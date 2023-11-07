import s from "./ContactSupport.module.css";
import { ContactSupportProps } from "../../interface/props";
import headphones from "../../assets/headphones-icon.png";
import settings from "../../assets/setting-icon.png";
import curve from "../../assets/curve.svg";

function ContactSupport({
  title,
  text,
  email,
  phoneNumber,
}: ContactSupportProps) {
  return (
    <section className={s.section}>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={s.section__package}>
        <div className={s.section__package__icon}>
          <img src={headphones} alt="image" />
          <p>customer service support</p>
        </div>
        <div className={s.section__package__icon}>
          <img src={settings} alt="image" />
          <p>technical support</p>
        </div>
        <div className={s.section__package__contact}>
          <p>please contact us at</p>
          <span>{phoneNumber}</span>
        </div>
      </div>
      <div className={`${s.section__package} ${s.section__package__special}`}>
        <p>
          For questions about hiring or to chedule a La preventiva client demo,{" "}
          <br /> please contact contact us at <span>{email}</span>
        </p>
        <img className={s.curve} src={curve} />
      </div>
    </section>
  );
}
export default ContactSupport;
