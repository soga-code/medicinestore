import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Search Icon from React Icons
import { HiShoppingCart } from 'react-icons/hi'; // Cart Icon from React Icons

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <header className="sticky top-0 z-50 bg-green-600 p-4 text-white shadow-md transition-shadow duration-300 hover:shadow-xl">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-3xl font-bold">
                    <span className="text-4xl text-red-700">Medi</span>Care+
                </h1>

                {/* Navigation Links (Center) */}
                <nav className="mx-auto hidden space-x-8 md:flex">
                    <Link
                        href="/"
                        className="relative transform transition-all duration-300 after:block after:h-1 after:w-0 after:bg-white after:transition-all hover:scale-110 hover:after:w-full hover:after:duration-500"
                    >
                        Home
                    </Link>
                    <Link
                        href="/products"
                        className="relative transform transition-all duration-300 after:block after:h-1 after:w-0 after:bg-white after:transition-all after:content-[''] hover:scale-110 hover:after:w-full hover:after:duration-500"
                    >
                        Products
                    </Link>
                    <Link
                        href="/about"
                        className="relative transform transition-all duration-300 after:block after:h-1 after:w-0 after:bg-white after:transition-all after:content-[''] hover:scale-110 hover:after:w-full hover:after:duration-500"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="relative transform transition-all duration-300 after:block after:h-1 after:w-0 after:bg-white after:transition-all after:content-[''] hover:scale-110 hover:after:w-full hover:after:duration-500"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Search Area */}
                <div className="relative ml-4 flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search drugs here"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="rounded-l-full border-2 border-white p-2 focus:outline-none"
                    />
                    <button className="rounded-r-full border-2 border-white bg-green-700 p-2 transition-all hover:bg-green-800 focus:outline-none">
                        <AiOutlineSearch size={20} />
                    </button>
                </div>

                {/* Cart Icon (Far end) */}
                <div className="relative ml-4">
                    <Link href="/cart" className="relative transform transition-all duration-300 hover:scale-125 hover:text-green-400">
                        <HiShoppingCart size={30} />
                        <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                            3 {/* This number should be dynamic based on cart items */}
                        </span>
                    </Link>
                </div>
                <Link
                    href="/products"
                    className="ml-4 rounded-full bg-white px-10 py-2 font-semibold text-red-700 hover:bg-white hover:text-red-700 hover:ring-2 hover:ring-red-700"
                >
                    Sign In
                </Link>
            </div>
        </header>
    );
}
