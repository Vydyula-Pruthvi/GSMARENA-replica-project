import React from 'react'

import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
    
    <div className='container-fluid'>
        <div className='row'>

    <div className='col-sm-1'>
    <nav class="navbar navbar-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>


        
      </ul>
    </div>
  </div>
</nav>
    </div>


        </div>
    </div>
    
    
    
    
    </>
  )
}

export default Navbar