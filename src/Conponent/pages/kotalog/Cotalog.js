import React from 'react'
import { NavLink } from 'react-router-dom'
import arrow from '../../../assets/icons/Arrow 3.png'
import './cotolog.css'
const Cotalog = () => {
  return (
    <>
      <div className='container'>

        <div className='box'>
          <div> <NavLink to={'/'}> <img src={arrow} alt='arrow' /></NavLink>  </div>
          <h1>Доступные подписки</h1>
        </div>
        <div className='cards2 globol'>

          <div className='card2'>
            <h1>Почасовая <br /> оплата</h1>
            <p className='sum'>45 р. - час</p>
            <p className='title'>Доступно: <br />
              Каталог игр <br />
              Виртуальный ПК <br />
              Безлимитная игровая сессия</p>

            <div className='button-sum'>
              <NavLink to={'/login'}>
                <button className='btn2'> Выбрать</button>
              </NavLink>
            </div>
          </div>


          <div className='card2 active'>
            <h1>Подписка <br /> Максимум</h1>
            <p className='sum'>2999 р. - месяц</p>
            <p className='title'>Доступно: <br />
              Каталог игр <br />
              Виртуальный ПК <br />
              Игровая сессия 10 часов/день</p>


            <div className='button-sum'>
              <NavLink to={'/login'}>
                <button className='btn2'> Выбрать</button>
              </NavLink>
            </div>
          </div>


          <div className='card2'>
            <h1>Подписка <br /> Минимум</h1>
            <p className='sum'>1500 р. - месяц</p>
            <p className='title'>Доступно: <br />
              Каталог игр <br />
              Игровая сессия 4 часов/день</p>
            <div className='button-sum'>
              <NavLink to={'/login'}>
                <button className='btn2'> Выбрать</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cotalog