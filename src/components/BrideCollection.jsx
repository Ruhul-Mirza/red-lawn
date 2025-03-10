import React, { useEffect, useState } from "react";

const BrideCollection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="bride-collection"
      className="relative py-32 min-h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className={`lg:w-1/2 ml-auto text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block bg-red-800/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
            Exclusive Collection
          </div>

          <h2 className="text-5xl font-bold mb-3">Bride Collection</h2>
          <div className="w-24 h-1 bg-red-800 mb-8"></div>

          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Our exclusive bride collection features exquisite designs that
            combine traditional elegance with modern sophistication. Each piece
            is crafted with meticulous attention to detail, ensuring that every
            bride feels extraordinary on her special day.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="border-2 border-white text-red-800 bg-white py-3 px-8 rounded-md font-medium transition-all hover:bg-white/80"
            >
              View Collection
            </a>
            <a
              href="#"
              className="border-2 border-white text-white py-3 px-8 rounded-md font-medium transition-all hover:bg-white/20"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>
  );
};

export default BrideCollection;
