import React from 'react';
import { Link } from '@inertiajs/react';

export default function PharmacyChat() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed min-h-[500px] flex items-center mt-10"
      style={{
        backgroundImage: "url('/images/Heroimg1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full px-6 md:px-20 lg:px-36 py-16">
        <div className="max-w-2xl ml-auto text-white text-left">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-green-600">Need Help?</h3>
          <h3 className="text-lg sm:text-2xl font-bold mb-8">
            Have questions about your prescriptions, side effects, or drug interactions?
            <br className="hidden sm:block" />
            Chat with our certified pharmacist now. We're available 24/7.
          </h3>
          <Link
            href="/contact"
            className="bg-red-700 text-white font-semibold px-6 py-2 rounded-full hover:ring-2 hover:ring-red-700 hover:text-red-700 hover:bg-white transition"
          >
            Start Chat
          </Link>
        </div>
      </div>
    </section>
  );
}
