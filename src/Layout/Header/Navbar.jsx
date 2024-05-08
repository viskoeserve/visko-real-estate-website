import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <>
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">
   
      <h1 className="logo me-auto"><a href="">Visko Real Estate Private Limited<span></span></a></h1>
    
      <a href="index.html" className="logo me-auto"><img src="" alt=""/></a>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
       
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <Link to="" className="get-started-btn scrollto">Get Start</Link>
    </div>

  </header>

  </>
  )
}

export default Navbar
