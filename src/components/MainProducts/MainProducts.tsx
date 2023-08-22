import FilterProducts from "../FilterProducts/FilterProducts";
import ListProducts from "../ListProducts/ListProducts";
import SectionProducts from "../SectionProducts/SectionProducts";
import s from "./MainProducts.module.css";

function MainProducts() {
  return (
    <main className={s.main}>
      <SectionProducts>
        <FilterProducts />
        <ListProducts />
      </SectionProducts>
    </main>
  );
}
export default MainProducts;
