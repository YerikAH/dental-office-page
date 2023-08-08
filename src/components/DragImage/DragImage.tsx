/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import s from "./DragImage.module.css";
import { useState, useRef, useEffect } from "react";
import { DragImageProps } from "../../interface/props";
import useWidth from "../../hooks/useWidth";

function DragImage({ smile_bad, smile_good }: DragImageProps) {
  const ref = useRef<null | HTMLDivElement>(null);
  const heigth = useRef<null | HTMLImageElement>(null);
  const [position, setPosition] = useState(375);
  const [allHei, setAllHei] = useState(0);
  const { windowWidth } = useWidth(720);
  const [idx, setIdx] = useState(0);
  function drop(e: DragEvent) {
    console.log("drop", e.clientX);
  }
  function dragEnter(e: DragEvent) {
    e.preventDefault();
  }
  function dragStart() {
    return;
  }
  function dragLeave(e: DragEvent) {
    e.preventDefault();
  }
  function dragOver(e: DragEvent) {
    e.preventDefault();
    setIdx(e.clientX);
  }
  function onLoad() {
    setAllHei(heigth.current!.clientHeight);
  }
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("dragstart", dragStart);
      ref.current.addEventListener("drop", drop);
      ref.current.addEventListener("dragover", dragOver);
      ref.current.addEventListener("dragenter", dragEnter);
      ref.current.addEventListener("dragleave", dragLeave);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("dragstart", dragStart);
        ref.current.removeEventListener("drop", drop);
        ref.current.removeEventListener("dragover", dragOver);
        ref.current.removeEventListener("dragenter", dragEnter);
        ref.current.removeEventListener("dragleave", dragLeave);
      }
    };
  }, []);
  useEffect(() => {
    if (heigth) {
      setAllHei(heigth.current!.clientHeight);
    }
  }, [windowWidth, heigth]);

  useEffect(() => {
    const mitadWindow = windowWidth / 2;
    const mitadDrag = (ref.current!.clientWidth ?? 0) / 2;
    const startDrag = mitadWindow - mitadDrag;
    const positionDrag = idx - startDrag;
    if (positionDrag >= 0 && positionDrag <= ref.current!.clientWidth) {
      setPosition(positionDrag);
    }
  }, [windowWidth, idx]);
  return (
    <div className={s.contain} ref={ref}>
      <img
        src={smile_good}
        alt="good"
        className={s.good}
        ref={heigth}
        onLoad={onLoad}
      />

      <div
        draggable
        style={{ width: `${position}px` }}
        className={s.contain__switch}
      >
        <div className={s.drag} style={{ height: `${allHei}px` }}>
          <div> {"< Drag >"} </div>
        </div>
        <img
          src={smile_bad}
          alt="bad"
          className={s.bad}
          style={{ height: `${allHei}px` }}
        />
      </div>
    </div>
  );
}
export default DragImage;
