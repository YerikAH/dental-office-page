"use client";
import { IconBrandWhatsapp, IconX } from "@tabler/icons-react";
import s from "./index.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  state: boolean;
  setState: () => void;
  logo: string;
  title: string;
  text: string;
  chats: {
    avatar: StaticImageData;
    name: string;
    tag: string;
    online: boolean;
  }[];
}

export const ChatWhatsApp = ({
  state,
  setState,
  title,
  text,
  logo,
  chats,
}: Props) => {
  const onClick = () => {
    setState();
  };

  return (
    <div className={`${s.modal} ${state && `${s["--active"]}`}`}>
      <div className={s.banner}>
        <button tabIndex={1} onClick={onClick}>
          <IconX size={18} color="white" />
        </button>
        <IconBrandWhatsapp size={32} color="white" />
        <div>
          <h2>{title}</h2>
          <p>
            {text}
            <b>{logo}</b>.
          </p>
        </div>
      </div>
      <div className={s.chats}>
        {chats.map((item, idx) => (
          <button className={s.chat} key={idx}>
            <div className={s.chat__info}>
              <div>
                <Image src={item.avatar} alt={item.name} />
              </div>
              <div>
                <h5>{item.tag}</h5>
                <p>{item.name}</p>
              </div>
            </div>
            <IconBrandWhatsapp size={24} />
          </button>
        ))}
      </div>
    </div>
  );
};
