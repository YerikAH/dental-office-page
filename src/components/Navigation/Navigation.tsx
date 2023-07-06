import s from './Navigation.module.css'
import { Link } from 'react-router-dom'
import { IconMenu2 } from '@tabler/icons-react'
import { useState } from 'react'
import { NavigationProps } from '../../interface/props'
import NavigationMobile from '../NavigationMobile/NavigationMobile'


function Navigation({ items, logo}: NavigationProps){
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }
  return ( 
    <>
      <header>
        <nav className={s.nav}>
          <div className={s.nav__logo}>
            <li><Link to='/' tabIndex={1}><img src={logo} alt="logo"/></Link></li>
          </div>
          <ul className={s.nav__pages}>
            { items.map((item,idx) => (
            <li key={idx}><Link to={item.path} tabIndex={1} className={item.active ? `${s.nav__link} ${s['nav__link--active']}` : `${s.nav__link}`}>{item.label}</Link></li>
            ))}
          </ul>
          <div className={s.nav__pages}>
            <li><Link to='/' tabIndex={1} className={`${s.nav__link} ${s['nav__link--bold']}`}>(+51) 991 231 912</Link></li>
            <li><Link to='/' tabIndex={1} className={`${s.nav__link} ${s.nav__button}`}>agendar una cita</Link></li>
          </div>
          <button className={s.nav__ham} tabIndex={1} onClick={toggleMenu}>
            <IconMenu2 size={18}/>
          </button>
        </nav>
         <NavigationMobile items={items} logo={logo} state={menu} setState={toggleMenu}/> 
        
      </header> 
    </>
    )
}

export default Navigation

