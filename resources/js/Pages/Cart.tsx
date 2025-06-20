import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartSummary from '@/components/CartSummary';

export default function Cart() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <CartSummary />
      <Footer />
    </div>
  );
}



      {/* <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Your Cart</h1>
        <div className="border p-4 mb-4 rounded shadow">
          <h2 className="font-semibold">Medicine 1</h2>
          <p className="text-gray-600">Quantity: 2</p>
          <p className="text-gray-800 font-bold">$20</p>
        </div>
        <div className="text-right mt-6">
          <p className="text-xl font-bold">Total: $40</p>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Checkout</button>
        </div>
      </div> */}
