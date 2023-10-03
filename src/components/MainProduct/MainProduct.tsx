import InfoProduct from "../InfoProduct/InfoProduct";
import SliderProduct from "../SliderProduct/SliderProduct";
import s from "./MainProduct.module.css";
const IMAGES = [
  "https://images.pexels.com/photos/3798146/pexels-photo-3798146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3798146/pexels-photo-3798146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6869135/pexels-photo-6869135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
function MainProduct() {
  return (
    <main className={s.main}>
      <section className={s.section__info}>
        <SliderProduct images={IMAGES} />
        <InfoProduct
          product={{
            title: "Cepillo electrico",
            description:
              "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
          }}
        />
      </section>
    </main>
  );
}
export default MainProduct;
