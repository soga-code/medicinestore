import React from 'react';
import { Link } from '@inertiajs/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white pt-12 pb-6 px-4 md:px-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 text-sm">
        {/* Logo & About */}
        <div>
        <h1 className="text-3xl font-bold"><span className='text-red-700 text-4xl'>Medi</span>Care+</h1>
          <p className="mb-4">
            MediCare+ is your trusted online pharmacy. We provide safe, certified medicines delivered to your doorstep with care and convenience.
          </p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-green-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-300"><FaTwitter /></a>
            <a href="#" className="hover:text-green-300"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-green-300 transition">Home</Link></li>
            <li><Link href="/products" className="hover:text-green-300 transition">Products</Link></li>
            <li><Link href="/cart" className="hover:text-green-300 transition">Cart</Link></li>
            <li><Link href="/about" className="hover:text-green-300 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-green-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaPhone className="text-green-300" />
              <span>+234 123 456 7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-green-300" />
              <span>support@medicareplus.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-300" />
              <span>123 Health St, Lagos, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Get health tips and updates delivered to your inbox.</p>
          <form className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 round text-white bg-green-800 focus:outline-none focus:border-green-300 transition" 
            />
            <button 
              type="submit" 
              className="bg-white text-green-700 font-semibold py-2 rounded hover:bg-green-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-green-500 pt-4 text-sm">
        &copy; {new Date().getFullYear()} MediCare+. All rights reserved.
      </div>
    </footer>
  );
}
