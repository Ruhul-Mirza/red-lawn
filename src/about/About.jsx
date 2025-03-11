import React from 'react';
import { Heart, Star, Award, Truck } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pt-16">
      {/* Hero Section */}
      <div 
        className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage: 'url(\"https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80\")'
        }}
      >
        <div className="bg-black/60 p-10 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">Our Story</h1>
          <p className="text-lg md:text-2xl mt-4 max-w-2xl mx-auto">
            Crafting timeless elegance through sustainable fashion since 2015
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
        <p className="text-lg text-gray-600 font-semibold max-w-3xl mx-auto">
          We create fashion that transcends trends, embraces sustainability, and empowers you to express your unique style with confidence.
        </p>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            { icon: Heart, title: "Passion", desc: "Love for sustainable fashion" },
            { icon: Star, title: "Quality", desc: "Premium materials & craftsmanship" },
            { icon: Award, title: "Excellence", desc: "Industry-leading standards" },
            { icon: Truck, title: "Service", desc: "World-class customer care" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm transition duration-300 text-center">
              <item.icon className="w-12 h-12 text-red-900 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Our Leadership</h2>
        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { name: "Sarah Johnson", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { name: "Michael Chen", role: "Creative Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { name: "Emma Williams", role: "Head of Design", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
          ].map((person, i) => (
            <div key={i} className="text-center">
              <img src={person.img} alt={person.name} className="w-40 h-40 rounded-full mx-auto mb-6 ring-4 ring-red-900" />
              <h3 className="text-2xl font-semibold">{person.name}</h3>
              <p className="text-red-900 font-medium">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-900 text-white py-20">
        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto text-center">
          {[
            { number: "10+", label: "Years of Excellence" },
            { number: "50K+", label: "Happy Customers" },
            { number: "100%", label: "Sustainable Materials" }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-5xl font-bold">{stat.number}</p>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
