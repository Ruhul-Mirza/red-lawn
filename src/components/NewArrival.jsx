import React from 'react';
import { ArrowRight, Star, ShoppingCart } from 'lucide-react';

const newArrivals = [
  {
    id: '1',
    name: 'Premium Leather Backpack',
    price: '$129.99',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=1000',
    tag: 'New',
    description: 'Handcrafted Italian leather.'
  },
  {
    id: '2',
    name: 'Wireless Earbuds Pro',
    price: '$199.99',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=1000',
    tag: 'Trending',
    description: 'Active noise cancellation with premium sound'
  },
  {
    id: '3',
    name: 'Smart Watch Series X',
    price: '$299.99',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=1000',
    tag: 'Featured',
    description: 'Advanced health tracking with elegant design'
  },
  {
    id: '4',
    name: 'Designer Sunglasses',
    price: '$159.99',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=1000',
    tag: 'Limited',
    description: 'Timeless style with UV protection'
  }
];

function NewArrival() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-red-900 mb-4 tracking-tight">
              New Arrivals
            </h2>
            <p className="text-base text-gray-500">
              Discover our latest collection of premium products, carefully curated for the discerning customer
            </p>
          </div>
          <button className="mt-6 md:mt-0 group flex items-center gap-2 text-gray-900 px-3 py-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors">
            <span className="font-medium">View Collection</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
                  {item.tag}
                </span>
              </div>
              <div className="p-6 space-y-4">
                
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-gray-900">{item.price}</p>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white hover:scale-110 transition-transform">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrival;
