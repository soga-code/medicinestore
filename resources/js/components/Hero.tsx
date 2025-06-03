// components/Hero.tsx
import React from 'react';
import { Link } from '@inertiajs/react';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-32 text-center"
      style={{ backgroundImage: "url('/images/Heroimg1.jpg')" }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-emerald-500/80 z-0"></div> */}

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4 drop-shadow">Your Trusted Online Pharmacy</h2>
        <p className="text-lg mb-6 drop-shadow">Order your medicines safely, conveniently, and quickly.</p>
            <Link href="/products" className="rounded-full bg-red-700 px-12 py-2 font-semibold text-white hover:ring-2 hover:ring-red-700 hover:bg-white hover:text-red-700">
                Shop Now
            </Link>
      </div>
    </section>
  );
}





