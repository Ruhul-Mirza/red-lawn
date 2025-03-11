import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2, ArrowRight, Package, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

function CartItem() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const cost = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.discountprice?.replace(/[^0-9.]/g, "") || "0");
      return acc + price * (item.count || 1);
    }, 0);

    const itemCount = cartItems.reduce((acc, item) => acc + (item.count || 1), 0);

    setTotalCost(cost);
    setTotalItems(itemCount);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50/50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-md">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse"></div>
              <Package className="w-12 h-12 text-red-900 relative z-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
              <p className="text-gray-500 text-sm">
                Add items to your cart to start your shopping journey
              </p>
            </div>
            <Link to="/" className="w-full bg-black text-white py-4 rounded-2xl hover:bg-gray-900 transition-colors duration-200 font-medium">

            <button >
              Browse Products
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pt-28 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-sm font-semibold text-gray-500">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <button className="text-sm hidden sm:block font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Continue Shopping
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-100">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="group p-6 sm:p-8 hover:bg-gray-50/50 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="relative aspect-square w-full sm:w-32 rounded-2xl overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="font-medium text-gray-900 line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="inline-flex items-center rounded-lg border border-gray-200">
                          <button 
                            onClick={() => decreaseQuantity(item.id)}
                            className="p-2 hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 text-gray-900 font-medium">
                            {item.count || 1}
                          </span>
                          <button 
                            onClick={() => increaseQuantity(item.id)}
                            className="p-2 hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-lg font-semibold text-gray-900">
                        {item.discountprice || "N/A"}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex justify-between text-base text-gray-500">
                <span>Subtotal</span>
                <span>₹{totalCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base text-gray-500">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="flex justify-between text-lg font-semibold text-gray-900">
                <span>Total</span>
                <span>₹{totalCost.toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-8 w-full bg-black text-white py-4 rounded-2xl hover:bg-gray-900 transition-colors duration-200 font-medium flex items-center justify-center gap-2">
              Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;