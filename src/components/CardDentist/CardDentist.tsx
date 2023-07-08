import s from "./CardDentist.module.css";
import { CardDentistProps } from "../../interface/props";
import {
  IconWorld,
  IconPhone,
  IconBrandFacebook,
  IconMail,
} from "@tabler/icons-react";

function CardDentist({
  image,
  name,
  special,
  text,
  fb,
  email,
  phone,
  url,
}: CardDentistProps) {
  const SOCIAL_MEDIA = [
    {
      color: "#3B599B",
      icon: <IconBrandFacebook/>,
      url: fb,
    },
    {
      color: "#18B0D1",
      icon: <IconMail />,
      url: email,
    },
    {
      color: "#0292FC",
      icon: <IconPhone />,
      url: phone,
    },
    {
      color: "#1BC197",
      icon: <IconWorld />,
      url: url,
    },
  ];
  return (
    <div className={s.card}>
      <img src={image} alt="doctor" className={s.card__image} />
      <div className={s.card__social}>
        {SOCIAL_MEDIA.map((item, idx) => (
          <div key={idx} style={{background: `${item.color}`}}>
            <a href={item.url}>{item.icon}</a>
          </div>
        ))}
      </div>
      <div className={s.card__info}>
        <div>
          <h4 className={` ${s.card__text} ${s["card__text--bold"]}`}>
            {name}
          </h4>
          <span className={s.card__text}>{special}</span>
        </div>
        <p className={s.card__text}>{text.substring(0,100)}...</p>
      </div>
    </div>
  );
}
export default CardDentist;
