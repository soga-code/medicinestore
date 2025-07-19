import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-green-600 p-4 text-white shadow-md transition-shadow duration-300 hover:shadow-xl">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <h1 className="text-3xl font-bold">
                    <span className="text-4xl text-red-700">Medi</span>Care+
                </h1>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav className={`w-full md:w-auto md:flex md:items-center md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:block`}>
                    <Link
                        href="/"
                        className="block transform text-center transition-all duration-300 after:block after:h-1 after:w-0 after:bg-white after:transition-all hover:scale-110 hover:after:w-full hover:after:duration-500"
                    >
                        Home
                    </Link>
                    <Link
                        href="/products"
                        className="block transform text-center transition-all duration-300 after:block after:h-1 after:w-0 after:bg-white after:transition-all hover:scale-110 hover:after:w-full hover:after:duration-500"
                    >
                        Products
                    </Link>
                    <Link
                        href="/about"
                        className="block transform text-center transition-all duration-300 after:block after:h-1 after:w-0 after:bg-white after:transition-all hover:scale-110 hover:after:w-full hover:after:duration-500"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="block transform text-center transition-all duration-300 after:block after:h-1 after:w-0 after:bg-white after:transition-all hover:scale-110 hover:after:w-full hover:after:duration-500"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Search + Cart + SignIn */}
                <div className="mt-4 flex w-full flex-col items-center space-y-4 md:mt-0 md:w-auto md:flex-row md:space-y-0 md:space-x-4">
                    {/* Search */}
                    <div className="flex w-full max-w-sm md:w-auto md:max-w-none items-center">
                        <input
                            type="text"
                            placeholder="Search drugs here"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full rounded-l-full border-2 border-white p-2 text-black focus:outline-none"
                        />
                        <button className="rounded-r-full border-2 border-white bg-green-700 p-2 transition-all hover:bg-green-800 focus:outline-none">
                            <AiOutlineSearch size={20} />
                        </button>
                    </div>

                    {/* Cart */}
                    <div className="relative">
                        <Link href="/cart" className="relative transform transition-all duration-300 hover:scale-125 hover:text-green-300">
                            <HiShoppingCart size={32} />
                            <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                                3
                            </span>
                        </Link>
                    </div>

                    {/* Sign In */}
                    <Link
                        href="/products"
                        className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-red-700 hover:bg-white hover:text-red-700 hover:ring-2 hover:ring-red-700"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </header>
    );
}
