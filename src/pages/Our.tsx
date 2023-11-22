import { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import MainOur from "../components/MainOur/MainOur";
import { NAVIGATION } from "../db/Navigation";
import { FOOTER } from "../db/Footer";

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
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
        darkMode={scrollPosition > 130 ? false : true}
      />
      <MainOur />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Our;
