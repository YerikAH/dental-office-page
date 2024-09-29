"use client";
import Link from "next/link";
import s from "./index.module.css";
import { usePathname } from "next/navigation";

interface Props {
  items: { path: string; label: string; active: boolean }[];
}

export const RenderConditionalLinks = ({ items }: Props) => {
  const pathname = usePathname();

  return (
    <>
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
    </>
  );
};
