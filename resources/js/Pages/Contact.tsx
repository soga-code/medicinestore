import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '@/components/ContactForm';
import ContactHero from '@/components/ContactHero';

export default function Contact() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <ContactHero />
      <ContactForm />
      {/* <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h1>
        <form className="space-y-4" action="https://getform.io/f/bronxlpa" method="POST">
          <input type="text" placeholder="Name" name='name' className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" name='email' className="w-full border p-2 rounded" />
          <textarea placeholder="Your message" name="message" className="w-full border p-2 rounded h-32"></textarea>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Send</button>
        </form>
      </div> */}
      <Footer />
    </div>
  );
}