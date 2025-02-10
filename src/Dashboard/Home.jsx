
import React, { useState, useEffect } from "react";
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import Our from "../Pages/Our";
import Tabsection from "../Pages/Tabsection";
import Contact from "../Pages/Contact";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Header/Navbar";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      src: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w",
      text: "First Slide",
    },
    {
      src: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Second Slide",
    },
    {
      src: "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: "Third Slide",
    },
  ];

  useEffect(() => {
    // Set an interval to automatically change the slide every 3 seconds (3000ms)
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <div className="carousel" id="hero">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="carousel-caption text-left  "
              style={{ marginBottom: "20%", width: "60%" }}
            >
              <div className="row">
                <div className="col-xl-7">
                  <h1 className="fadeInRight"></h1>
                  <h1>
                    <p className="fw-extra-bold">
                      Visko Real Estate Private Limited
                    </p>
                  </h1>
                  <h2 className="">
                    Visko Real Estate Pvt Ltd is a cutting-edge technology
                    company renowned for developing innovative real estate
                    applications to make property investment easy for everyone.{" "}
                  </h2>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.visko.fraction_realty"
                    className="btn-get-started scrollto fw-bolder "
                  >
                    {" "}
                    <div
                      className="get-started-btn scrollto underline-none "
                      target="_blank "
                    >
                      Get it on Play Store
                      <i
                        class="fa fa-arrow-right"
                        style={{ color: "white" }}
                      ></i>
                    </div>
                  </a>
                  {/* <a href="https://play.google.com/store/apps/details?id=com.fraction.visko.real.estate" className="btn-get-started scrollto fw-bolder" style={{marginLeft:"20px",background:"white",border:"white",color:"black"}} target="_blank">Get it on Play Store <i class="fa fa-arrow-right" style={{color:"#000"}}></i></a> */}
                </div>
              </div>
            </div>
            <img
              src={images[index].src}
              alt="Slide"
              className="mx-auto w-100"
              style={{
                objectFit: "cover",
                maxHeight: "900px",
                opacity: 0.9, // Optional: Image ki opacity bhi kam kar sakte hain
              }}
            />
            <div
              className="overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.6)", // 0.3 ka matalab 30% transparency
              }}
            />
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={() =>
            setIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }
          className="carousel-control-prev"
        >
          {/* Add your previous icon */}
        </button>

        {/* Next Button */}
        <button
          onClick={() =>
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          className="carousel-control-next"
        >
          {/* Add your next icon */}
        </button>
      </div>

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
