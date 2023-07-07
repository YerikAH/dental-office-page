import { IconX } from "@tabler/icons-react";
import s from "./ChatWhatsApp.module.css";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const CHATS = [
  {
    avatar:
      "https://img.freepik.com/vector-premium/plantilla-diseno-vector-plano-mascota-logotipo-personaje-maquina-robot-pequeno-divertido_194708-2022.jpg",
    name: "Diego Jackson",
    tag: "Asistente tecnico",
    online: true,
  },
  {
    avatar:
      "https://img.freepik.com/vector-premium/plantilla-diseno-vector-plano-mascota-logotipo-personaje-maquina-robot-pequeno-divertido_194708-2022.jpg",
    name: "Diego Jackson",
    tag: "Asistente tecnico",
    online: true,
  },
];
function ChatWhatsApp() {
  return (
    <div className={s.modal}>
      <div className={s.banner}>
        <button>
          <IconX size={18} color="white" />
        </button>
        <h2>Abrir Charla</h2>
        <p>
          ¡Hola! Haga clic en uno de nuestros miembros a continuación para
          chatear en
          <b> WhatsApp</b>.
        </p>
      </div>
      <div className={s.chats}>
        {CHATS.map((item,idx) => (

        <button className={s.chat} key={idx}>
          <div className={s.chat__info}>
            <div>
              <img
                src={item.avatar}
                alt={item.name}
              />
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
