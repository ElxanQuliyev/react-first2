import React from 'react'
import {Routes,Route} from "react-router-dom"
import CartPage from '../pages/CartPage';
import Home from "../pages/Home";
import NotFound from '../pages/NotFound';
import ProductDetail from '../pages/ProductDetail';
const MyRoutes = () => {
  
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/mehsullar/:id' element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="*" element={<NotFound/>}/>

    </Routes>
  )
}

export default MyRoutes