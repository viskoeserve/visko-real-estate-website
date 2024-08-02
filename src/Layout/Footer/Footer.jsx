import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/Visko_logo.png"
const Footer = () => {
  return (
  <>
  <footer id="footer">

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-4 col-md-6 footer-contact">
      <div className='logo-container'>
  <img src={logo} alt="Visko Real State Logo" style={{ width: "70px", height: "70px" }} />
  <h5>Visko Real State Private Limited</h5>
  <p>
        <br/>
        <br/>
          <strong>Phone:</strong> +91 9238154587<br/>
          <strong>Email:</strong> info@Visko.group<br/>
        </p>
</div>
        
        
      </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
      
          <li><i className="bx bx-chevron-right"></i> <a href="#contact">Privacy policy</a></li>
          <Link to={"/document"} className="get-started-btn scrollto" style={{marginLeft:"0px",color:"white"}}>Documents</Link>
        </ul>
      </div>

     
    </div>
  </div>
</div>


<div className="container d-md-flex py-4">


  <div className="social-links text-center text-md-end pt-3 pt-md-0">
    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
    <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
  </div>
</div>
</footer>
  
  </>
  )
}

export default Footer
