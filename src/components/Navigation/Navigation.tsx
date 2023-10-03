import s from "./Navigation.module.css";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import { NavigationProps } from "../../interface/props";
import NavigationMobile from "../NavigationMobile/NavigationMobile";
import NavInfo from "../NavInfo/NavInfo";
import { RoutesEnum } from "../../interface/enum";
import RenderConditionalLinks from "../RenderConditionalLinks/RenderConditionalLinks";

function Navigation({ items, logo, info, Component}: NavigationProps) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header>
        {info !== undefined && <NavInfo info={info} />}

        <nav className={s.nav}>
          <div className={s.nav__logo}>
            <li>
              <Link to="/" tabIndex={1}>
                <img src={logo} alt="logo" />
              </Link>
            </li>
          </div>
          <ul className={s.nav__pages}>
            <RenderConditionalLinks items={items} />
          </ul>
          <div className={s.nav__pages}>
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
                to={RoutesEnum.APPOINTMENT}
                tabIndex={1}
                className={`${s.nav__link} ${s.nav__button}`}
              >
                agendar una cita
              </LinkRouter>
            </li>
          </div>
          <button className={s.nav__ham} tabIndex={1} onClick={toggleMenu}>
            <IconMenu2 size={18} />
          </button>
        </nav>
        {Component !== undefined && Component}
        <NavigationMobile
          items={items}
          logo={logo}
          state={menu}
          setState={toggleMenu}
        />
      </header>
    </>
  );
}

export default Navigation;
