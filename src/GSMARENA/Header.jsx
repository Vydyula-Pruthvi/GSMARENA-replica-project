import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    
    <div className='container'>
        <div className='row bg-body-tertiary'>

    <div className='col-sm-1'>
    <nav class="navbar navbar-lg  bg-body-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      
      
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        
          <a class="nav-link active" aria-current="page" href="#">NEWS</a>
        
       
          <a class="nav-link active" aria-current="page" href="#">REVIEWS</a>

          <a class="nav-link active" aria-current="page" href="#">VIDEOS</a>
          <a class="nav-link active" aria-current="page" href="#">FEATURED</a>
          <a class="nav-link active" aria-current="page" href="#">PHONE FINDER</a>
          <a class="nav-link active" aria-current="page" href="#">DEALS</a>
          <a class="nav-link active" aria-current="page" href="#">MERCH</a>
          <a class="nav-link active" aria-current="page" href="#">COVERAGE</a>
          <a class="nav-link active" aria-current="page" href="#">CONTACT</a>

        
      
    </div>
  </div>
</nav>
    </div>

    <div className='col-sm-1' id='mrgn'>
        <img src='https://cdn.freelogovectors.net/wp-content/uploads/2022/01/gsmarena-logo-freelogovectors.net_.png' width={200} height={30}/>

        </div>

    <div className='col-sm-4'>
    <nav class="navbar bg-body-light">
  <div class="container-fluid">
    <form class="d-flex m-1" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      
    </form>
  </div>
</nav>
    </div>

<div className='col-sm-4' id='word'>
  <div className='row'>

<div className='col-sm-1'>
<i class="fa-solid fa-lightbulb"></i>
</div>
<div className='col-sm-1'>

<i class="fa-brands fa-youtube"></i>
</div>
<div className='col-sm-1'>

<i class="fa-brands fa-instagram"></i>

</div>
<div className='col-sm-1'>

<i class="fa-solid fa-rss"></i>
</div>
<div className='col-sm-1'>

<i class="fa-solid fa-truck-front"></i>
</div>
<div className='col-sm-1'>
<i class="fa-solid fa-cart-shopping"></i>
</div>
<div className='col-sm-1'>

<i class="fa-solid fa-user-plus"></i>
</div>

</div>
</div>
    </div>
    </div>

    
    <div className='container'>
      <div className='row m-2'>
<img src='https://secure-ds.serving-sys.com/resources/PROD/asset/49364/IMAGE/20240217/18685_Tabs-S9-Banner_970x90_set1_17feb23_85800134490738420.jpg'/>

</div></div>

</>
)
}

export default Navbar