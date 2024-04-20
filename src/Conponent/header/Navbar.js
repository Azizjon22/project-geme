import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import logo from './../../assets/icons/logo.png'
import arrow from '../../assets/icons/Arrow 3.png';
import './navbar.css'
const Navbar = () => {

  const [isOpen ,setIsOpen] = useState(false)
  return (
    <>
      <div className='container'>
        <header className='header'>
          <div ><NavLink to={'/'}> <img src={logo} alt='' /> </NavLink></div>
          <nav className='navbar' onClick={() => setIsOpen(!isOpen)}>
            <ul className={`ul_li ${isOpen && "open"}` }>
              <li className='main-navigation-item'> <NavLink to={'/'}>Главная</NavLink></li>
              <li className='main-navigation-item'> <NavLink>Сервера</NavLink> </li>
              <li className='main-navigation-item'><NavLink to={'/dowland'}>Скачать </NavLink></li>
              <li className='main-navigation-item'><NavLink> Открыть в браузере</NavLink></li>
              <li className='main-navigation-item'><NavLink to={'/cotalog'}>Цены</NavLink></li>
              <li className='main-navigation-item'> <NavLink>Тех поддержка</NavLink></li>
              <li className='main-navigation-item'> <NavLink to={'/Contact'}>Контакты</NavLink></li>
            </ul>
          </nav>
          <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <div className='bar'></div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar