import React from 'react'
import './footer.css'
import logofooter from '../../assets/icons/logoFooter.png'
import tg from '../../assets/icons/tg.png'
import vk from '../../assets/icons/VK com.png'
import ds from '../../assets/icons/Discord.png'
import you from '../../assets/icons/YouTube.png'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>


      <div className='container'>

        <div className='ff'>
          <div className='footer'>

            <div className='footer__left'>
              <div className='footer__left__img'>
                <img src={logofooter} alt='logo' />
              </div>

              <div className='footer__left__year'>
                <h1>2022. All rights reserved.</h1>
              </div>

              <div className='footer__left__tg'>
                <p>Design by desart</p>
                <div>
                  <img src={tg} alt='' />
                </div>
              </div>

            </div>

            <div className='footer__right'>
              <p>Политика конфиденциальности</p>
              <p>Файлы Coocie</p>
              <NavLink to={'/Contact'}>
                <p className='mobi__footer__mobi'>Контакты</p>
              </NavLink>

              <div className='footer__icons'>
                <div><img src={vk} alt='vk' /></div>
                <div> <img src={ds} alt='disbled' /></div>
                <div><img src={you} alt='youtobe' /></div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default Footer