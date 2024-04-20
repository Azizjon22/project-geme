import React from 'react'
import Cards2 from '../Conponent/Cards2/Cards2'
import Footer from '../Conponent/footer/Footer'
import GameCards from '../Conponent/game/GameCards'
import Navbar from '../Conponent/header/Navbar'
import Content from '../Conponent/main/Content'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Content/>
    <Cards2/>
    <GameCards/>
    <Footer/>
    </>
  )
}

export default Home