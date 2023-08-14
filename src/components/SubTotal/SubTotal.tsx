import s from './SubTotal.module.css'
import {SubTotalProps} from '../../interface/props'
import { Product } from '../../interface/interface'
import { numberToPrice } from '../../helpers/helpers';

function SubTotal({products}: SubTotalProps){
  function convertPrice(price: number) {
    const newPriceRound = Math.round(price);
    const priceToString = numberToPrice(newPriceRound);
    return `S/${priceToString}`
  }
  function calcSubTotal(productArg: Product[]){
    const prices = productArg.map(item => item.price )
    const total = prices.reduce((a,b) => a+b)
    return convertPrice(total)
  }
  return (
    <div className={s.content}>
      <div className={s.content__subtotal}>
        <h2>SUBTOTAL</h2>
        <p>{calcSubTotal(products)}</p>
      </div>
      <div className={s.content__actions}>
        <button>Volver a la tienda</button>
        <button>Finalizar compra</button>
      </div>
    </div>
  )
}
export default SubTotal
