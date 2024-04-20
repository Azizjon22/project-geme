import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import arrow from '../../../assets/icons/Arrow 3.png'
import './login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    const [passwordError, setPassworError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный емейл')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPassworError('Пароль должен быть длиннее 3 и меньше 8')
            if (!e.target.value) {
                setPassworError('Пароль не может быть пустым')
            }
        } else {
            setPassworError('')
        }
    }

    const bulurHendler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }


    return (
        <>
            <div className='container'>

                <div className='box'>
                    <div> <NavLink to={'/'}> <img src={arrow} alt='arrow' /></NavLink>  </div>
                    <h1>Регестрация</h1>
                    <p>Вход</p>
                </div>

                <div className='login'>
                    <form>
                        {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                        <div>
                            <input onChange={e => emailHandler(e)} value={email} onBlur={e => bulurHendler(e)} name='email' type='text' placeholder='Почта / Телефон' />
                        </div>
                        {(passwordError && passwordDirty) && <div style={{ color: 'red' }}>{passwordError}</div>}
                        <div>
                            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => bulurHendler(e)} name='password' type='password' placeholder='Пароль' />
                        </div>

                        <div className='form__button'>
                            <button disabled={!formValid} type='submit'>Зарегестрироваться</button>
                        </div>
                    </form>

                    <div className='chackboxx'>
                        <input type='checkbox' />
                        <p>
                            Я соглашаюсь со следующими установленными правилами:<br />
                            Политика использования файлов cookie WARPLAY.CLOUD,<br />
                            Пользовательское соглашение WARPLAY.CLOUD, Лицензионное <br />
                            соглашение MY.GAMES с конечным пользователем в отношении Игр, <br />
                            Лицензионное соглашение с конечным Пользователем для <br />
                            WARPLAY.CLOUD Игрового центра, Политика конфиденциальности <br />
                            портала WARPLAY.CLOUD, Политика конфиденциальности <br />
                            WARPLAY.CLOUD для детей <br />
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login