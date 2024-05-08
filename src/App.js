import React from 'react'
import Navbar from './GSMARENA/Header';
import Body from './GSMARENA/Body';
import Product from './GSMARENA/Buynw';
import Products from './GSMARENA/Fetching';




import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



const App=()=>{
return(
<>



     <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Body/>}></Route>
          
          <Route path='/Products' element={<Products/>}></Route>
          <Route path='/Products/:id' element={<Product/>}></Route>

        </Routes>
        
          </Router> 


</>
)
  
}

export default App
