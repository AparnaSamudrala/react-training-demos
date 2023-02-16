import React from 'react'
import Loader from './Loader';
import Navbar from './Navbar'
import { NavLink } from "react-router-dom";
import useFetch from "../customhook/useFetch";
import Footer from './Footer';

const Home = () => {
    const [data,loading] = useFetch("https://fakestoreapi.com/products");
  return (
    <>
    <Navbar/>
    
    {!loading ? (
            data.map((product) => (
              <NavLink to="/products" className="text-decoration-none text-dark fw-bold fs-4"  key={product.id}>
                <div className="m-2 p-5">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="200px"
                    width="100px"
                    style={{objectFit: 'contain'}}
                  />
                  <h5 className="card-title mb-0 my-5">{product.title}</h5>
                </div>
              </NavLink>
            ))
          ) : (
            <div className="row justify-content-center">
                    <Loader/>
            </div>
            
          )}
          <Footer/>
    </>
  )
}

export default Home