import React, { useState } from 'react';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className="border border-gray-300 rounded-md px-4 py-2 w-full text-sm text-gray-800 focus:outline-none focus:border-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border border-gray-300 rounded-md px-4 py-2 w-full text-sm text-gray-800 focus:outline-none focus:border-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">Message:</label>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" cols="50" required className="border border-gray-300 rounded-md px-4 py-2 w-full text-sm text-gray-800 focus:outline-none focus:border-blue-500"></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-lg font-semibold mb-2">Location:</label>
          <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required className="border border-gray-300 rounded-md px-4 py-2 w-full text-sm text-gray-800 focus:outline-none focus:border-blue-500" />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
      </form>
    </div>
  );
};

export default Contacts;
