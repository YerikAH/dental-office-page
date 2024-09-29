"use client";
import { useState, useEffect } from "react";

export const useWidth = (maxWidth: number) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [renderImages, setRenderImages] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    if (typeof window !== "undefined") {
      updateWidth();
      window.addEventListener("resize", updateWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateWidth);
      }
    };
  }, []);

  useEffect(() => {
    if (windowWidth !== null && windowWidth > maxWidth) {
      setRenderImages(true);
    } else {
      setRenderImages(false);
    }
  }, [windowWidth, maxWidth]);

  return { windowWidth, renderImages };
};
