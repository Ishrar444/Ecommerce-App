import React, { useState ,useEffect} from 'react'
import {  useParams, Link} from 'react-router-dom'
import axios from "axios"
import { Helmet } from 'react-helmet'
import Loader from './Loader'

const DetailPage = () => {
    let {id}= useParams() 
    console.log("paramss",id)
    const[product,setProduct] =useState([])
    const[isloading,setIsloading] = useState(true)
     const getProduct=()=>{
    try  {  axios.get(`https://fakestoreapi.com/products/${id}`).then((response)=>{
       setProduct(response.data)
       setIsloading(false)

        })}catch(err){
    console.log("errrrrrorrrrr",err)
        }
     }
   
    useEffect(() => {
        
        getProduct();
      
    }, []);
  
  return (
    <>
    <Helmet>
        
        <title>{product.title}</title>
    </Helmet>
  { isloading?(<Loader/>) :<div className="row d-flex justify-content-center">
        <div className="col-md-12">
            <Link className="text-decoration-none text-dark" to={`/`}>
                <div className="d-flex align-items-center m-3">
                    <i className="fa fa-long-arrow-left"></i>
                    <span className="ml-1">&nbsp;Back</span>
                </div>
            </Link>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4">
                                <img id="main-image" alt="product" src={product.image} width="250" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="border p-4">
                            <div className="mt-4 mb-3">

                            <span className="text-muted text-capitalize"> in {product.category}</span>

                                <h5 className="text-uppercase">
                                    {product.title}
                                </h5>

                                Rating {product.rating && product.rating.rate}
                                <i className="fa fa-star text-warning"></i>

                                <div className="price d-flex flex-row align-items-center">
                                    <big className="display-6"><b>${product.price}</b></big>
                                </div>
                            </div>
                            <p className="text-muted">{product.description}</p>
                            <div className="cart mt-4 align-items-center"> <button className="btn btn-outline-dark text-uppercase mr-2 px-4">Buy</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>}
</>
  )
}

export default DetailPage