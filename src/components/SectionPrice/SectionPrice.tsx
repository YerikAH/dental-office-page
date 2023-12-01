import s from "./SectionPrice.module.css";
import { SectionPriceProps } from "../../interface/props.ts";
import PriceOptions from "../PriceOptions/PriceOptions.tsx";
import CardPrice from "../CardPrice/CardPrice.tsx";

function SectionPrice({ title, text, options, prices }: SectionPriceProps) {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      <p className={s.text}>{text}</p>
      <div className={s.section__price}>
        <PriceOptions categories={options.categories} items={options.items} />
      </div>
      <div className={s.prices}>
        {prices.map((item, idx) => (
          <CardPrice
            descount={item.descount}
            price={item.price}
            title={item.title}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
}
export default SectionPrice;
