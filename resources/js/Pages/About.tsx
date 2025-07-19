import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutMain from '@/components/AboutMain';
import OurTeam from '@/components/OurTeam';
import OurMedia from '@/components/OurMedia';

export default function About() {
  return (
    <div className="bg-white text-white">
      <Header />
      <AboutHero />
      <AboutMain />
      <OurTeam />
      <OurMedia />
      <Footer />
    </div>
  );
  
  {/* <div className="p-6 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold text-green-700 mb-4">About Us</h1>
    <p className="mb-4">MediCare+ is committed to providing safe, certified, and affordable medications to our customers across the country. With years of experience in pharmaceutical services, we ensure your health is our top priority.</p>
    <p>Our mission is to bridge the gap between healthcare providers and patients by making medicine accessible from the comfort of your home.</p>
  </div> */}
}