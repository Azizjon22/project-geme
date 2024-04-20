import React from 'react'
import './gameCards.css'
import rasm from '../../assets/img/footer.png'
import karta from '../../assets/icons/footer3d.png'
import rasm2 from '../../assets/img/imgmobb.png'

const GameCards = () => {
    return (
        <>
            <div className='container'>


                <div className='game_B'>

                    <div className='game_title'>
                        <div className='game_header mobi__h'>
                        <div className='line'></div>
                        <h5>Играть можно в браузере</h5>
                        </div>

                        <h2 className='com1'>Запускайте на любых <br />
                            устройствах</h2>

                            <h2 className='mobi1'>Запускайте на <br/> любых
                            устройствах</h2>

                            <h4 className='com1'>Наш модуль доступен на все популярные ОС <br/>
                             и работает на всех компьютерах.</h4>

                             <h4 className='mobi1 mobi__p'>Наш модуль доступен на <br/> все популярные ОС <br/>
                             и работает на всех 11<br/> компьютерах.</h4>

                             <div className='footer__line mobi__pp'>
                                <h6>Открыть в браузере</h6>
                                <p className='line'></p>
                             </div>
                    </div>


                    <div className='game_img'>
                        <div className='image'>
                            <img className='rasm' src={rasm} alt=''/>
                            <img className='rasm2' src={rasm2} alt='img'/>
                        </div>
                    </div>
                </div>



                <div className='footer__karta'>

                   <div className='footer__karta__title'>
                    <p className='line'></p>
                    <h6>Игровые сервера на карте</h6>
                   </div>

                   <div className='footer__karta__img'>
                    <div>
                        <img src={karta} alt=''/>
                    </div>
                   </div>

                </div>


            </div>
        </>
    )
}

export default GameCards