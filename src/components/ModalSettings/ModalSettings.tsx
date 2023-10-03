import { IconUser } from "@tabler/icons-react";
import s from "./ModalSettings.module.css";
import { ModalSettingsProps } from "../../interface/props";

function ModalSettings({ button, text }: ModalSettingsProps) {
  return (
    <div className={s.modal}>
      <IconUser size={100} />
      <p>{text}</p>
      <button className={s.button}>{button}</button>
    </div>
  );
}
export default ModalSettings;
