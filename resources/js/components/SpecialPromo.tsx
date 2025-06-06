import { Link } from '@inertiajs/react';

export default function SpecialPromo() {
    return (
        <section className="px-35 py-20 text-black">
            <Link href="/products">
                <div className="flex-col-2 mt-15 flex h-100 gap-6 rounded-3xl bg-green-100 hover:ring-2 hover:ring-green-700">
                    <div className="px-35 py-18">
                        <h3 className="mb-2 text-2xl font-bold text-black">DRUG NAME</h3>
                        <p className="mb-3 text-lg font-medium text-gray-700">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Ad totam nemo alias sequi, quisquam, asperiores iure
                            <br /> quos quae voluptatibus voluptas
                        </p>
                        <h3 className="mb-1 font-medium text-red-700">N40,000</h3>
                        <h3 className="mb-3 text-2xl font-bold text-black">N32,000</h3>
                        <h3 className="mr-70 rounded-lg bg-green-600 py-2 text-center text-3xl font-bold text-white">20% OFF</h3>
                    </div>
                    <div className="mt-10 h-80 w-160 rounded-lg bg-cover" style={{ backgroundImage: "url('/images/drug1.jpg')" }}></div>
                </div>
            </Link>
            <Link href="/products">
                <div className="flex-col-2 mt-15 flex h-100 gap-6 rounded-3xl bg-red-100 hover:ring-2 hover:ring-red-700">
                    <div className="mt-10 ml-35 h-80 w-160 rounded-lg bg-cover" style={{ backgroundImage: "url('/images/drug1.jpg')" }}></div>
                    <div className="px-30 py-18">
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
