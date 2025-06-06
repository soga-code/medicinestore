import React from 'react';
import { Link } from '@inertiajs/react';

export default function PharmacyChat() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed h-[400px] flex items-center mt-10"
      style={{
        backgroundImage: "url('/images/Heroimg1.jpg')",
      }}
    >

      {/* Text content */}
      <div className="ml-120 container mx-auto px-60 flex justify-end item-center">
        <div className="max-w-lg text-white text-auto">
          <h3 className="text-3xl font-bold mb-4 text-green-600">Need Help?</h3>
          <h3 className="text-2xl font-bold mb-8">Have questions about your prescriptions, side effects, or drug interactions, chat with our certified pharmacist now. We are available 24/7</h3>
          {/* <p className="text-lg mb-6">
            Have questions about your prescriptions, side effects, or drug interactions? Our certified pharmacists are available to help 24/7.
          </p> */}
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
