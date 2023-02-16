import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="jumbotron jumbotron-fluid my-5 ">
  <div className="container m-3">
    <h1 className="display-4">Contact </h1>
    <p className="lead">This is a Contact page.</p>
  </div>
</div>
    <Footer/>
    </>
  )
}

export default Contact