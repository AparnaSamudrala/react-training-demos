import "./App.css";
import { createContext } from "react";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import StoreComp from "./components/StoreComp";
import About from "./components/About";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";

export const AuthContext = createContext();

function App() {
  const username = "Aparna";
  return (
    <div className="body">
      <AuthContext.Provider value={username}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />} />
          <Route path="/store-locator" element={<StoreComp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
