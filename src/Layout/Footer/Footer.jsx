import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/Visko_logo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className=" bg-dark text-white py-4">
          <div className=" item text-center py-3">
            <img
              className=""
              src={logo}
              alt="Visko Real State Logo"
              style={{ width: "70px", height: "80px" }}
            />
          </div>

          <div className="  ">
            <ul className="d-flex  justify-content-center list-unstyled gap-5 py-3 fw-   ">
              <li>
                <i></i>{" "}
                <a href="#hero" className=" text-white fs-5  ">
                  Home
                </a>
              </li>

              <li>
                <i></i>{" "}
                <a href="#about" className=" text-white fs-5 ">
                  About us
                </a>
              </li>

              <li>
                <i></i>{" "}
                <a href="#services" className="text-white fs-5 ">
                  Services
                </a>
              </li>

              <li>
                <i></i>{" "}
                <a href="#contact" className="text-white fs-5 ">
                  Contact
                </a>
              </li>

              <li>
                <i></i>{" "}
                <a
                  href="https://www.fractionrealty.in/privacy_policy"
                  target="_blank"
                  className="text-white fs-5 "
                >
                  Privacy policy
                </a>
              </li>
              {/* <Link to={"/document"} className="get-started-btn scrollto" style={{marginLeft:"0px",color:"white"}}>Documents</Link> */}
            </ul>
          </div>
          <div className=" item text-center  ml-4   mb-4">
            <strong>Phone:</strong> +91 9238154587
            <strong className=" ml-4  ">Email: </strong>{" "}
            info@viskorealestate.com
          </div>

          <div className="  text-center py-2 gap-5 d-flex justify-content-center ">
            <a
              className="text-light bg-danger py-1.5 px-2 rounded"
              href="https://x.com/FractionRealty"
              target="_blank"
            >
              <i className="bi bi-twitter fs-4 "></i>
            </a>

            <a
              className="text-light bg-danger py-1.5 px-2 rounded"
              href="https://www.facebook.com/Fractionrealty"
              target="_blank"
            >
              <i className="bi bi-facebook fs-4"></i>
            </a>

            <a
              className="text-light bg-danger py-1.5 px-2 rounded"
              href=" https://www.linkedin.com/company/fraction-realty"
              target="_blank"
            >
              <i className="bi bi-linkedin fs-4 "></i>

            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
