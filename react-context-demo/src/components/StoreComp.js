import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const StoreComp = () => {
  return (
    <>
    <Navbar/>
    <div className="jumbotron jumbotron-fluid my-5 ">
  <div className="container m-3">
    <h1 className="display-4">Store</h1>
    <p className="lead">This is a Store page.</p>
  </div>
</div>
    <Footer/>
    </>
  )
}

export default StoreComp