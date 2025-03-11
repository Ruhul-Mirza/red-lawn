import React, { useContext } from "react";
import { bestSellerCards } from "../utils";
import { CartContext } from "../context/CartContext";
import { ShoppingBag, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function BestSellerSection() {
  const { addToCart } = useContext(CartContext);
  const displayedCards = bestSellerCards.slice(0, 4);

  return (
    <section className="py-5">
      {/* Hero Section with Background Image */}
      <div className="relative mb-16 md:mb-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 max-w-7xl py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-[2px] bg-white/70" />
              <span className="text-white/90 uppercase tracking-[0.2em] text-sm font-medium">
                Featured Collection
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-200 mb-8 leading-[1]">
              Discover Our<br />Best Sellers
            </h1>
            <p className="text-md sm:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
              Explore our curated collection of best-selling products that have earned their place in the hearts of our discerning customers. Each piece reflects our commitment to quality and style.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {displayedCards.map((bestSellerCard, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={bestSellerCard.image}
                  alt={bestSellerCard.title}
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
                    {bestSellerCard.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900 whitespace-nowrap">
                    {bestSellerCard.discountprice}
                  </p>
                </div>
                
                <p className="text-sm text-gray-500 line-clamp-2">
                  {bestSellerCard.description}
                </p>
                
                <button
                  onClick={() =>
                    addToCart({
                      id: bestSellerCard.id,
                      title: bestSellerCard.title,
                      image: bestSellerCard.image,
                      discountprice: bestSellerCard.discountprice,
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

        {/* View More Button */}
        <div className="flex justify-center">
          <Link 
            to="/best-seller"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full hover:bg-black/90 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 font-medium text-lg">
              View All Best Sellers
            </span>
            <ChevronRight 
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
            />
            
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BestSellerSection;