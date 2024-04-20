import React from 'react'
import sms from '../../assets/icons/sms.png'
import dow from '../../assets/icons/dowland cloud.png'
import pls from '../../assets/icons/pls.png'
import apply from '../../assets/icons/Apple Arcade.png'
import './cards.css'
const Cards = () => {
  return (
    <>

    <div className='container'>

        <div className='cards'>
            <div className='card card__a'>
                <div> <img src={sms} alt=''/></div>
                <p>Cоздайте аккаунт</p>
            </div>
            <div className='line line__a'></div>

            <div className='card card__b'>
                <div> <img src={dow} alt=''/></div>
                <p>Cкачайте модуль</p>
            </div>
            <div className='line line__b'></div>

            <div className='card card__c'>
                <div> <img src={pls} alt=''/></div>
                <p>Выберите тариф</p>
            </div>
            <div className='line line__d'></div>

            <div className='card card__d'>
                <div> <img src={apply} alt=''/></div>
                <p>Начни играть</p>
            </div>
        </div>

    </div>

    </>
  )
}

export default Cards