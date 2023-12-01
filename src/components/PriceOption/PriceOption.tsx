import { PriceOptionProps } from "../../interface/props.ts";
import s from "./PriceOption.module.css";

function PriceOption({ title, isCheck }: PriceOptionProps) {
  return (
    <div className={s.option}>
      <p>{title}</p>
      <button></button>
    </div>
  );
}
export default PriceOption;
