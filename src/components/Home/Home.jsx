import React from 'react'
import NavBar from '../navBar/navBar'
import Jumbotron from '../jumbotron/jumbotron'
import Clickeo from '../Clickeo/clickeo'
import Footer from '../footer/footer'
import PopularMenu from '../popular-menu/PopularMenu';


const Home = () => {
  return (
    <>
    <NavBar/>
      <Clickeo/>
      <PopularMenu/>      
      <Footer/>
    </>
  )
}

export default Home