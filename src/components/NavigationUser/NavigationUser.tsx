import s from "./NavigationUser.module.css";
import {NavigationUserProps} from '../../interface/props'
import { Link } from "react-router-dom";

function NavigationUser({items}: NavigationUserProps) {
  return (
    <div className={s.navigation}>
      <></>
      <div className={s.user}>
        <ul className={s.user__list}>
          <li className={s.user__decoration}>
            VENTA
          </li>
          {items.map((item,idx) => (
            <li key={idx}>
              <Link to={item.to} className={s.user__text}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul>

        </ul>
      </div>
    </div>
  );
}
export default NavigationUser;
