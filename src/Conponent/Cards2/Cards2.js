import React from 'react'
import { NavLink } from 'react-router-dom'
import './cards2.css'
const Cards2 = () => {
    return (
        <>

            <div className='container'>

                <div className='cards2'>

                    <div className='card2'>
                        <h1>Почасовая <br /> оплата</h1>
                        <p className='sum'>45 р. - час</p>
                        <p className='title'>Доступно: <br />
                            Каталог игр <br />
                            Виртуальный ПК <br />
                            Безлимитная игровая сессия</p>

                        <div className='button-sum'>
                            <NavLink to={'/login'}><button className='btn2'> Выбрать</button></NavLink>
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
                            <NavLink to={'/login'}><button className='btn2'> Выбрать</button></NavLink>
                        </div>
                    </div>


                    <div className='card2'>
                        <h1>Подписка <br /> Минимум</h1>
                        <p className='sum'>1500 р. - месяц</p>
                        <p className='title'>Доступно: <br />
                            Каталог игр <br />
                            Игровая сессия 4 часов/день</p>
                        <div className='button-sum'>
                            <NavLink to={'/login'}><button className='btn2'> Выбрать</button></NavLink>
                        </div>
                    </div>

                </div>

                <div className='line-footer line__ff'>
                    <div className='line'></div>
                </div>

            </div>

        </>
    )
}

export default Cards2