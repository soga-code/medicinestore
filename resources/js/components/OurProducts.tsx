import { Link } from '@inertiajs/react';

const drugs = [
  { id: 1, name: 'Paracetamol', price: 'N2,000', image: '/images/newdrugs1.png' },
  { id: 2, name: 'Ibuprofen', price: 'N2,500', image: '/images/newdrug5.jpg' },
  { id: 3, name: 'Cough Syrup', price: 'N3,000', image: '/images/newdrug3.png' },
  { id: 4, name: 'Amoxicillin', price: 'N4,000', image: '/images/newdrug4.png' },
  { id: 5, name: 'Vitamin C', price: 'N1,200', image: '/images/newdrug5.jpg' },
  { id: 6, name: 'Diclofenac', price: 'N2,800', image: '/images/newdrug3.png' },
  { id: 7, name: 'Antacid Tablets', price: 'N1,500', image: '/images/newdrug4.png' },
  { id: 8, name: 'Allergy Relief', price: 'N2,200', image: '/images/newdrugs1.png' },
  { id: 9, name: 'Loratadine', price: 'N3,200', image: '/images/newdrugs1.png' },
  { id: 10, name: 'Metronidazole', price: 'N2,700', image: '/images/newdrug5.jpg' },
  { id: 11, name: 'Zinc Tablets', price: 'N1,300', image: '/images/newdrug3.png' },
  { id: 12, name: 'Cold Relief', price: 'N2,600', image: '/images/newdrug4.png' },
  { id: 13, name: 'Cold Relief', price: 'N3,600', image: '/images/newdrug4.png' },
  { id: 14, name: 'Cold Relief', price: 'N1,600', image: '/images/newdrug4.png' },
  { id: 15, name: 'Cold Relief', price: 'N2,000', image: '/images/newdrug4.png' },
];

export default function OurProducts() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 xl:px-40 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
        {drugs.map((drug) => (
          <div key={drug.id} className="w-full max-w-xs">
            <div
              className="h-80 w-full rounded-lg bg-cover bg-center text-center text-black font-bold flex items-end justify-center pb-4"
              style={{ backgroundImage: `url('${drug.image}')` }}
            >
              {drug.name}
            </div>
            <div className="flex justify-between items-center px-2 py-3">
              <h4 className="text-black font-semibold">{drug.price}</h4>
              <Link
                href="/cart"
                className="rounded-full bg-red-700 px-6 py-2 font-semibold text-white hover:bg-white hover:text-red-700 hover:ring-2 hover:ring-red-700"
              >
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="text-center mt-14">
        <Link
          href="/products"
          className="relative inline-block text-green-700 font-bold hover:after:w-full after:block after:h-1 after:w-0 after:bg-green-700 after:transition-all hover:after:duration-500"
        >
          View More
        </Link>
      </div> */}
    </section>
  );
}
