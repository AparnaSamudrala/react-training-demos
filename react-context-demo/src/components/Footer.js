import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>
  
  <div className="container pt-4">
    
    <section className="mb-4">
      
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fa fa-facebook-f"></i
      ></a>

      
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fa fa-twitter"></i
      ></a>

      
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fa fa-google"></i
      ></a>

     
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fa fa-instagram"></i
      ></a>

      
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fa fa-linkedin"></i
      ></a>
      
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fa fa-github"></i
      ></a>
    </section>
   
  </div>
  
  <div className="text-center text-dark p-3">
    &copy; 2023 Copyright.
    <a className="text-dark ms-2" href={"https://mdbootstrap.com/"}>All Rights Reserved</a>
  </div>
  
</footer>
  )
}

export default Footer