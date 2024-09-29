import Image, { StaticImageData } from "next/image";
import s from "./index.module.css";
import { IconArrowNarrowRight } from "@tabler/icons-react";
interface Props {
  image: StaticImageData;
  text: string;
  button: string;
  title: string;
}

export const SimpleCard = ({ image, text, button, title }: Props) => {
  return (
    <div className={s.card}>
      <Image src={image} alt="image" />
      <h2>{title}</h2>
      <p>{text}</p>

      <button>
        <IconArrowNarrowRight />
        {button}
      </button>
    </div>
  );
};
