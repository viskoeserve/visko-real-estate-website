import React from "react";
import heroImg from "../assets/Images/FractioHero.jpg";

const Tabsection = () => {
  return (
    <div>
      <section id="ourProduct" class="about">
        <div class="container">
          <div className="section-title">
            <h2>Our Product</h2>
          </div>
          <div class="row">
            <div class="col-xl-6 col-lg-7" data-aos="fade-right">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
                class="img-fluid h-100 w-100"
                alt=""
              />
            </div>
            <div class="col-xl-6 col-lg-5 pt-5 pt-lg-0">
              <h1 data-aos="fade-up" className=" fw-bold fs-2 mb-4">
                Fraction Realty
              </h1>
              <p data-aos="fade-up">
                Visko Real Estate Pvt Ltd is investing in land effortlessly with
                its state-of-the-art apps and websites like Fraction Realty.
                Fraction is here to bring ample cash flow via real estate
                investment. The platform lets its investors invest in properties
                by buying tokens using their digital gadgets like mobile
                devices, laptops, and tablets.
              </p>
              <p data-aos="fade-up">
                As the word suggests, fractional investing allows users to
                invest small amounts of money in real estate projects. This
                means multiple owners can own a single property through
                fractional ownership. That's why Fraction Realty provides its
                investors with a modern and inclusive approach to property
                ownership.
              </p>
              <p data-aos="fade-up">
                Through the Fraction Realty platform, Visko E-Serve Pvt Ltd aims
                to provide solutions related to property investment like
                Technical Integration and Professional Management, Creation of
                Investment Opportunities, Lower Entry Costs, Diversification,
                Access to Premium Properties, Easy Liquidity and Exit Options,
                and Income Distribution through the use of top-notch technology
                and agile approaches.
              </p>
              <div className=" d-flex justify-content-center  ">
                <button
                  className=" border-0 disabled "
                  type="button"
                  class="btn  btn-lg  "
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.visko.fraction_realty"
                    className=" text-light fw-semibold fs-6"
                  >
                  Get it on Playstore
                    <i class="fa fa-arrow-right ml-2" style={{ color: "white" }}></i>
                  </a>
                </button>
                {/* <button
                  type="button"
                  class="btn  btn-lg "
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.fraction.visko.real.estate"
                    className=" text-light fw-semibold fs-6"
                    target="_blank"
                  >
                    Get it on Playstore{" "}
                    <i class="fa fa-arrow-right" style={{ color: "white" }}></i>
                  </a>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tabs" className="tabs">
        <div className="container" data-aos="fade-up">
          <ul className="nav nav-tabs row d-flex">
            <li className="nav-item col-3">
              <a
                className="nav-link active show btn btn-lg "
                data-bs-toggle="tab"
                data-bs-target="#tab-1"
              >
                <i className="ri-gps-line"></i>
                <h4>LOOK AT THE FUTURE</h4>
              </a>
            </li>
            <li className="nav-item col-3">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#tab-2"
              >
                <i className="ri-body-scan-line"></i>
                <h4>OUR SOLUTIONS</h4>
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane active show" id="tab-1">
              <div className="row">
                <div
                  className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p>
                    Innovation is engrained in our company’s DNA. Our future
                    plans include incorporating special features relating to
                    mutual funds where investors would be able to invest as low
                    as Rs. 500 in real estate market to buy fractions in
                    properties. In future, we are also looking for adding
                    integration of technologies like augmented reality (AR) and
                    virtual reality (VR) to offer immersive property tours and
                    visualization experiences. This can enhance user engagement
                    and decision-making processes.
                  </p>
                </div>
                <div
                  className="col-lg-6 order-1 order-lg-2 text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    src="https://media.istockphoto.com/id/1251280798/photo/real-estate-business-growth-graph.jpg?s=612x612&w=0&k=20&c=4ZIg6_rCuT51OkwSYB5WO5Hf4J5P6jwroUL0Hf_Jpu8="
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-2">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Technical integration and professional management</h3>
                  <p>
                    Through our mobile application, users can select a range of
                    properties to invest from. Our application provides
                    transparent information about the properties, including
                    financial performance, potential risks, and historical data.
                    This transparency empowers investors to make informed
                    decisions based on comprehensive information;
                  </p>
                  <p className="fst-italic">
                    Through our mobile application, users can conduct thorough
                    market research and analysis to identify emerging trends,
                    potential growth areas, and lucrative investment
                    opportunities. Our application would also allow users to
                    compare fractional investing to investing large amount of
                    capital while buying land properties to help them better
                    understand the value of fractional investing.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="https://media.istockphoto.com/id/1130833057/photo/close-up-real-estate-agent-with-house-model-hand-putting-signing-contract-have-a-contract-in.jpg?s=612x612&w=0&k=20&c=gmE_XumwxXAhDK3OSFM14lKRPVkzX6ybQH8jmc8PUpA="
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tabsection;
