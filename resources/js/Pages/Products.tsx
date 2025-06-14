import React from 'react';
// import { usePage } from '@inertiajs/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OurProducts from '@/components/OurProducts';


// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: string;
// }

// interface PageProps {
//   products: Product[];
// }

export default function Products() {

  return (
    <div className="bg-white text-gray-800">
      <Header />
      <div className="bg-cover bg-center w-full h-120" style={{ backgroundImage: "url('/images/her2.avif')"}}>
      <h1 className='text-5xl font-bold text-white text-right pr-60 py-50'>Our Products</h1>
      </div>
      <OurProducts />
      {/* <div className="p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        </div>
      </div> */}
      <Footer />
    </div>
  );
}


{/* {products.map((product) => (
  <div key={product.id} className="border p-4 rounded shadow">
    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
    <p className="text-gray-600 mb-2">{product.description}</p>
    <p className="text-green-800 font-bold mb-2">${product.price}</p>
    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add to Cart</button>
  </div>
))} */}
