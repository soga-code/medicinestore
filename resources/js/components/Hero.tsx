import React from 'react';
import { Link } from '@inertiajs/react';

export default function Hero() {
  return (
    <section className="hero bg-gradient-to-r from-green-500 to-emerald-400 text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Your Trusted Online Pharmacy</h2>
      <p className="text-lg mb-6">Order your medicines safely, conveniently, and quickly.</p>
      <Link href="/products" className="bg-white text-green-700 px-6 py-2 rounded-full font-semibold shadow hover:bg-green-100">Shop Now</Link>
    </section>
  );
}