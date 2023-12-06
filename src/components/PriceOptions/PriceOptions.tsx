import { useEffect, useState } from "react";
import s from "./PriceOptions.module.css";
import { PriceOptionProps, PriceOptionsProps } from "../../interface/props.ts";
import PriceOption from "../PriceOption/PriceOption.tsx";

function PriceOptions({ categories, items }: PriceOptionsProps) {
  const [category, setCategory] = useState(0);
  const [filterOptions, setFilterOptions] = useState<PriceOptionProps[]>([]);
  const handleClick = (idx: number) => setCategory(idx);
  useEffect(() => {
    const filterResult = items.filter(
      (item) => item.category === categories[category]
    );
    setFilterOptions(filterResult);
  }, [categories, category, items]);
  return (
    <div className={s.options__content}>
      <div className={s.options__content__navigation}>
        {categories.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className={`${s.button} ${categories[category] === item && s.active}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={s.options}>
        {filterOptions.map((item, idx) => (
          <PriceOption
            title={item.title}
            isCheck={item.isCheck}
            category={item.category}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
export default PriceOptions;
