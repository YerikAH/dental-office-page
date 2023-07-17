import s from "./DragImage.module.css";
import { useState, useRef, useEffect } from "react";
import { DragImageProps } from "../../interface/props";

function DragImage({ smile_bad, smile_good }: DragImageProps) {
  const ref = useRef<null | HTMLDivElement>(null);
  const [position, setPosition] = useState(350);

  function drop() {
    console.log("drop");
  }
  function dragEnter(e: DragEvent) {
    e.preventDefault();
    console.log("drag Enter ");
  }
  function dragStart() {
    console.log("drag start");
  }
  function dragOver(e: DragEvent) {
    e.preventDefault();
    console.log(e.clientX)
    setPosition(e.clientX);
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("dragstart", dragStart);
      ref.current.addEventListener("drop", drop);
      ref.current.addEventListener("dragover", dragOver);
      ref.current.addEventListener("dragenter", dragEnter);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("dragstart", dragStart);
        ref.current.removeEventListener("drop", drop);
        ref.current.removeEventListener("dragover", dragOver);
        ref.current.removeEventListener("dragenter", dragEnter);
      }
    };
  }, []);
  return (

    <div className={s.contain}>
      <div ref={ref} className={s.images}>
        <img src={smile_good} alt="smile_good" />
        <img
          src={smile_bad}
          alt="smile__bad"
          style={{ width: `${position}px` }}
        />
      </div>
      <div className={s.drag} draggable style={{ left: `${position}px` }}></div>
    </div>
  );
}
export default DragImage;
