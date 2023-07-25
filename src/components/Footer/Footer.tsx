import s from "./Footer.module.css";
import { FooterCompressedProps } from "../../interface/props";
import FooterQuestion from "../FooterQuestion/FooterQuestion";

function Footer({
  footer
}: FooterCompressedProps) {
  return (
    <footer className={s.footer}>
      <FooterQuestion text={footer.question} button={footer.button} />
      <div className={s.footer__contain}>
        <div className={s.footer__contain__info}>
          <img
            src={footer.logo}
            className={s.footer__contain__info__logo}
            alt="logo"
          />
          <p className={s.text}>{footer.text}</p>
          <div>
            {footer.media.map((item, idx) => (
              <a key={idx} href={item.url} tabIndex={1}>
                <img src={item.media} alt="social media" />
              </a>
            ))}
          </div>
        </div>
        <div className={s.footer__contain__navigation}>
          <h2 className={`${s["text--bold"]} ${s.text}`}>{footer.labelNavigation}</h2>
          <ul>
            {footer.navigation.map((item, idx) => (
              <li key={idx}>
                <a href={item.path} className={s.text} tabIndex={1}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.footer__contain__contact}>
          <h2 className={`${s["text--bold"]} ${s.text}`}>{footer.labelContact}</h2>
          <ul>
            {footer.contacts.map((item, idx) => (
              <li key={idx}>
                <img src={item.icon} alt="icon" />
                <p className={s.text}>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.footer__copyright}>
        <div></div>
        <p className={s.text}>{footer.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
