import { Slider } from "@mui/material";
import s from "./FilterPrice.module.css";
import { useState } from "react";
import CustomInput from "../../CustomInput/CustomInput";
import { InputTypes } from "../../../interface/enum";

function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 30;
const heights = [15, 20, 8, 6, 9, 3, 7, 20, 8, 6, 9, 25, 30, 15, 20];

function FilterPrice() {
  const [value, setValue] = useState<number[]>([30, 100]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };
  return (
    <div className={s.price}>
      <h3>Precio</h3>
      <div className={s.price__line}>
        <CustomInput
          label="De"
          name="from"
          placeholder="S/30.00"
          type={InputTypes.NUMBER}
          withIcon={false}
        />
        <CustomInput
          label="A"
          name="to"
          placeholder="S/300.00"
          type={InputTypes.NUMBER}
          withIcon={false}
        />
      </div>
      <div className={s.price__line__heights}>
        {heights.map((item, index) => (
          <div style={{ height: `${item}px` }} key={index}></div>
        ))}
      </div>
      <Slider
        size="small"
        step={5}
        min={30}
        max={300}
        getAriaLabel={() => "Rango de precio"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </div>
  );
}
export default FilterPrice;
