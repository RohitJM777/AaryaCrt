import { createContext, useState } from "react";


export const CartContext=createContext()

export function CartContextWrapper({children}){
    const [cart,setCart]=useState([]);

    function addToCart(item){
        setCart([...cart,item])
    }

    return(
        <>
         <CartContext.Provider value={{addToCart,cart}}>
            {children}
        </CartContext.Provider> 
        </>
    )
}