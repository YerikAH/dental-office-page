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
          <>
            {idx + 1 === routes.length
              ? (
                <Link
                  to={item}
                  key={idx}
                  className={`${s.navigation__link} ${s.navigation__current}`}
                >
                  {item}
                </Link>
              )
              : (
                <>
                  <Link to={item} key={idx} className={s.navigation__link}>
                    {item}
                  </Link>

                  <IconCaretRight fill="currentColor" size={12} />
                </>
              )}
          </>
        ))}
      </div>
    </div>
  );
}
export default NavigationGuide;
