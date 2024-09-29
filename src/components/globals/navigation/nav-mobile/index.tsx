import s from "./index.module.css";
import { IconX } from "@tabler/icons-react";
import { RoutesEnum } from "@/routes";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

export interface Props {
  state?: boolean;
  setState?: () => void;
  items: { path: string; label: string; active: boolean }[];
  logo: StaticImageData;
  info?: { title: string; text: string }[];
  Component?: JSX.Element;
  darkMode?: boolean;
}
export const NavMobile = ({
  items,
  logo,
  state,
  setState,
  darkMode = false,
}: Props) => {
  const pathname = usePathname();
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
            <Link href="/" tabIndex={1}>
              <Image src={logo!} alt="logo" />
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
                href={item.path}
                tabIndex={1}
                className={
                  item.path === pathname
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
              href="/"
              tabIndex={1}
              className={`${s.nav__link} ${s["nav__link--bold"]}`}
            >
              (+51) 991 231 912
            </Link>
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
        </ul>
      </nav>
    </>
  );
};
