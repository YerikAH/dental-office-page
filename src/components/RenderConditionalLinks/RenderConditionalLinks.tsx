import s from "./RenderConditionalLinks.module.css";
import { Link } from "react-scroll";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { RenderConditionalLinksProps } from "../../interface/props";

function RenderConditionalLinks({
  items,
  activeSection = 0,
  itemsPage,
  linkClick
}: RenderConditionalLinksProps) {
  const location = useLocation();
  const arrayItems = Object.values(items);
  return (
    <>
      {arrayItems.map((item, idx) => (
        <li key={idx}>
          <Link
            to={item}
            onClick={() => linkClick?.(idx)}
            tabIndex={1}
            className={
              activeSection === idx 
                ? `${s.nav__link} ${s["nav__link--active"]}`
                : `${s.nav__link}`
            }
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            {item}
          </Link>
        </li>
      ))}
      {itemsPage.map((item, idx) => (
        <LinkRouter
          to={item.to}
          tabIndex={1}
          key={idx}
          className={
            location.pathname.includes(item.to)
              ? `${s.nav__link} ${s["nav__link--active"]}`
              : `${s.nav__link}`
          }
        >
          {item.label}
        </LinkRouter>
      ))}
    </>
  );
}
export default RenderConditionalLinks;
