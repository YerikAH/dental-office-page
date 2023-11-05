import InfoProduct from "../InfoProduct/InfoProduct";
import SliderProduct from "../SliderProduct/SliderProduct";
import s from "./MainProduct.module.css";
const IMAGES = [
  "https://images.pexels.com/photos/3798146/pexels-photo-3798146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3798146/pexels-photo-3798146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6869135/pexels-photo-6869135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3798146/pexels-photo-3798146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
function MainProduct() {
  return (
    <main className={s.main}>
      <section className={s.section__info}>
        <SliderProduct images={IMAGES} />
        <InfoProduct
          product={{
            name: "Cepillo electrico",
            description:
              "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. ",
            image: "",
            price: 500,
            like: true,
          }}
        />
      </section>
    </main>
  );
}
export default MainProduct;
