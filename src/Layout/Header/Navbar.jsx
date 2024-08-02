import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/Images/Visko_logo.png"



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
  <>

<header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        {/* <h1 className="logo me-auto">
          <img src={logo} alt="Logo" className="img-fluid w-100 h-100" />
        </h1> */}

        <a href="index.html" className="logo me-auto">
          <img src={logo} alt="Logo" />
        </a>

        <nav id="navbar" className={`navbar order-last order-lg-0 ${isMobileMenuOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li><a className="nav-link scrollto active" href="#hero" onClick={closeMobileMenu}>Home</a></li>
            <li><a className="nav-link scrollto" href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a className="nav-link scrollto" href="#services" onClick={closeMobileMenu}>Services</a></li>
            <li><a className="nav-link scrollto" href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          <i
            className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle ${isMobileMenuOpen ? 'white-color' : ''}`}
            onClick={toggleMobileMenu}
          ></i>
        </nav>

        <Link to="" className="get-started-btn scrollto">Get Start</Link>
      </div>
    </header>

  </>
  )
}

export default Navbar
