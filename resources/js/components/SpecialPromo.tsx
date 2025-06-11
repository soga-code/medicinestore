import { Link } from '@inertiajs/react';

export default function SpecialPromo() {
    return (
        <section className="px-35 text-black">
            <Link href="/products">
                <div className="flex-col-2 mt-15 flex h-150 gap-6 rounded-3xl bg-white">
                    <div className="px-45 py-35">
                        <h3 className="mb-2 text-2xl font-bold text-black">DRUG NAME</h3>
                        <p className="mb-3 text-lg font-medium text-gray-700">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Ad totam nemo alias sequi, quisquam, asperiores iure
                            <br /> quos quae voluptatibus voluptas
                        </p>
                        <h3 className="mb-1 font-medium text-red-700">N40,000</h3>
                        <h3 className="mb-3 text-2xl font-bold text-black">N32,000</h3>
                        <h3 className="mr-70 rounded-lg bg-green-600 py-2 text-center text-3xl font-bold text-white">20% OFF</h3>
                    </div>
                    <div className="mt-10 h-120 w-120 rounded-lg bg-cover bg-center hover:ring-2 hover:ring-green-700" style={{ backgroundImage: "url('/images/newdrug5.jpg')" }}></div>
                </div>
            </Link>
            <Link href="/products">
                <div className="flex-col-2 mt-6 ml-10 flex h-150 gap-6 rounded-3xl bg-white">
                    <div className="mt-15 ml-35 h-120 w-120 rounded-lg bg-cover bg-center hover:ring-2 hover:ring-green-700" style={{ backgroundImage: "url('/images/promoimg3.jpg')" }}></div>
                    <div className="px-45 py-35">
                        <h3 className="mb-2 text-2xl font-bold text-black">DRUG NAME</h3>
                        <p className="mb-3 text-lg font-medium text-gray-700">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Ad totam nemo alias sequi, quisquam, asperiores iure
                            <br /> quos quae voluptatibus voluptas
                        </p>
                        <h3 className="mb-1 font-medium text-red-700">N40,000</h3>
                        <h3 className="mb-3 text-2xl font-bold text-black">N32,000</h3>
                        <h3 className="mr-70 rounded-lg bg-green-600 py-2 text-center text-3xl font-bold text-white">20% OFF</h3>
                    </div>
                </div>
            </Link>
        </section>
    );
}
