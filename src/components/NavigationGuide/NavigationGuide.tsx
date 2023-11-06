import { Link, useLocation } from "react-router-dom";
import s from "./NavigationGuide.module.css";
import { IconCaretRight, IconHome } from "@tabler/icons-react";

function NavigationGuide() {
  const location = useLocation();
  const routes = location.pathname.slice(1).split("/");
  return (
    <div className={s.guide}>
      <div className={s.navigation}>
        <Link to="/" className={`${s.navigation__link} ${s.navigation__home}`}>
          <IconHome size={20} />
          Home
        </Link>
        <IconCaretRight fill="currentColor" size={12} />
        {routes.map((item, idx) => (
          <span key={idx} className={s.navigation__span}>
            <Link
              to={item}
              className={`${s.navigation__link}  ${
                idx + 1 === routes.length ? s.navigation__current : ""
              }`}
            >
              {item}
            </Link>
            {idx + 1 !== routes.length && (
              <IconCaretRight fill="currentColor" size={12} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
export default NavigationGuide;
