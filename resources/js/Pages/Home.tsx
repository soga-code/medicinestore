import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import NewArrivals from '@/components/NewArrivals';
import PharmacistChat from '@/components/PharmacistChat';
import SpecialPromo from '@/components/SpecialPromo';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClientSay from '@/components/ClientSay';
import PageUp from '@/components/PageUp';


export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <Hero />
      <NewArrivals />
      <SpecialPromo />
      <PharmacistChat />
      <WhyChooseUs />
      <ClientSay />
      <PageUp />
      <Footer />
    </div>
  );
}
