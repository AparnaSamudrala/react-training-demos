import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="jumbotron jumbotron-fluid my-5 ">
  <div className="container m-3">
    <h1 className="display-4">Login</h1>
    <p className="lead">This is a Login page.</p>
  </div>
</div>
    <Footer/>
    </>
  )
}

export default Login