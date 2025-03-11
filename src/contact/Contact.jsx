import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import FaqSection from '../components/FaqSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-[40vh] md:h-[60vh] mt-16 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1920")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex justify-center items-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              How Can We Help You Today?
            </h1>
            <p className="text-lg text-gray-200 mt-4">
              Our dedicated support team is here to assist you with any questions or concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 lg:p-12 transition">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
              {[
                { icon: Mail, label: 'Email', value: 'support@redlawn.com' },
                { icon: Phone, label: 'Phone', value: '+1 (890) 123-4567' },
                { icon: MapPin, label: 'Address', value: '123 Fashion Street, New York, NY 10001' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 md:space-x-6 border border-zinc-200 rounded-md p-3 group">
                  <div className="bg-black p-3 md:p-4 rounded-xl group-hover:scale-110 transition">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="group-hover:translate-x-2 transition">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-base md:text-lg text-gray-900 font-medium mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <ContactForm />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 lg:p-12 transition">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Common Questions</h2>
            <FaqSection />
          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-16 md:h-24"></div>
    </div>
  );
}

export default App;
