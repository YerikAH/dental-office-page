"use client";
import s from "./index.module.css";
import { useEffect, useState } from "react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { ChatWhatsApp } from "./chat-whatsapp";
import { StaticImageData } from "next/image";

interface Props {
  text: string;
  logo: string;
  textTwo: string;
  title: string;
  chats: {
    avatar: StaticImageData;
    name: string;
    tag: string;
    online: boolean;
  }[];
}
export const WhatsAppButton = ({
  text,
  logo,
  textTwo,
  title,
  chats,
}: Props) => {
  const [modal, setModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const onToggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setIsClient(true); // Esto asegura que estás en el cliente
  }, []);
  return (
    <div className={s.position}>
      {isClient && (
        <ChatWhatsApp
          state={modal}
          setState={onToggleModal}
          logo={logo}
          text={textTwo}
          title={title}
          chats={chats}
        />
      )}
      <button className={s.button} onClick={onToggleModal}>
        <IconBrandWhatsapp size={24} color="white" />
        <p>{text}</p>
      </button>
    </div>
  );
};
