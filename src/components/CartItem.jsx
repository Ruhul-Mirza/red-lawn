// src/components/CartItem.jsx

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-8 space-y-4">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
              <div>
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.discountprice}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartItem;
