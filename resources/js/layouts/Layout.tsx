import React from 'react';
import { Link } from '@inertiajs/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MediCare+</h1>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-green-200">Home</Link>
            <Link href="/products" className="hover:text-green-200">Products</Link>
            <Link href="/cart" className="hover:text-green-200">Cart</Link>
            <Link href="/about" className="hover:text-green-200">About Us</Link>
            <Link href="/contact" className="hover:text-green-200">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="bg-green-700 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} MediCare+. All rights reserved.</p>
      </footer>
    </div>
  );
}