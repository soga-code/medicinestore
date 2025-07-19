import { Link } from '@inertiajs/react';

export default function SpecialPromo() {
  return (
    <section className="px-4 sm:px-8 md:px-16 xl:px-36 py-10 text-black space-y-10">
      <Link href="/products">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 rounded-3xl bg-white shadow-md p-6 md:h-96">
          <div className="flex-1">
            <h3 className="mb-2 text-2xl font-bold text-black">Paracetamol Extra</h3>
            <p className="mb-3 text-lg font-medium text-gray-700">
              Effective relief from headaches, fever, and body pain. Trusted by millions for fast action and safety.
            </p>
            <h3 className="mb-1 font-medium text-red-700 line-through">N40,000</h3>
            <h3 className="mb-3 text-2xl font-bold text-black">N32,000</h3>
            <h3 className="inline-block rounded-lg bg-green-600 px-4 py-2 text-xl md:text-3xl font-bold text-white">
              20% OFF
            </h3>
          </div>

          <div
            className="h-64 w-full md:h-80 md:w-80 rounded-lg bg-cover bg-center hover:ring-2 hover:ring-green-700"
            style={{ backgroundImage: "url('/images/newdrug5.jpg')" }}
          />
        </div>
      </Link>

      <Link href="/products">
        <div className="flex flex-col md:flex-row items-center gap-8 rounded-3xl bg-white shadow-md p-6 md:h-96">
          <div
            className="h-64 w-full md:h-80 md:w-80 rounded-lg bg-cover bg-center hover:ring-2 hover:ring-green-700"
            style={{ backgroundImage: "url('/images/promoimg3.jpg')" }}
          />

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="mb-2 text-2xl font-bold text-black">Vitamin C Boost</h3>
            <p className="mb-3 text-lg font-medium text-gray-700">
              Strengthen your immune system with high-quality Vitamin C. Ideal for all ages and daily health maintenance.
            </p>
            <h3 className="mb-1 font-medium text-red-700 line-through">N40,000</h3>
            <h3 className="mb-3 text-2xl font-bold text-black">N32,000</h3>
            <h3 className="inline-block rounded-lg bg-green-600 px-4 py-2 text-xl md:text-3xl font-bold text-white">
              20% OFF
            </h3>
          </div>
        </div>
      </Link>
    </section>
  );
}
