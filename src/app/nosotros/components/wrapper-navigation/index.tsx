"use client";
import { Navigation } from "@/components/globals";
import { NAVIGATION } from "@/config";
import { useEffect, useState } from "react";

export const WrapperNavigation = () => {
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
  return (
    <Navigation
      items={NAVIGATION.items}
      logo={NAVIGATION.logo}
      info={NAVIGATION.info}
      darkMode={scrollPosition > 130 ? false : true}
    />
  );
};
