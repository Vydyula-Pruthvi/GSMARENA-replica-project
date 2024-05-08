
import React,{useState,useEffect} from 'react';

import { Link } from 'react-router-dom';



const Products = () => {
const [data,setData]=useState([]);
const [filter,setFilter]=useState(data);
const [loading,setLoading]=useState(false);


useEffect(()=>{
    const getProducts = async()=>{
        setLoading(true);

        const response= await fetch("https://dummyapi.online/api/products");
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(data);
    }
getProducts();

},[])


const Loading = () => {
    return(
        <>
        <h1>Loading</h1>
        </>
    );
};

    const filterProducts = (cat) => {
    const updatedList = data.filter((x) => x.productCategory === cat);
    setFilter (updatedList);
}

const ShowProducts=()=>{
        return(
            <>
            
           <div className='buttons text-center my-5'>
            <button className='btn btn-outline-danger me-2' onClick={() => setFilter(data)}>All</button>
            <button className='btn btn-outline-danger me-2' onClick={() => filterProducts("Smartphone")}>SmartPhones</button>
            <button className='btn btn-outline-danger me-2' onClick={() => filterProducts("Tablet")}>Tablet's</button>
            <button className='btn btn-outline-danger me-2' onClick={() => filterProducts("Laptop")}>Laptop's</button>
            
            </div>
            

{filter.map((product)=>{
                return(
                    <>
                    <div className='col-md-3'>
                    <div className='card h-100'>
                   <img src={product.thumbnailImage} alt={product.title} height="300px"/>
                   
                   
                   <div className=' card-body'>
                   <span className='text-success  fw-bolder'><span className='text-dark fw-bolder'>Category: </span>{product. productCategory}</span><br/><br/>
                   
                    
                    <h3 className=' text-primary  fw-bolder'>{product.brand}</h3>

                    <h4 className='text-primary  fw-bolder'>{product.name}</h4><br/>
                    <h6 className='text-success'><h6 className='text-danger fw-bolder'>Display type: </h6>{product.display}</h6>
                    <span className='text-success'><span className='text-danger fw-bolder'>Type Of CPU: </span>{product. CPU}</span><br/>
                    <span className='text-success'><span className='text-danger fw-bolder'>Storage Options: </span>{product. storageOptions}</span><br/>
                    
                    
                    <span className='text-success'><span className='text-danger fw-bolder'>Available Colours: </span> {product. colorOptions}</span>
                    <h6>{product. inStock}</h6>
                   <span className='text-success'><span className='text-danger fw-bolder'>In Stock Available: </span>{product. stock}</span><br/><br/>

                   <p className='card-text text-danger fw-bolder'>Rs.{product.basePrice}</p>
                

                    <div className='card-title'>{product.rating}</div>
                    
                    
                    <Link to={`/products/${product.id}`} className='btn btn-outline-primary fw-bolder'> Buy now </Link>

                   </div>
                    </div>
                    </div>
                    </>
                )
            })}


            
            </>
        )
        }

    return(
        
        <div>
            <div className='container py-3 my-3'>
                <div className='row'>

            <div className='col-sm-12'>
                <h2 className='display-4 text-center text-light m-2'> Latest Trending</h2>
            </div><br/>
        <div className='row'>

        {loading ? <Loading /> : <ShowProducts />}

        </div>

                </div>
            </div>
        </div>
        
    )
}



export default Products