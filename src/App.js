import React from 'react'
import Contact from './Conponent/pages/Contact/Contact'
import Cotalog from './Conponent/pages/kotalog/Cotalog'
import Login from './Conponent/pages/login/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home/Home'
import Dowland from './Conponent/pages/dowland/Dowland'
const App = () => {
  return (
    <div className='app'>

      <Router>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
             <Route path='/Cotalog' element={<Cotalog/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/dowland' element={<Dowland/>}/>
           </Routes>
      </Router>
    </div>
  )
}

export default App