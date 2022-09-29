import React from 'react'
import NavBar from '../navBar/navBar'
import Jumbotron from '../jumbotron/jumbotron'
import Clickeo from '../Clickeo/clickeo'
import Footer from '../footer/footer'


const Home = () => {
  return (
    <>
    <NavBar/>
      <Clickeo/>
      <Jumbotron/>
      <Footer/>
    </>
  )
}

export default Home