"use client";
import s from "./index.module.css";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

interface Props {
  title: string;
  text: string;
}

export const QuestionAnswer = ({ title, text }: Props) => {
  const [show, setShow] = useState(false);

  const onShowAnswer = () => {
    setShow(!show);
  };
  return (
    <div className={s.card}>
      <div className={s.card__title}>
        <h6>{title}</h6>
        <button
          onClick={onShowAnswer}
          className={`${s.card__button} ${show && `${s["--active"]}`}`}
        >
          <IconChevronDown />
        </button>
      </div>
      <div>{show && <p>{text}</p>}</div>
    </div>
  );
};
