import React from 'react'
import About from '../About/About'
import Categories from '../Categories/Categories'
import Footer from '../Footer/Footer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import LandPage from '../LandPage/LandPage'

const Home = () => {
  return (
    <>
    <LandPage/>
    <Categories/>
    <ItemListContainer/>
    <Footer/>
    </>
  )
}

export default Home