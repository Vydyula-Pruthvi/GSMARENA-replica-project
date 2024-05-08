import React,{useState,useEffect} from 'react';
import { UseSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = () => {
  
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);

    
    useEffect(()=>{
        const getProduct=async()=>{
            setLoading(true);
            const response=await fetch(`https://dummyapi.online/api/products/${id}`)
            setProduct(await response.json());
            setLoading(false);}
            getProduct();
        },[]);
        
        const Loading=()=>{
            return(
                <>
            <h1>Loading...</h1>            
                </>
            )
        }
    
    const ShowProduct = ()=>{
        return(
            <>
    
                


<div className='col-md-6'>
                
                   <img src={product.thumbnailImage} alt={product.title} height="300px"/>
                </div>   
                   
        <div className='col-md-6'>
                
                   <span className='text-success  fw-bolder'><span className='text-dark fw-bolder'>Category: </span>{product. productCategory}</span><br/><br/>
                    
                    <h2 className=' text-primary fw-bolder'>{product.brand}</h2>

                    <h4 className='text-primary fw-bolder'>{product.name}</h4><br/>
                    <h6 className='text-success'><h6 className='text-danger fw-bolder'>Display type: </h6>{product.display}</h6>
                    <span className='text-success'><span className='text-danger fw-bolder'>Type Of CPU : </span>{product. CPU}</span><br/>
                    <span className='text-success'><span className='text-danger fw-bolder'>Storage Options: </span>{product. storageOptions}</span><br/>
                    
                    
                    <span className='text-success'><span className='text-danger fw-bolder'>Available Colours: </span> {product. colorOptions}</span>
                    <h6>{product. inStock}</h6>
                   <span className='text-success'><span className='text-danger fw-bolder'>In Stock Available: </span>{product. stock}</span><br/><br/>

                   <p className='card-text text-danger fw-bolder'>Rs.{product.basePrice}</p>
                

                    <div className='card-title'>{product.rating}</div>
                    
</div>
            </>
        )
    }
    
                     return(
                    <div>
                     <div className='container py-5'>
                      <div className='row py-5'>
                       {loading ?<Loading/>:<ShowProduct/>}

                    </div>
                     </div>
                     </div>
    )
    
    }

export default Product

