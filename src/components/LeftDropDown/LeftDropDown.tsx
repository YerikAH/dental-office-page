import { IconX } from "@tabler/icons-react";
import s from "./LeftDropDown.module.css";
import { LeftDropDownProps } from "../../interface/props";

function LeftDropDown(
  { title, setState, products, state, image, Component, ProductComponent }:
    LeftDropDownProps,
) {
  return (
    <div className={`${s.modal} ${state && `${s["modal--active"]}`}`}>
      <></>
      <div className={s.modal__contain}>
        <div className={s.modal__contain__title}>
          <h2>{title}</h2>
          <button onClick={() => setState()}>
            <IconX />
          </button>
        </div>
        <div className={s.modal__contain__products}>
          {ProductComponent}
        </div>

        {products.length === 0 && (
          <div className={s.modal__nothere}>
            <>
              {typeof image === "string"
                ? <img src={image} alt="not found" />
                : image}
            </>
            <h4>No hay productos en la bolsa</h4>
            <button onClick={() => setState()}>Volver a la tienda</button>
          </div>
        )}
        {products.length !== 0 && Component}
      </div>
    </div>
  );
}
export default LeftDropDown;
