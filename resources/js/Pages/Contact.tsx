import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Your message" className="w-full border p-2 rounded h-32"></textarea>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}