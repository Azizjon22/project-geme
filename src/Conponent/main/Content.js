import React from 'react'
import rasm from '../../assets/img/glavni.png'
import rasm2 from '../../assets/icons/3d.png'
import mob from '../../assets/img/mobilimg.png'
import logo2 from '../../assets/icons/logo2.png'
import './content.css'
import Cards from '../cards/Cards'
import { NavLink } from 'react-router-dom'
const Content = () => {
    return (
        <>

            <div className='container'>
                <div className='content'>

                    <div className='content-img'>
                        <div className='img-abc'>
                            <img src={rasm} alt='geroy' />
                            <p className='p'>сервис облачного гейминга</p>
                            <h1 className='h1'>Преврати свое устройство в игровое</h1>
                            <NavLink to={'/login'}>
                                <button className='btn'> UPGRADE</button></NavLink>
                        </div>
                    </div>

                   <div className='content__img_res'>
                   <div className='img-abc2'>
                            <img src={mob} alt='geroy' />
                            <p className='pp'>сервис облачного гейминга</p>
                            <h1 className='h11'>Преврати свое<br/> устройство в <br/> игровое</h1>
                            <NavLink to={'/login'}>
                                <button className='btnn'> UPGRADE</button></NavLink>

                                <NavLink to={'/'}>
                                <img className='logo2' src={logo2} alt=''/></NavLink>
                        </div>
                   </div>

                    <div className='content-3d'>
                        <div><img src={rasm2} alt='' /></div>

                        <div className='content-title'>
                            <div className='line-title'>
                                <div className='line'></div>
                                <h4>Облачный гейминг</h4>
                            </div>
                            <h1>Как это работает</h1>
                            <p className='dsplayB'>Наши сервера запускают игру, и передают <br />
                                вам картинку, которой вы можете управлять <br />
                                в реальном времени!</p>
                            <div className='line2 lina-none'></div>
                            <p>Приложение запустится на ПК с процессором <br />
                                от 1.5 GHz , от 1 Gb RAM и доступом в интернет<br />
                                от 15 мбит/с на всех операционых системах <br />
                                Windows 7, 8, 10 MacOS и Linux .</p>

                            <h5 className='dow wod'><NavLink to={'/dowland'}>Загрузить</NavLink></h5>
                        </div>
                        
                    </div>

                    <div className='article article5'>
                        <div className='article-line'>
                            <div className='line'></div>
                            <h5><a href='#'>Быстрый старт</a></h5>
                        </div>

                        <h4>Начни играть</h4>
                    </div>

                </div>
            </div>

            <Cards />

            <div className='container'>

                <div className='fight'>
                    <h3>Начать</h3>
                    <p className='line'></p>
                </div>

                <div className='article article2'>
                    <div className='article-line'>
                        <div className='line'></div>
                        <h5><a href='#'>Гибкие тарифы</a></h5>
                    </div>

                    <h4>Доступные подписки</h4>
                </div>

            </div>
        </>
    )
}

export default Content