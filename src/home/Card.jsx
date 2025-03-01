import React from "react";
import { shoppingCards } from "../utils";

function Card() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {shoppingCards.map((shoppingCard, index) => (
        <div key={index} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="relative p-2.5 h-50 overflow-hidden rounded-xl bg-clip-border">
            <img
              src={shoppingCard.image}
              alt={shoppingCard.title}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-black text-xl font-semibold">{shoppingCard.title}</p>
              <p className="text-black text-xl font-semibold">{shoppingCard.discountprice}</p>
            </div>
            <p className="text-gray-500 leading-normal font-light">
              {shoppingCard.description}
            </p>
            <button
              className="rounded-md w-full mt-6 bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:opacity-80 cursor-pointer"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
