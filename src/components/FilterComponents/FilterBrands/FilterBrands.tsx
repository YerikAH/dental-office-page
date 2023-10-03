import { IconSearch } from "@tabler/icons-react";
import { InputTypes } from "../../../interface/enum";
import CustomInput from "../../CustomInput/CustomInput";
import s from "./FilterBrands.module.css";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const brands = [
  "dental",
  "dientes",
  "camiseta",
  "cepillos",
  "colores",
  "medicina",
  "colores",
  "medicina",
];
function FilterBrands() {
  return (
    <div className={s.brands}>
      <h3>Banderas</h3>
      <div className={s.brands__container}>
        <CustomInput
          label=""
          isLabel={false}
          name="brand"
          placeholder="Buscar una bandera"
          type={InputTypes.NUMBER}
          withIcon={true}
          icon={<IconSearch />}
        />
        <div className={s.brands__checkboxes}>
          {brands.map((item, idx) => (
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={item}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default FilterBrands;
