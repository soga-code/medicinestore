import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import NewArrivals from '@/components/NewArrivals';
import PharmacistChat from '@/components/PharmacistChat';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <Hero />
      <NewArrivals />
      <PharmacistChat />

      <section className="container mx-auto py-16 px-4">
        <h3 className="text-2xl font-bold text-green-700 mb-6">Why Choose MediCare+</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2">Certified Medicines</h4>
            <p>We provide only certified and approved drugs for all your health needs.</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2">Fast Delivery</h4>
            <p>Receive your prescriptions right at your doorstep in record time.</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
            <p>Our support team is always available to assist with your needs.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
