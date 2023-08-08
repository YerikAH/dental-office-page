import s from "./NavigationUser.module.css";
import { NavigationUserProps } from "../../interface/props";
import { Link } from "react-router-dom";
import {
  IconChevronDown,
  IconHeart,
  IconSearch,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";

const DEFAULT = [
  {
    name: "Nuevos items",
    to: "/products",
    active: true,
  },
];
function NavigationUser({ items = DEFAULT }: NavigationUserProps) {
  return (
    <div className={s.navigation}>
      <></>
      <div className={s.user}>
        <ul className={s.user__list}>
          <li className={s.user__decoration}>VENTA</li>
          {items.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.to}
                className={`${s.user__text} ${
                  item.active && `${s["user__text--active"]}`
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={s.user__actions}>
          <div className={s.user__input}>
            <input type="text" placeholder="Buscar..." />
            <IconSearch size={15} strokeWidth={3} />
          </div>
          <div className={s.user__actions__decoration}></div>
          <div className={s.actions}>
            <button className={s.user__button}>
              <IconHeart />
            </button>
            <button className={s.user__button}>
              <IconShoppingBag />
            </button>
          </div>
          <button className={s.user__info}>
            <p>Harvey</p>
            <div className={s.user__button}>
              <IconUser />
            </div>
            <IconChevronDown size={16} />
          </button>
        </ul>
      </div>
    </div>
  );
}
export default NavigationUser;
