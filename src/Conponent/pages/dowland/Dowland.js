import React from 'react'
import arrow from '../../../assets/icons/Arrow 3.png'
import windows from '../../../assets/img/Windows 10.png'
import mac from '../../../assets/img/Mac Client.png';
import linux from '../../../assets/img/Linux.png'
import chrome from '../../../assets/img/Chrome.png'
import './dowland.css'
import { NavLink } from 'react-router-dom';

const Dowland = () => {
    return (
        <>

            <div className='container'>
                <div className='Dowland'>

                    <div className='dowlant__title'>
                        <div> <NavLink to={'/'}><img src={arrow} alt='' /> </NavLink></div>
                        <h1>Выберете операционную систему</h1>
                    </div>

                    <div className='dowland__img'>
                        <div><img src={windows} alt='windows' /></div>
                        <div><img src={mac} alt='macbook' /></div>
                        <div><img src={linux} alt='linux' /></div>
                        <div><img src={chrome} alt='chrome' /></div>
                    </div>


                </div>


            </div>

        </>
    )
}

export default Dowland