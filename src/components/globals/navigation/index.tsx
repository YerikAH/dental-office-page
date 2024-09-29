"use client";
import s from "./index.module.css";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import { NavInfo } from "./nav-info";
import { RoutesEnum } from "@/routes";
import { RenderConditionalLinks } from "./render-conditional-links";
import { NavMobile } from "./nav-mobile";
import Image, { StaticImageData } from "next/image";

export interface Props {
  state?: boolean;
  setState?: () => void;
  items: { path: string; label: string; active: boolean }[];
  logo: StaticImageData;
  info?: { title: string; text: string }[];
  Component?: JSX.Element;
  darkMode?: boolean;
}

export const Navigation = ({
  items,
  logo,
  info,
  Component,
  darkMode = false,
}: Props) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header className={`${s.header} ${darkMode ? s.dark : ""}`}>
        {info !== undefined && <NavInfo info={info} />}

        <nav className={s.nav}>
          <div className={s.nav__logo}>
            <li>
              <LinkScroll to="/" tabIndex={1}>
                <Image src={logo!} alt="logo" />
              </LinkScroll>
            </li>
          </div>
          <ul className={s.nav__pages}>
            <RenderConditionalLinks items={items} />
          </ul>
          <div className={s.nav__pages}>
            <li>
              <LinkScroll
                to="/"
                tabIndex={1}
                className={`${s.nav__link} ${s["nav__link--bold"]}`}
              >
                (+51) 991 231 912
              </LinkScroll>
            </li>
            <li>
              <Link
                href={RoutesEnum.APPOINTMENT}
                tabIndex={1}
                className={`${s.nav__link} ${s.nav__button}`}
              >
                agendar una cita
              </Link>
            </li>
          </div>
          <button className={s.nav__ham} tabIndex={1} onClick={toggleMenu}>
            <IconMenu2 size={18} />
          </button>
        </nav>
        {Component !== undefined && Component}
        <NavMobile
          items={items}
          logo={logo}
          state={menu}
          setState={toggleMenu}
          darkMode={darkMode}
        />
      </header>
    </>
  );
};
