import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Card({id,title,price,description,category,rating,image}) {

  const {addToCart}= useContext(CartContext)
  return (
    <>
     <div className="card">
        <img src={image} alt="" className="product_img" />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="category">{category}</div>
        <div className="price">{price}</div>
        <div className="rating">{rating?.rate}</div>
        <button onClick={()=>addToCart({id,title,price,description,category,rating,image})}>Add to Cart</button>
     </div>
    </>
  )
}

export default Card