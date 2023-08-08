import { NavigationProps } from "../../interface/props";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { IconX } from "@tabler/icons-react";
import s from "./NavigationMobile.module.css";
import { Routes } from "../../interface/enum";

function NavigationMobile({
  items,
  logo,
  state,
  setState,
  linkClick,
  itemsPage,
}: NavigationProps) {
  const toggleMenu = () => {
    setState?.();
  };
  function closeAndTravel(idx: number){
    linkClick?.(idx)
    toggleMenu()
  }
  const itemsArray = Object.values(items);
  return (
    <>
      <nav className={state ? `${s.nav} ${s["nav--active"]}` : `${s.nav}`}>
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
          {itemsArray.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item}
                onClick={() => closeAndTravel(idx)}
                tabIndex={1}
                className={item.active
                  ? `${s.nav__link} ${s["nav__link--active"]}`
                  : `${s.nav__link}`}
              >
                {item}
              </Link>
            </li>
          ))}
          {itemsPage.map((item, idx) => (
            <li key={idx}>
              <LinkRouter
                to={item.to}
                tabIndex={1}
                className={
                  location.pathname.includes(item.to)
                    ? `${s.nav__link} ${s["nav__link--active"]}`
                    : `${s.nav__link}`
                }
              >
                {item.label}
              </LinkRouter>
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
            <LinkRouter
              to={Routes.APPOINTMENT}
              tabIndex={1}
              className={`${s.nav__link} ${s.nav__button}`}
            >
              agendar una cita
            </LinkRouter>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationMobile;
