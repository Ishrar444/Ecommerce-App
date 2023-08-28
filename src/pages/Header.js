import React, { useEffect, useState } from 'react'
import "./Header.css"
import Slider from './Slider'
import { Link, useNavigate } from 'react-router-dom'

import{AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector, useDispatch } from 'react-redux'
import logo from "../pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099-removebg-preview.png"




const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const cartData = useSelector((state) => state.counter.cartitem
  )

    const [category ,setCategory]= useState("")
    const navigate = useNavigate()
    const handleClick =(e)=>{
        navigate("")

    }
    const  cartClick = ()=>{
      navigate("/cart")
    }
    
    const handleSearchSubmit = (e) => {
      e.preventDefault();
    { searchQuery.length>1&& navigate(`/search/${searchQuery}`); }
    };
  return (

<nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
  <div className="container-fluid">
  
    <img src={logo} style={{    height: "68px",
  marginLeft: "40px"}} alt='logo'/>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={handleClick}>
          <a className="nav-link active" aria-current="page" >
            Home
          </a>
        </li>
       
        <li className="nav-item dropdown">
    
   
        
        </li>
      
      </ul>
      <form className="d-flex" onSubmit={handleSearchSubmit} style={{
        marginRight:"16px"
      }}>
        <input
          className="form-control me-2"
          type="search"
          length={120}
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
   <button type="button" className="btn btn-primary position-relative" onClick={cartClick}  style={{
    marginRight:"2%"
   }}>
 <AiOutlineShoppingCart/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartData.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
   
      <div onClick={()=>{
        navigate("/register")
      }}>
      <h6  style={{
          marginBottom: "-10px",
          marginRight:"80px",
          cursor:"arrow"
    }}>Sign Up</h6>
    </div>

    </div>
  </div>

</nav>

  )
}

export default Header