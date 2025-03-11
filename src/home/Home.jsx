import React, { useEffect } from 'react';
import background from "../../images/herobg.png"
import { ArrowRight, Star } from 'lucide-react';
import BrideCollection from '../components/BrideCollection';
import NewArrivalSection from '../components/NewArrivalSection';
import BestSellerSection from '../components/BestSellerSection';

function Home() {
  
  useEffect(() => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.classList.add('opacity-100');
    }
  }, []);

  return (
    <>
      <section 
        id="hero-section" 
        className="px-4 py-20 md:py-28 transition-opacity duration-1000 opacity-0 bg-white/95"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 pt-5">
            <div className="w-full sm:w-4/5 lg:w-1/2 relative">
              {/* Main image with decorative elements */}
              <div className="relative z-10 rounded-lg overflow-hidden transform transition-transform duration-500">
                <img 
                  src={background}
                  alt="Fashion design studio" 
                  className="w-full h-auto" 
                  loading="lazy" 
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-black rounded-full opacity-5 z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-black rounded-full opacity-5 z-0"></div>
            </div>
            
            <div className="lg:w-1/2">
              {/* Testimonial badge */}
              <div className="flex items-center mb-6 bg-gray-100 rounded-full py-2 px-4 w-fit">
                <div className="flex text-yellow-500 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-red-800 font-medium">Trusted by 1000+ clients</p>
              </div>
              
              {/* Main heading with highlight */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Welcome to {""}
                <span className="relative inline-block text-red-800">
                  Red
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 opacity-40 -z-10"></span>
                </span> 
                <span className="block mt-2 text-red-800">Lawn</span>
              </h1>
              
              <p className="text-lg text-gray-600 mt-6 leading-relaxed max-w-xl">
                Discover the latest fashion trends and styles with our team of expert fashion designers. 
                We blend creativity with craftsmanship to bring your vision to life.
              </p>
              
              <div className="mt-8">
                <a 
                  href="#services" 
                  className="bg-red-800 text-white py-3 px-6 rounded-md inline-flex items-center gap-2 transition-transform hover:translate-y-[-2px] shadow-md"
                >
                  Explore Our Services
                  <ArrowRight size={18} />
                </a>
              </div>
            
            </div>
          </div>
        </div>
      </section>
      <BrideCollection/>
      <NewArrivalSection/>
      <BestSellerSection/>
    </>
  );
}

export default Home;