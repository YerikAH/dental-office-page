import s from "./NavigationUser.module.css";
import { NavigationUserProps } from "../../interface/props";
import { Link } from "react-router-dom";
import {
  IconChevronDown,
  IconHeart,
  IconSearch,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import LeftDropDown from "../LeftDropDown/LeftDropDown";
import ProductBag from "../ProductBag/ProductBag";
import SubTotal from "../SubTotal/SubTotal";
import ModalSettings from "../ModalSettings/ModalSettings";
import ModalSettingsAllow from "../ModalSettingsAllow/ModalSettingsAllow";

const DEFAULT = [
  {
    name: "Nuevos items",
    to: "/products",
    active: true,
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Cepillo de dientes",
    price: 100,
    image:
      "https://tikafarma.com/cdn/shop/products/Cepillo-dientes-madera-3_800x.jpg?v=1643237031",
  },
  {
    id: 2,
    name: "Cepillo de dientes",
    price: 200,
    image:
      "https://tikafarma.com/cdn/shop/products/Cepillo-dientes-madera-3_800x.jpg?v=1643237031",
  },
  {
    id: 3,
    name: "Cepillo de dientes",
    price: 300,
    image:
      "https://tikafarma.com/cdn/shop/products/Cepillo-dientes-madera-3_800x.jpg?v=1643237031",
  },
  {
    id: 1,
    name: "Cepillo de dientes",
    price: 100,
    image:
      "https://tikafarma.com/cdn/shop/products/Cepillo-dientes-madera-3_800x.jpg?v=1643237031",
  },
  {
    id: 2,
    name: "Cepillo de dientes",
    price: 200,
    image:
      "https://tikafarma.com/cdn/shop/products/Cepillo-dientes-madera-3_800x.jpg?v=1643237031",
  },
  {
    id: 1,
    name: "Cepillo de dientes",
    price: 100,
    image:
      "https://tikafarma.com/cdn/shop/products/Cepillo-dientes-madera-3_800x.jpg?v=1643237031",
  },
  {
    id: 2,
    name: "Cepillo de dientes",
    price: 200,
    image:
      "https://tikafarma.com/cdn/shop/products/Cepillo-dientes-madera-3_800x.jpg?v=1643237031",
  },
  {
    id: 3,
    name: "Cepillo de dientes",
    price: 300,
    image:
      "https://tikafarma.com/cdn/shop/products/Cepillo-dientes-madera-3_800x.jpg?v=1643237031",
  },
  {
    id: 1,
    name: "Cepillo de dientes",
    price: 100,
    image:
      "https://tikafarma.com/cdn/shop/products/Cepillo-dientes-madera-3_800x.jpg?v=1643237031",
  },
  {
    id: 2,
    name: "Cepillo de dientes",
    price: 200,
    image:
      "https://tikafarma.com/cdn/shop/products/Cepillo-dientes-madera-3_800x.jpg?v=1643237031",
  },
  {
    id: 3,
    name: "Cepillo de dientes",
    price: 300,
    image:
      "https://tikafarma.com/cdn/shop/products/Cepillo-dientes-madera-3_800x.jpg?v=1643237031",
  },
];
function NavigationUser({ items = DEFAULT }: NavigationUserProps) {
  const [openBag, setOpenBag] = useState(false);
  const [openUser, setOpenUser] = useState(false)
  const [openLike, setOpenLike] = useState(false);
  function openUserModal() {
    setOpenUser(!openUser);
  }
  function openProduct() {
    setOpenBag(!openBag);
  }
  function openLikeProduct() {
    setOpenLike(!openLike);
  }
  useEffect(() => {
    if (openBag || openLike) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openBag, openLike]);
  return (
    <>
      <div className={s.navigation}>
        <div className={s.user}>
          <ul className={s.user__list}>
            <li className={s.user__decoration}>VENTA</li>
            {items.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.to}
                  className={`${s.user__text} ${
                    item.active && `${s["user__text--active"]}`
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={s.user__actions}>
            <div className={s.user__input}>
              <input type="text" placeholder="Buscar..." />
              <IconSearch size={15} strokeWidth={3} />
            </div>
            <div className={s.user__actions__decoration}></div>
            <div className={s.actions}>
              <button className={s.user__button} onClick={openLikeProduct}>
                <IconHeart />
              </button>
              <button className={s.user__button} onClick={openProduct}>
                <IconShoppingBag />
              </button>
            </div>
            <button className={s.user__info} onClick={openUserModal}>
              <p>Harvey</p>
              <div className={s.user__button}>
                <IconUser />
              </div>
              <IconChevronDown size={16}/>
              {openUser &&  <ModalSettingsAllow />}
            </button>
          </ul>
        </div>
      </div>

      <LeftDropDown
        title="Bolsa de productos"
        setState={openProduct}
        products={PRODUCTS}
        state={openBag}
        Component={<SubTotal products={PRODUCTS} />}
        ProductComponent={<ProductBag products={PRODUCTS} />}
        image={<IconShoppingBag />}
      />
      <LeftDropDown
        title="Productos que te gustan"
        setState={openLikeProduct}
        products={PRODUCTS}
        state={openLike}
        ProductComponent={<ProductBag products={PRODUCTS} />}
        image={<IconShoppingBag />}
      />
    </>
  );
}
export default NavigationUser;
