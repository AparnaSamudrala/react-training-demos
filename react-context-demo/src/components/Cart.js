import React, { useContext } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import {AuthContext} from '../App';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const value1 = useContext(AuthContext);
    const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className="jumbotron jumbotron-fluid my-5 ">
  <div className="container m-3">
    <h1 className="display-4">Cart {value1}</h1>
    <p className="lead">Your cart is empty.</p>
    <button className='btn btn-primary' onClick={() => navigate("/home")}>Back to Home</button>
  </div>
</div>
    <Footer/>
    </>
  )
}

export default Cart