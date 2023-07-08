import { useState } from "react";
import ChatWhatsApp from "../ChatWhatsApp/ChatWhatsApp";
import s from "./BtnWhatsApp.module.css";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import {BtnWhatsAppProps} from '../../interface/props'

function BtnWhatsApp({text, logo, textTwo, title}: BtnWhatsAppProps) {
  const [modal, setModal] = useState(false)
  const onToggleModal = () =>{
    setModal(!modal)
  }
  return (
    <div className={s.position}>
      <ChatWhatsApp state={modal} setState={onToggleModal} logo={logo} text={textTwo} title={title} />
      <button className={s.button} onClick={onToggleModal}>
        <IconBrandWhatsapp size={24} color="white" />
        <p>{text}</p>
      </button>
    </div>
  );
}
export default BtnWhatsApp;
