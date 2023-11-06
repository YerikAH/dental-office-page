import { ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { FOOTER, NAV } from "../db/db";
import Footer from "../components/Footer/Footer";
import MainOur from "../components/MainOur/MainOur";
import { useEffect, useState } from "react";

function Our() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);
  return (
    <>
      <ScrollRestoration />
      <Navigation
        items={NAV.items}
        logo={NAV.logo}
        info={NAV.info}
        darkMode={scrollPosition > 130 ? false : true}
      />
      <MainOur />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Our;
