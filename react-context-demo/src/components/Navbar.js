import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
   return (
    <div>
      <nav className="navbar navbar-expand-lg bg-hotpink py-3 shadow-sm" style={{backgroundColor: "black"}}>
        <div className="container">
          <NavLink className="navbar-brand text-white fw-bold fs-4" to="/">
          <img src={"https://bizrights.com/wp-content/uploads/2017/08/kaira-logo.jpg"} alt="logo" width="35" height="35" className="d-inline-block align-text-top me-2" />
            Kaira
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/store-locator">
                  Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
             {/* <NavLink to="/" className="btn ms-2">
              <i className="fa fa-sign-in me-1" style={{color: 'honeydew',fontSize: 30}}></i>
              </NavLink> */}
              <NavLink to="/home" className="btn ms-2">
              <i className="fa fa-home me-1" style={{color: 'honeydew',fontSize: 30}}></i>
              </NavLink>
              <NavLink to="/products" className="btn ms-2">
              <i className="fa fa-product-hunt" aria-hidden="true" style={{color: 'honeydew',fontSize: 30}}></i>
              </NavLink>
              <NavLink to="/contact" className="btn ms-2">
              <i className="fa fa-phone me-1" style={{color: 'honeydew',fontSize: 30}}></i>
              </NavLink>
              
              <NavLink to="/cart" className="btn ms-2">
                <i className="fa fa-shopping-bag me-1" style={{color: 'honeydew',fontSize: 30}}>
                <sup>{0}</sup>
                
                </i> 
              </NavLink>
              <NavLink to="/about" className="btn ms-2">
              <i className="fa fa-users me-1" style={{color: 'honeydew',fontSize: 30}}></i>
              </NavLink>
              <NavLink to="/store-locator" className="btn ms-2">
              <i className="fa fa-map-marker me-1" style={{color: 'honeydew',fontSize: 30}}></i>
              </NavLink>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;