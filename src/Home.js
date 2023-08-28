import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "./redux/CartSlice";
import { BsFillCartPlusFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';


const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState();

  const handleClick = (e) => {

    navigate(`./products/${props.id}`);
  };

  const addClick = () => { 
    toast.success('Item added to cart!' ,{
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
  })
    dispatch(addToCart(props));
  };

  return (
    <div className="product-card">
      <img src={props.image} alt="Product" className="product-image" />
      <div className="product-details">
        <p className="product-title">{props.title.substring(0, 20)}</p>
        <p className="product-price">${props.price}</p>

        <div className="button-container">
          <div className="clickable-icon" onClick={handleClick}>
            <AiOutlineArrowRight />
          </div>
          <div className="clickable-icon" onClick={addClick}>
            <BsFillCartPlusFill />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
