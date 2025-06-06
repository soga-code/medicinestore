import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { HiShoppingCart } from 'react-icons/hi'; // Cart Icon from React Icons
import { AiOutlineSearch } from 'react-icons/ai'; // Search Icon from React Icons


export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 bg-green-600 text-white p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold"><span className='text-red-700 text-4xl'>Medi</span>Care+</h1>

        {/* Navigation Links (Center) */}
        <nav className="hidden md:flex space-x-8 mx-auto">
          <Link 
            href="/" 
            className="relative transition-all duration-300 hover:scale-110 transform after:block after:h-1 after:w-0 after:bg-white after:transition-all hover:after:w-full hover:after:duration-500"
          >
            Home
          </Link>
          <Link 
            href="/products" 
            className="relative transition-all duration-300 hover:scale-110 transform after:content-[''] after:block after:h-1 after:w-0 after:bg-white after:transition-all hover:after:w-full hover:after:duration-500"
          >
            Products
          </Link>
          <Link 
            href="/about" 
            className="relative transition-all duration-300 hover:scale-110 transform after:content-[''] after:block after:h-1 after:w-0 after:bg-white after:transition-all hover:after:w-full hover:after:duration-500"
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="relative transition-all duration-300 hover:scale-110 transform after:content-[''] after:block after:h-1 after:w-0 after:bg-white after:transition-all hover:after:w-full hover:after:duration-500"
          >
            Contact Us
          </Link>
        </nav>

        {/* Search Area */}
        <div className="relative flex items-center space-x-2 ml-4">
          <input
            type="text"
            placeholder="Search drugs here"
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 rounded-l-full border-2 border-white focus:outline-none"
          />
          <button className="bg-green-700 p-2 border-2 border-white rounded-r-full hover:bg-green-800 focus:outline-none transition-all">
            <AiOutlineSearch size={20} />
          </button>
        </div>

        {/* Cart Icon (Far end) */}
        <div className="relative ml-4">
          <Link 
            href="/cart" 
            className="relative transition-all duration-300 hover:text-green-200 hover:scale-125 transform"
          >
            <HiShoppingCart size={30} /> {/* Made the cart icon bigger */}
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              3 {/* This number should be dynamic based on cart items */}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
