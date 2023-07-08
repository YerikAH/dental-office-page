import { IconX } from "@tabler/icons-react";
import s from "./ChatWhatsApp.module.css";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { ChatWhatsAppProps } from "../../interface/props";

const CHATS = [
  {
    avatar:
      "https://img.freepik.com/vector-premium/plantilla-diseno-vector-plano-mascota-logotipo-personaje-maquina-robot-pequeno-divertido_194708-2022.jpg",
    name: "Diego Jackson",
    tag: "Asistente tecnico",
    online: true,
  },
];
function ChatWhatsApp({
  state,
  setState,
  title,
  text,
  logo,
}: ChatWhatsAppProps) {

  const onClick = () => {
    setState();
  };

  return (
    <div className={`${s.modal} ${state && `${s['--active']}`}`}>
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
        {CHATS.map((item, idx) => (
          <button className={s.chat} key={idx}>
            <div className={s.chat__info}>
              <div>
                <img src={item.avatar} alt={item.name} />
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
}
export default ChatWhatsApp;
