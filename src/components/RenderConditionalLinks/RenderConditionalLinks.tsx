import s from "./RenderConditionalLinks.module.css";
import { Link } from "react-router-dom";
import { RenderConditionalLinksProps } from "../../interface/props";

function RenderConditionalLinks({
  items,
}: RenderConditionalLinksProps) {
  return (
    <>
      {items.map((item, idx) => (
        <li key={idx}>
          <Link
            to={item.path}
            tabIndex={1}
            className={item.active
              ? `${s.nav__link} ${s["nav__link--active"]}`
              : `${s.nav__link}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}
export default RenderConditionalLinks;
