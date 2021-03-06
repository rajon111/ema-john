import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'

const Product = ({handleAddToCart,product}) => {
    // console.log(props);
    // const {name,img,seller,ratings,price} = props.product;
    // const {handleAddToCart} = props;
    const {name,img,seller,ratings,price} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h5>{name}</h5>
            <p>Price:${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Rattings:{ratings} stars</small></p>

           </div>
           <button onClick={()=>handleAddToCart(product)} className='btn-cart'><p className='btn-text'>Add To Cart</p>
           <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;