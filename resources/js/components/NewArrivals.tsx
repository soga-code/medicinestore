// components/NewArrivals.tsx
import React from 'react';
import { Link } from '@inertiajs/react';

const drugs = [
  { id: 1, name: 'Paracetamol', image: '/images/paracetamol.jpg' },
  { id: 2, name: 'Ibuprofen', image: '/images/ibuprofen.jpg' },
  { id: 3, name: 'Cough Syrup', image: '/images/cough-syrup.jpg' },
];

export default function NewArrivals() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">New Drug Arrivals</h3>
      <div className="grid gap-6 md:grid-cols-3">
        {drugs.map((drug) => (
          <Link key={drug.id} href="/cart" className="block group text-center hover:scale-105 transition">
            <img
              src={drug.image}
              alt={drug.name}
              className="w-full h-48 object-cover rounded shadow mb-4 group-hover:ring-4 group-hover:ring-green-400"
            />
            <h4 className="text-lg font-semibold text-gray-800 group-hover:text-green-700">{drug.name}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
}
