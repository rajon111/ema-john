import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product,handleRemoveProduct}) => {
    const {name,img,price,quantiy,shipping} =product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-con'>
                <p className='product-name'>{name}</p>
                <p>{price}</p>
                <p>{shipping}</p>
                <p>{quantiy}</p>
            </div>
            <div className='delete-container'>
                <button onClick={()=>handleRemoveProduct(product)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default ReviewItem;