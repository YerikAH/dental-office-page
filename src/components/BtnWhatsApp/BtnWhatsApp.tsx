import ChatWhatsApp from "../ChatWhatsApp/ChatWhatsApp";
import s from "./BtnWhatsApp.module.css";
import { IconBrandWhatsapp } from "@tabler/icons-react";

function BtnWhatsApp() {
  return (
    <div className={s.position}>
      <ChatWhatsApp/>
      <button className={s.button}>
        <IconBrandWhatsapp size={24} color="white" />
        <p>Chatea con nosotros en WhatsApp</p>
      </button>
    </div>
  );
}
export default BtnWhatsApp;
