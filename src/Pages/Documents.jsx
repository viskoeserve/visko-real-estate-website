import React from 'react'
import "../assets/Scss/documents.css"
import { Link } from 'react-router-dom'

const Documents = () => {
  return (
 <>
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">
   
      <h1 className="logo me-auto"><a href="index.html">Visko Real Estate Private Limited<span></span></a></h1>
    
      <a href="index.html" className="logo me-auto"><img src="" alt=""/></a>

      <nav id="navbar" className="navbar order-last order-lg-0">
      
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <Link to="/" className="get-started-btn scrollto">Back To Home</Link>
    </div>

  </header>
<h2 style={{marginTop:"100px",textAlign:"center",color:"red"}}>Documents</h2>
<div>
<h1 className='a1'>Visko Real Estate Private Limited Documents</h1>
<div class="wrapper">
<div class="media">
<div class="layer">
    <p className='des'>+Adhar</p>
  </div>
<img src="https://media.gcflearnfree.org/content/596658ce8444e81d1ca6cde0_07_12_2017/businessformat_image2.jpg" alt="" />
</div>
<div class="media">
<div class="layer">
    <p className='des'>+Adhar</p>
  </div>
<img src="https://media.gcflearnfree.org/content/596658ce8444e81d1ca6cde0_07_12_2017/businessformat_image2.jpg" alt="" />
</div>
<div class="media">
<div class="layer">
    <p className='des'>+Adhar</p>
  </div>
<img src="https://media.gcflearnfree.org/content/596658ce8444e81d1ca6cde0_07_12_2017/businessformat_image2.jpg" alt="" />
</div>
</div>


<div class="wrapper">
<div class="media">
<div class="layer">
    <p className='des'>+Adhar</p>
  </div>
<img src="https://media.gcflearnfree.org/content/596658ce8444e81d1ca6cde0_07_12_2017/businessformat_image2.jpg" alt="" />
</div>
<div class="media">
<div class="layer">
    <p className='des'>+Adhar</p>
  </div>
<img src="https://media.gcflearnfree.org/content/596658ce8444e81d1ca6cde0_07_12_2017/businessformat_image2.jpg" alt="" />
</div>
<div class="media">
<div class="layer">
    <p className='des'>+Adhar</p>
  </div>
<img src="https://media.gcflearnfree.org/content/596658ce8444e81d1ca6cde0_07_12_2017/businessformat_image2.jpg" alt="" />
</div>
</div>



</div>
 


 </>
  )
}

export default Documents
