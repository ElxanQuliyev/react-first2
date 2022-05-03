import {applyMiddleware,combineReducers,createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { cartReducers } from "./Reducers/CartReducers";



const reducer=combineReducers({
    cart:cartReducers
});
const cartItemsLocalStorage=localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[]


const middleware=[thunk]

    const initialState={
        cart:{
            cartItems:cartItemsLocalStorage
        }
}

const store =createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

