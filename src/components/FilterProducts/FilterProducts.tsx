import s from "./FilterProducts.module.css";
import FilterTags from "../FilterComponents/FilterTags/FilterTags";
import FilterPrice from "../FilterComponents/FilterPrice/FilterPrice";
import FilterBrands from "../FilterComponents/FilterBrands/FilterBrands";
function FilterProducts() {
  return (
    <article className={s.filters}>
      <FilterTags />
      <FilterPrice/>
      <FilterBrands/>
    </article>
  );
}
export default FilterProducts;
