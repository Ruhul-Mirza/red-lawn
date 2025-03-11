import React, { useContext } from "react";
import { ShoppingBag, ChevronRight } from "lucide-react";
import { newArrivalCards } from "../utils";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function NewArrivalSection() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-2 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10 px-4 w-full max-w-7xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-red-900 tracking-tight">
              New Arrivals
            </h2>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
              Check out our latest collection
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <Link
              to="/new-arrival"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 font-medium text-sm sm:text-base transition-all duration-300 hover:bg-red-800 hover:shadow-lg hover:-translate-y-1"
            >
              View Collection
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {newArrivalCards.slice(0,4).map((newArrivalCard, index) => (
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
    </section>
  );
}

export default NewArrivalSection;
