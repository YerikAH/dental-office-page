import s from './BtnWhatsApp.module.css'
import {IconBrandWhatsapp} from '@tabler/icons-react'

function BtnWhatsApp(){
  return <button className={s.button}>
    <IconBrandWhatsapp size={24} color='white'/>
    <p>Chatea con nosotros en WhatsApp</p>
  </button>
}
export default BtnWhatsApp