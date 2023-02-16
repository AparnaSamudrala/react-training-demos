import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Product = () => {
  return (
    <>
    <Navbar/>
    <div className="jumbotron jumbotron-fluid my-5 ">
  <div className="container m-3">
    <h1 className="display-4">Product</h1>
    <p className="lead">This is a Product page.</p>
  </div>
</div>
    <Footer/>
    </>
  )
}

export default Product