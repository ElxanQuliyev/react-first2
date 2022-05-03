import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const {cartItems}  = useSelector((st) => st.cart);
  console.log(cartItems);
  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.Id}>
              {item.name} - {item.price} Azn
            </li>
          ))}
        </ul>
      ) : (
        <p className="alert alert-danger">Səbətdə məshul yoxdur</p>
      )}
    </>
  );
};

export default CartPage;
