import React from "react";
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import Our from "../Pages/Our";
import Tabsection from "../Pages/Tabsection";
import Contact from "../Pages/Contact";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Header/Navbar";


const Home = () => {
  return (
    <>
    <Navbar/>
      <section id="hero" className="d-flex align-items-center">

<div className="container" data-aos="zoom-out" data-aos-delay="100">
  <div className="row">
    <div className="col-xl-7" >
      <h1 className="fadeInRight"></h1>
      <h1><span style={{fontSize:"4rem",fontStyle:"poppins"}}>V</span>isko Real Estate Private Limted</h1>
      <h2>Visko Real Estate Pvt Ltd is a cutting-edge technology company renowned for developing innovative real estate applications to make property investment easy for everyone. </h2>
     
      <a href="#" className="btn-get-started scrollto fw-bolder">Comming Soon App Store</a>
      <a href="#" className="btn-get-started scrollto fw-bolder" style={{marginLeft:"20px",background:"white",border:"white",color:"black"}}>Coming Soon Play Store</a>
    </div>
  </div>
</div>

</section>
<AboutUs />
      <Services />
      <Our />
      <Tabsection />
      <Contact />
       <Footer />
    </>
  );
};

export default Home;
