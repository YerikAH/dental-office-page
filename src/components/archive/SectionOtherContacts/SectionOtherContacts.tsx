import s from "./SectionOtherContacts.module.css";
import { SectionOtherContactsProps } from "../../interface/props";

function SectionOtherContacts({
  title,
  text,
  contactsLink,
  address,
}: SectionOtherContactsProps) {
  return (
    <section className={s.section}>
      <h2>{title}</h2>
      <p>{text} </p>
      <div className={s.section__grid}>
        <div className={s.section__grid__buttons}>
          {contactsLink.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              style={{ backgroundColor: `${item.color}` }}
            >
              {item.icon}
              {item.text}
            </a>
          ))}
          <span></span>
        </div>
        <div className={s.section__grid__info}>
          <div>
            <h3>Come to see to us!</h3>
            <span dangerouslySetInnerHTML={{ __html: address }} />
            <a href="">Open to GoogleMaps</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionOtherContacts;
