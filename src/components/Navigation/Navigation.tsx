import logo from '../../assets/logo.png'
import s from './Navigation.module.css'
import { Link } from 'react-router-dom'

const PAGES = [
  {
    path: '/',
    label: 'Inicio',
    active: true
  },
  {
    path: '/',
    label: 'Servicios',
    active: false
  },
  {
    path: '/',
    label: 'Contactanos',
    active: false
  }
]

function Navigation(){
  return <>
    <header>
      <nav className={s.nav}>
        <div className={s.nav__logo}>
          <li><Link to='/' tabIndex={1}><img src={logo} alt="logo"/></Link></li>
        </div>
        <ul className={s.nav__pages}>
          { PAGES.map((item,idx) => (
            <li key={idx}><Link to={item.path} tabIndex={1} className={item.active ? `${s.nav__link} ${s['nav__link--active']}` : `${s.nav__link}`}>{item.label}</Link></li>
          ))}
        </ul>
        <div className={s.nav__pages}>
          <li><Link to='/' tabIndex={1} className={`${s.nav__link} ${s['nav__link--bold']}`}>(+51) 991 231 912</Link></li>
          <li><Link to='/' tabIndex={1} className={`${s.nav__link} ${s.nav__button}`}>agendar una cita</Link></li>
        </div>
        <button className={s.nav__ham}></button>
      </nav>
    </header> 
  </>
}

export default Navigation

