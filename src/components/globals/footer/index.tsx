import { FooterQuestion } from "./footer-question";
import s from "./index.module.css";
import Image, { StaticImageData } from "next/image";

export interface Props {
  footer: {
    logo: StaticImageData;
    text: string;
    media: {
      media: StaticImageData;
      url: string;
    }[];
    descriptionI: string;
    descriptionII: string;
    contacts: {
      label: string;
      icon: StaticImageData;
    }[];
    labelOne: string;
    labelTwo: string;
    labelThree: string;
    copyright: string;
    question: string;
    button: string;
  };
}

export const Footer = ({ footer }: Props) => {
  return (
    <footer className={s.footer}>
      <FooterQuestion text={footer.question} button={footer.button} />
      <div className={s.footer__contain}>
        <div className={s.footer__contain__info}>
          <Image
            src={footer.logo}
            className={s.footer__contain__info__logo}
            alt="logo"
          />
          <p className={s.text}>{footer.text}</p>
          <div>
            {footer.media.map((item, idx) => (
              <a key={idx} href={item.url} tabIndex={1}>
                <Image src={item.media} alt="social media" />
              </a>
            ))}
          </div>
        </div>
        <div className={s.footer__contain__navigation}>
          <h2 className={`${s["text--bold"]} ${s.text}`}>{footer.labelOne}</h2>
          <ul>
            {footer.contacts.map((item, idx) => (
              <li key={idx}>
                <Image src={item.icon} alt="icon" />
                <p className={s.text}>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.footer__contain__navigation}>
          <h2 className={`${s["text--bold"]} ${s.text}`}>{footer.labelTwo}</h2>
          <p
            className={s.text}
            dangerouslySetInnerHTML={{ __html: footer.descriptionI }}
          />
        </div>
        <div className={s.footer__contain__navigation}>
          <h2 className={`${s["text--bold"]} ${s.text}`}>
            {footer.labelThree}
          </h2>
          <p
            className={s.text}
            dangerouslySetInnerHTML={{ __html: footer.descriptionII }}
          />
        </div>
      </div>
      <div className={s.footer__copyright}>
        <div></div>
        <p className={s.text}>{footer.copyright}</p>
      </div>
    </footer>
  );
};
