import {applyMiddleware,combineReducers,createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { cartReducers } from "./Reducers/CartReducers";
import { languageReducers } from "./Reducers/LanguageReducers";



const reducer=combineReducers({
    cart:cartReducers,
    language:languageReducers
});
const cartItemsLocalStorage=localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[]

const languageLocalStorage=localStorage.getItem("mainLang")?JSON.parse(localStorage.getItem("mainLang")):"AZ"
const middleware=[thunk]
    const initialState={
        cart:{
            cartItems:cartItemsLocalStorage
        },
        currentLang:languageLocalStorage
}

const store =createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

