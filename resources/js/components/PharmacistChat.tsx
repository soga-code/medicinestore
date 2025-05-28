// components/PharmacyChat.tsx
import React from 'react';
import { Link } from '@inertiajs/react';

export default function PharmacyChat() {
  return (
    <section
      className="relative bg-cover bg-center h-[400px] flex items-center"
      style={{
        backgroundImage: "url('/images/Heroimg1.jpg')",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      {/* Text content */}
      <div className="relative container mx-auto px-6 flex justify-end item-center">
        <div className="max-w-lg text-white text-auto">
          <h3 className="text-4xl font-bold mb-4">Chat with a Pharmacist</h3>
          <p className="text-lg mb-6">
            Have questions about your prescriptions, side effects, or drug interactions? Our certified pharmacists are available to help 24/7.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Start Chat
          </Link>
        </div>
      </div>
    </section>
  );
}
