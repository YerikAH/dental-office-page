import s from "./index.module.css";

export interface Props {
  info: { title: string; text: string }[];
}

export const NavInfo = ({ info }: Props) => {
  return (
    <div className={s.info}>
      <div className={s.info__contain}>
        {info.map((item, idx) => (
          <div key={idx} className={s.info__item}>
            <h4 className={s.title}>{item.title}</h4>
            <p className={s.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
