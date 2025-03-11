import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-zinc-400 focus:border-black focus:ring-black transition duration-200"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-zinc-400 focus:border-black focus:ring-black transition duration-200"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-base font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-zinc-400 focus:border-black focus:ring-black transition duration-200"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 resize-none rounded-xl border border-zinc-400 focus:border-black focus:ring-black transition duration-200"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-black text-white py-4 px-6 rounded-xl font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
