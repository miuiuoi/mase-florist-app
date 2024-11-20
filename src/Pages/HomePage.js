import React from 'react'
import Navbar from '../Components/HomePage/Navbar'
import Hero from '../Components/HomePage/Hero'
import NewProduct from '../Components/HomePage/NewProduct'
import Workshop from '../Components/HomePage/Workshop'
import Thanks from '../Components/HomePage/Thanks'
import Footer from '../Components/HomePage/Footer'

export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <NewProduct/>
        <Workshop/>
        <Thanks/>
        <Footer/>
    </div>
  )
}
