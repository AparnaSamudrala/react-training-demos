import React, { useContext } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import {AuthContext} from '../App'


const About = () => {
    const value1 = useContext(AuthContext);
  return (
    <>
    <Navbar/>
    <div className="jumbotron jumbotron-fluid my-5 ">
  <div className="container m-3">
    <h1 className="display-4">About {value1} </h1>
    <p className="lead">This is an About page.</p>
  </div>
</div>
    <Footer/>
    </>
  )
}

export default About