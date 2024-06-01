import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import Pub from '../../components/pub/Pub'
import Product from '../../components/product/Product'
import Footer from '../../components/footer/Footer'
import './home.css'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Banner/>
      <Pub/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default Home
