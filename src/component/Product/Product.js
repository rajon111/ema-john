import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const{name,img,seller,ratings,price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h5>{name}</h5>
            <p>Price:${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Rattings:{ratings} stars</small></p>

           </div>
           <button className='btn-cart'><p>Add To Cart</p></button>
        </div>
    );
};

export default Product;