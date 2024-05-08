import React from 'react'

const Services = () => {
  return (
    <div>
      <section id="services" className="services section-bg ">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>PROBLEMS THAT WE AIM TO SOLVE</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-briefcase"></i>
              <h4><a href="#">High upfront costs</a></h4>
              <p>A significant down payment is typically required to secure a property, which can be a major hurdle for many investors, especially first-time ones. This also includes closing costs which can include fees for loan origination, title insurance, inspections, and other services, adding to the initial financial burden</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-card-checklist"></i>
              <h4><a href="#">Less Investment Opportunities</a></h4>
              <p>Some people are afraid of real estate investment debt because it involves taking on financial obligations that can be significant and long-term. General mistrust of financial markets, lack of market knowledge, fear of overpaying and investing large amounts in properties is what investors are worried about.</p>

            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-bar-chart"></i>
              <h4><a href="#">Market volatility</a></h4>
              <p>Real estate markets can fluctuate, and property values may not always appreciate as expected. Downturns can lead to losses, especially if huge investments are leveraged with loans</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-binoculars"></i>
              <h4><a href="#">Legal and regulatory risks</a></h4>
              <p>Real estate transactions and ownership are subject to a complex web of laws and regulations. Investors need to be aware of potential legal issues such as zoning restrictions, building codes, and tenant rights</p>
            </div>
          </div>
         
       
        </div>

      </div>
    </section>
    </div>
  )
}

export default Services
