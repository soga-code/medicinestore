// import { usePage } from '@inertiajs/react';
import OurProducts from '@/components/OurProducts';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Products() {
    return (
        <div className="bg-white text-gray-800">
            <Header />
            <div
                className="relative flex h-[30rem] w-full items-center justify-end bg-cover bg-center sm:h-[35rem] md:h-[40rem] lg:h-[45rem]"
                style={{ backgroundImage: "url('/images/her2.avif')" }}
            >
                <h1 className="pr-4 text-right text-3xl font-bold text-white sm:pr-20 sm:text-4xl md:pr-40 md:text-5xl lg:pr-60">Our Products</h1>
            </div>
            <OurProducts />
            <Footer />
        </div>
    );
}
