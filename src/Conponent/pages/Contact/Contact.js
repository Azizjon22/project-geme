import React from 'react'
import { NavLink } from 'react-router-dom';
import arrow from '../../../assets/icons/Arrow 3.png';
import telegram from '../../../assets/icons/telegram.png';
import insta from '../../../assets/icons/insta.png';
import github from '../../../assets/icons/github.png';
import './contact.css'



const Contact = () => {
  return (
    <>

       <div className='container'>
        
                 <div className='box'>
                  <div> <NavLink to={'/'}> <img src={arrow} alt='arrow'/></NavLink>  </div>
                  <h1>Контакты</h1>
                </div>

                <div className='contact-content'>
                  <div className='tel'> 
                    <h1>tel: <NavLink to={'tel:'}>+998(95)100-10-66</NavLink></h1>
                  </div>

                  <div className='contact__img'>
                    <div> <NavLink to={'https://t.me/AzizYakubjonov'} > <img src={telegram} alt='telegram'/></NavLink></div>
                    <div> <NavLink to={'https://instagram.com/azizdev_'}> <img src={insta} alt='instagram'/></NavLink></div>
                    <div> <NavLink to={'https://github.com/Azizjon22'}> <img src={github} alt='github'/></NavLink></div>
                  </div>
                </div>
       </div>
    </>
  )
}

export default Contact