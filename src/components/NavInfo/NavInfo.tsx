import s from "./NavInfo.module.css";
import { NavInfoProps } from "../../interface/props";

function NavInfo({ info }: NavInfoProps) {
  return (
    <div className={s.info}>
      <div className={s.info__contain}>
        {info.map((item, idx) => (
          <div key={idx} className={s.info__item}>
            <h4 className={s.title}>{item.title}</h4>
            <p className={s.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NavInfo;
