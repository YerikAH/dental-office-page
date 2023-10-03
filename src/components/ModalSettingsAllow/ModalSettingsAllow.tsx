import { Link } from "react-router-dom";
import s from "./ModalSettingsAllow.module.css";

const ITEMS = [
  {
    name: "Configuración",
    path: "/",
  },
  {
    name: "Dirección",
    path: "/",
  },
];

function ModalSettingsAllow() {
  return (
    <div className={s.modal}>
      {ITEMS.map((item, idx) => (
        <Link to={item.path} key={idx}>
          {item.name}
        </Link>
      ))}
      <button>Cerrar sesión</button>
    </div>
  );
}
export default ModalSettingsAllow;
