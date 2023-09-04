import { useEffect, useState } from "react";
import { CardIconProps } from "../../interface/props";
import s from "./CardIcon.module.css";

function CardIcon({ img, title, text }: CardIconProps) {
  const [start, setStart] = useState(0)
  const number = Number(title)

  useEffect(() => {
    const interval = setInterval(()=>{
      if(start === number) return
      setStart(start + 1)
    },10)
  
    return () => {
      clearInterval(interval)
    }
  }, [number, start])
  
  return (
    <div className={s.card}>
      <img src={img} alt="icon" />
      <h2>{start}</h2>
      <p>{text}</p>
    </div>
  );
}

export default CardIcon;
