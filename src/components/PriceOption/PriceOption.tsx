import { IconCheck, IconX } from "@tabler/icons-react";
import { PriceOptionProps } from "../../interface/props.ts";
import s from "./PriceOption.module.css";

function PriceOption({ title, isCheck }: PriceOptionProps) {
  return (
    <div className={s.option}>
      <p>{title}</p>
      <button className={isCheck ? s.active : s.deactive}>
        {isCheck ? <IconCheck/> : <IconX/>}
      </button>
    </div>
  );
}
export default PriceOption;
