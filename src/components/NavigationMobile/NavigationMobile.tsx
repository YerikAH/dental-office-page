import { NavigationProps } from "../../interface/props";
import { Link } from "react-router-dom";
import { IconX } from "@tabler/icons-react";
import s from "./NavigationMobile.module.css";
import { RoutesEnum } from "../../interface/enum";

function NavigationMobile({
  items,
  logo,
  state,
  setState,
  darkMode = false,
}: NavigationProps) {
  const toggleMenu = () => {
    setState?.();
  };
  return (
    <>
      <nav
        className={`${state ? `${s.nav} ${s["nav--active"]}` : `${s.nav}`} ${
          darkMode ? `${s.dark}` : ""
        }`}
      >
        <ul className={s.nav__logo}>
          <li>
            <Link to="/" tabIndex={1}>
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <button className={s.nav__ham} tabIndex={1} onClick={toggleMenu}>
            <IconX size={18} />
          </button>
        </ul>
        <ul className={s.nav__pages}>
          {items.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                tabIndex={1}
                className={
                  item.active
                    ? `${s.nav__link} ${s["nav__link--active"]}`
                    : `${s.nav__link}`
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={s.nav__pages}>
          <li>
            <Link
              to="/"
              tabIndex={1}
              className={`${s.nav__link} ${s["nav__link--bold"]}`}
            >
              (+51) 991 231 912
            </Link>
          </li>
          <li>
            <Link
              to={RoutesEnum.APPOINTMENT}
              tabIndex={1}
              className={`${s.nav__link} ${s.nav__button}`}
            >
              agendar una cita
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationMobile;
