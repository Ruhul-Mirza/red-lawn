import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all unworn items with original tags attached. Returns must be initiated within 30 days of delivery.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days within the continental US. Express shipping (1-2 business days) is available at checkout for an additional fee.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. International shipping times vary by location and typically take 7-14 business days.'
  },
  {
    question: 'How do I track my order?',
    answer: "Once your order ships, you'll receive a tracking number via email. You can track your package using this number on our website or the carrier's website."
  },
  {
    question: 'What sizes do you offer?',
    answer: 'We offer sizes XS through XXL in most styles. Please refer to our size guide for detailed measurements to find your perfect fit.'
  },
  {
    question: 'How do I care for my garments?',
    answer: 'Care instructions are provided on the label of each garment. Generally, we recommend washing in cold water and hanging to dry for best results.'
  },  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days within the continental US. Express shipping (1-2 business days) is available at checkout for an additional fee.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. International shipping times vary by location and typically take 7-14 business days.'
  },
  {
    question: 'How do I track my order?',
    answer: "Once your order ships, you'll receive a tracking number via email. You can track your package using this number on our website or the carrier's website."
  },
  {
    question: 'What sizes do you offer?',
    answer: 'We offer sizes XS through XXL in most styles. Please refer to our size guide for detailed measurements to find your perfect fit.'
  },

];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition duration-200"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-lg font-medium text-gray-900">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
