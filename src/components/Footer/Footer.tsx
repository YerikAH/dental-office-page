import s from "./Footer.module.css";
import {FooterProps} from '../../interface/props'
import FooterQuestion from "../FooterQuestion/FooterQuestion";

function Footer({
  logo,
  text,
  media,
  navigation,
  contacts,
  labelNavigation,
  labelContact,
}: FooterProps) {
  return (
    <footer className={s.footer}>
      <FooterQuestion />
      <div className={s.footer__contain}>
        <div className={s.footer__contain__info}>
          <img src={logo} alt="logo" />
          <p className={s.text}>{text}</p>
        </div>
        <div className={s.footer__contain__navigation}>
          <h2 className={`${s['text--bold']} ${s.text}`} >{labelNavigation}</h2>
          <ul>
            {navigation.map((item, idx) => (
              <li key={idx}>
                <a href={item.path} className={s.text}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.footer__contain__contact}>
          <h2 className={`${s['text--bold']} ${s.text}`}>{labelContact}</h2>
          <ul>
            {contacts.map((item, idx) => (
              <li key={idx} className={s.text}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.footer__copyright}>
        <div></div>
        <p className={s.text}>Copyright © 2023 Consultorio odontológico "La Preventiva"</p>
      </div>
    </footer>
  );
}

export default Footer;
