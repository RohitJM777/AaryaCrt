import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Card from './Card'

function Cart() {
  const {cart}=useContext(CartContext)
  console.log(cart)

  return (
    <>
    {cart.length>0 && cart.map((product)=>{
        return <Card key={product?.id} id={product?.id} title={product?.title} price={product?.price} description={product?.description} category={product?.category} rating={product?.rating} image={product?.image} />
    })}
    </>
  )
}

export default Cart