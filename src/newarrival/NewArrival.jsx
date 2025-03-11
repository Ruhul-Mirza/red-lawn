import React, { useState, useContext } from "react";
import { newArrivalCards } from "../utils";
import { CartContext } from "../context/CartContext";
import { ShoppingBag, Heart, ChevronDown } from "lucide-react";

function NewArrival() {
  const { addToCart } = useContext(CartContext);
  const [sortOption, setSortOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const parsePrice = (price) => {
    return parseFloat(price.replace(/[^0-9.]/g, ""));
  };

  const sortProducts = (products) => {
    switch (sortOption) {
      case "price-high-to-low":
        return [...products].sort((a, b) => parsePrice(b.discountprice) - parsePrice(a.discountprice));
      case "price-low-to-high":
        return [...products].sort((a, b) => parsePrice(a.discountprice) - parsePrice(b.discountprice));
      case "a-to-z":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return products;
    }
  };

  const getSortLabel = () => {
    switch (sortOption) {
      case "price-high-to-low":
        return "Price: High to Low";
      case "price-low-to-high":
        return "Price: Low to High";
      case "a-to-z":
        return "A to Z";
      default:
        return "Sort By";
    }
  };

  return (
    <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 pt-28">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <h1 className="text-5xl font-bold text-red-900 p-4 tracking-tight">New Arrivals</h1>
        
        <div className="relative w-full p-4 sm:w-52">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white px-4 py-2.5 rounded-xl border border-gray-200 flex items-center justify-between text-sm font-medium text-gray-700 hover:border-zinc-100 focus:outline-none transition-all"
          >
            <span>{getSortLabel()}</span>
            <ChevronDown
              size={16}
              className={`transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          
          {isOpen && (
            <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100 py-1 animate-in fade-in slide-in-from-top-2">
              <button
                className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors ${
                  sortOption === "" ? "text-gray-900 font-medium" : "text-gray-600"
                }`}
                onClick={() => {
                  setSortOption("");
                  setIsOpen(false);
                }}
              >
                Sort By
              </button>
              <button
                className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors ${
                  sortOption === "price-high-to-low" ? "text-gray-900 font-medium" : "text-gray-600"
                }`}
                onClick={() => {
                  setSortOption("price-high-to-low");
                  setIsOpen(false);
                }}
              >
                Price: High to Low
              </button>
              <button
                className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors ${
                  sortOption === "price-low-to-high" ? "text-gray-900 font-medium" : "text-gray-600"
                }`}
                onClick={() => {
                  setSortOption("price-low-to-high");
                  setIsOpen(false);
                }}
              >
                Price: Low to High
              </button>
              <button
                className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors ${
                  sortOption === "a-to-z" ? "text-gray-900 font-medium" : "text-gray-600"
                }`}
                onClick={() => {
                  setSortOption("a-to-z");
                  setIsOpen(false);
                }}
              >
                A to Z
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortProducts(newArrivalCards).map((newArrivalCard, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
          >
            <div className="relative overflow-hidden rounded-2xl mb-4">

              <img
                src={newArrivalCard.image}
                alt={newArrivalCard.title}
                className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
                  {newArrivalCard.title}
                </h3>
                <p className="text-lg font-semibold text-gray-900 whitespace-nowrap">
                  {newArrivalCard.discountprice}
                </p>
              </div>
              
              <p className="text-sm text-gray-500 line-clamp-2">
                {newArrivalCard.description}
              </p>
              
              <button
                onClick={() =>
                  addToCart({
                    id: newArrivalCard.id,
                    title: newArrivalCard.title,
                    image: newArrivalCard.image,
                    discountprice: newArrivalCard.discountprice,
                  })
                }
                className="w-full bg-gray-900 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors duration-200"
              >
                <ShoppingBag size={18} />
                <span className="font-medium">Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrival;