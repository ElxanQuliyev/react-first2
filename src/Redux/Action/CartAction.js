import { BASE_URL } from "../../api/BaseConfig"
import { ADDTOCART } from "../Constants/CartConstants"

export const addToCart=(id,qty)=>async (dispatch,getState)=>{
    const data = await((await fetch(`${BASE_URL}/product/${id}`)).json())
    dispatch({
        type:ADDTOCART,
        payload:{
            id:data.productId,
            name:data.title,
            price:data.priceNoDiscount,
            qty
        }
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}
