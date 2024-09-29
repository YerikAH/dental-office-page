import Image, { StaticImageData } from "next/image";
import s from "./index.module.css";

interface Props {
  avatar: StaticImageData;
  opinion: string;
  name: string;
  tag: string;
}
export const CardTestimonial = ({ avatar, opinion, name, tag }: Props) => {
  return (
    <div className={s.card}>
      <Image src={avatar} alt="avatar" className={s.card__avatar} />
      <div className={s.card__container}>
        <p>{opinion}</p>
        <h4>{name}</h4>
        <span>{tag}</span>
      </div>
    </div>
  );
};
