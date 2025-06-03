import { Link } from '@inertiajs/react';
import { Icon } from './icon';

// const drugs = [
//   { id: 1, name: 'Paracetamol', image: '/images/paracetamol.jpg' },
//   { id: 2, name: 'Ibuprofen', image: '/images/ibuprofen.jpg' },
//   { id: 3, name: 'Cough Syrup', image: '/images/cough-syrup.jpg' },
// ];

export default function NewArrivals() {
    return (
        <section className="px-35 py-16 ">
            <h3 className="mb-12 text-center text-2xl font-bold text-green-700">New Drug Arrivals</h3>
            <div className="grid gap-6 md:grid-cols-4">
                <div className="mb-12">
                  <div className="bg-cover w-80 h-80 rounded-lg mb-2 text-center pt-4 text-white font-bold" style={{ backgroundImage: "url('/images/drug1.jpg')" }}>DRUG NAME</div>
                  <div className="flex gap-25 px-4 py-2">
                      <h4 className="font-semibold text-black mt-2">N10,000</h4>
                    <div className="mt-2">
                      <Link
                          href="/cart"
                          className="rounded-full bg-red-700 px-6 py-2 font-semibold text-white hover:bg-white hover:text-red-700  hover:ring-2 hover:ring-red-700"
                      >
                          Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-cover w-80 h-80 rounded-lg mb-2 text-center pt-4 text-white font-bold" style={{ backgroundImage: "url('/images/drug2.webp')" }}>DRUG NAME</div>
                  <div className="flex gap-25 px-4 py-2">
                      <h4 className="font-semibold text-black mt-2">N10,000</h4>
                    <div className="mt-2">
                      <Link
                          href="/cart"
                          className="rounded-full bg-red-700 px-6 py-2 font-semibold text-white hover:bg-white hover:text-red-700  hover:ring-2 hover:ring-red-700"
                      >
                          Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-cover w-80 h-80 rounded-lg mb-2 text-center pt-4 text-white font-bold" style={{ backgroundImage: "url('/images/drug3.webp')" }}>DRUG NAME</div>
                  <div className="flex gap-25 px-4 py-2">
                      <h4 className="font-semibold text-black mt-2">N10,000</h4>
                    <div className="mt-2">
                      <Link
                          href="/cart"
                          className="rounded-full bg-red-700 px-6 py-2 font-semibold text-white hover:bg-white hover:text-red-700  hover:ring-2 hover:ring-red-700"
                      >
                          Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-cover w-80 h-80 rounded-lg mb-2 text-center pt-4 text-white font-bold" style={{ backgroundImage: "url('/images/drug4.webp')" }}>DRUG NAME</div>
                  <div className="flex gap-25 px-4 py-2">
                      <h4 className="font-semibold text-black mt-2">N10,000</h4>
                    <div className="mt-2">
                      <Link
                          href="/cart"
                          className="rounded-full bg-red-700 px-6 py-2 font-semibold text-white hover:bg-white hover:text-red-700  hover:ring-2 hover:ring-red-700"
                      >
                          Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-cover w-80 h-80 rounded-lg mb-2 text-center pt-4 text-white font-bold" style={{ backgroundImage: "url('/images/Heroimg1.jpg')" }}>DRUG NAME</div>
                  <div className="flex gap-25 px-4 py-2">
                      <h4 className="font-semibold text-black mt-2">N10,000</h4>
                    <div className="mt-2">
                      <Link
                          href="/cart"
                          className="rounded-full bg-red-700 px-6 py-2 font-semibold text-white hover:bg-white hover:text-red-700  hover:ring-2 hover:ring-red-700"
                      >
                          Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-cover w-80 h-80 rounded-lg mb-2 text-center pt-4 text-white font-bold" style={{ backgroundImage: "url('/images/Heroimg1.jpg')" }}>DRUG NAME</div>
                  <div className="flex gap-25 px-4 py-2">
                      <h4 className="font-semibold text-black mt-2">N10,000</h4>
                    <div className="mt-2">
                      <Link
                          href="/cart"
                          className="rounded-full bg-red-700 px-6 py-2 font-semibold text-white hover:bg-white hover:text-red-700  hover:ring-2 hover:ring-red-700"
                      >
                          Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-cover w-80 h-80 rounded-lg mb-2 text-center pt-4 text-white font-bold" style={{ backgroundImage: "url('/images/Heroimg1.jpg')" }}>DRUG NAME</div>
                  <div className="flex gap-25 px-4 py-2">
                      <h4 className="font-semibold text-black mt-2">N10,000</h4>
                    <div className="mt-2">
                      <Link
                          href="/cart"
                          className="rounded-full bg-red-700 px-6 py-2 font-semibold text-white hover:bg-white hover:text-red-700  hover:ring-2 hover:ring-red-700"
                      >
                          Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-cover w-80 h-80 rounded-lg mb-2 text-center pt-4 text-white font-bold" style={{ backgroundImage: "url('/images/Heroimg1.jpg')" }}>DRUG NAME</div>
                  <div className="flex gap-25 px-4 py-2">
                      <h4 className="font-semibold text-black mt-2">N10,000</h4>
                    <div className="mt-2">
                      <Link
                          href="/cart"
                          className="rounded-full bg-red-700 px-6 py-2 font-semibold text-white hover:bg-white hover:text-red-700  hover:ring-2 hover:ring-red-700"
                      >
                          Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
            <Link href="/products" className=''>
              <h3 className="mt-10 text-end justify-endtext-1 font-bold text-green-700 pr-11">View more</h3>
            </Link>
        </section>
    );
}

{
    /* {drugs.map((drug) => (
<Link key={drug.id} href="/cart" className="block group text-center hover:scale-105 transition">
<img
src={drug.image}
alt={drug.name}
className="w-full h-48 object-cover rounded shadow mb-4 group-hover:ring-4 group-hover:ring-green-400"
/>
<h4 className="text-lg font-semibold text-gray-800 group-hover:text-green-700">{drug.name}</h4>
</Link>
))} */
}
