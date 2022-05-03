import { createContext, useContext, useState } from "react";
import { BASE_URL } from "../api/BaseConfig";

const BasketContext=createContext();

const BasketProvider=({children})=>{
    const [cartItems,setCartItems]=useState([])
    const [pro,setPro]=useState(null);
    
    const cartAdd=(id,qty)=>{
        const existItem = cartItems.find(c=>c.id===id);
            fetch(`${BASE_URL}/product/${id}`).then(c=>c.json()).then(c=>setPro(c))
        if(pro){
            
            const item={
                id:pro.productId,
                name:pro.title,
                price:pro.priceNoDiscount,
                qty
            }
            if(existItem){
                setCartItems(cartItems.map(x=>x.id===existItem.id ?x:item ))
                console.log("salam")
            }else{
                setCartItems(c=>[...c,item])
            }
        }
    }
    const basketData={cartAdd,cartItems}

    return(
        <BasketContext.Provider value={basketData}>
            {children}
        </BasketContext.Provider>
    )
}

const useBasket=()=>useContext(BasketContext)

export {useBasket,BasketProvider}