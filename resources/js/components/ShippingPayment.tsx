import { Wallet } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function ShippingPayment() {
    return (
        <section className="px-4 sm:px-8 md:px-20 lg:px-25 py-20">
            <h3 className="mb-10 text-start text-2xl font-bold text-green-700">Shipping and Billing</h3>
            <div className="mb-20 w-full rounded-2xl border-2 border-gray-300 px-6 md:px-10 py-10 shadow-md">
                <form className="space-y-4 text-black">
                    <div className="flex justify-end">
                        <button className="rounded-full border-2 border-red-700 bg-white px-6 py-1 font-semibold text-red-700 hover:bg-white">
                            Log In
                        </button>
                    </div>

                    <label className="block font-bold">Contact</label>
                    <input type="text" placeholder="Email or mobile phone number" className="w-full rounded border border-gray-300 p-2" />

                    <label className="mt-3 block font-bold">Delivery</label>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex items-center gap-2 rounded border border-green-700 bg-green-200 px-3 py-2">
                            <div className="h-5 w-5 rounded-full bg-green-700 p-1">
                                <div className="h-3 w-3 rounded-full bg-white"></div>
                            </div>
                            <h3 className="font-bold">Ship</h3>
                        </div>
                        <div className="flex items-center gap-2 rounded border border-gray-300 bg-white px-3 py-2">
                            <div className="h-5 w-5 rounded-full border border-gray-300 bg-white p-1"></div>
                            <h3 className="font-bold">Pickup in store</h3>
                        </div>
                    </div>

                    <div className="rounded border border-gray-300 bg-white p-2">
                        <h3 className="font-bold text-gray-400">Country/Region</h3>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <input type="text" placeholder="Last name" className="w-full sm:w-1/2 rounded border border-gray-300 p-2" />
                        <input type="text" placeholder="First name" className="w-full sm:w-1/2 rounded border border-gray-300 p-2" />
                    </div>

                    <input type="text" placeholder="Address" className="w-full rounded border border-gray-300 p-2" />

                    <div className="flex flex-col md:flex-row gap-5">
                        <input type="text" placeholder="City" className="w-full md:w-1/3 rounded border border-gray-300 p-2" />
                        <div className="w-full md:w-1/3 rounded border border-gray-300 bg-white p-2">
                            <h3 className="font-bold text-gray-400">State</h3>
                        </div>
                        <input type="text" placeholder="Postal Code (optional)" className="w-full md:w-1/3 rounded border border-gray-300 p-2" />
                    </div>

                    <input type="text" placeholder="Phone" className="w-full rounded border border-gray-300 p-2" />

                    <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded border border-gray-400"></div>
                        <h3 className="font-bold">Save this information for next time</h3>
                    </div>

                    <div className="mt-20 flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <h3 className="font-bold">Billing Address</h3>
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded border border-gray-400"></div>
                            <h3 className="font-bold">Same as shipping address</h3>
                        </div>
                    </div>

                    <div className="rounded border border-gray-300 bg-white p-2">
                        <h3 className="font-bold text-gray-400">Country/Region</h3>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <input type="text" placeholder="Last name" className="w-full sm:w-1/2 rounded border border-gray-300 p-2" />
                        <input type="text" placeholder="First name" className="w-full sm:w-1/2 rounded border border-gray-300 p-2" />
                    </div>

                    <input type="text" placeholder="Address" className="w-full rounded border border-gray-300 p-2" />

                    <div className="flex flex-col md:flex-row gap-5">
                        <input type="text" placeholder="City" className="w-full md:w-1/3 rounded border border-gray-300 p-2" />
                        <div className="w-full md:w-1/3 rounded border border-gray-300 bg-white p-2">
                            <h3 className="font-bold text-gray-400">State</h3>
                        </div>
                        <input type="text" placeholder="Postal Code (optional)" className="w-full md:w-1/3 rounded border border-gray-300 p-2" />
                    </div>

                    <input type="text" placeholder="Phone" className="w-full rounded border border-gray-300 p-2" />
                </form>
            </div>

            <h3 className="mb-10 text-start text-2xl font-bold text-green-700">Payment</h3>
            <div className="rounded-2xl border-2 border-gray-300 px-6 md:px-10 py-10 shadow-md">
                <div className="flex items-center gap-2 rounded-t border border-green-700 bg-green-200 p-2">
                    <div className="h-5 w-5 rounded-full bg-green-700 p-1">
                        <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    <h3 className="font-bold">Paystack</h3>
                </div>

                <div className="border border-green-700 bg-green-100 p-4 text-center">
                    <Wallet className="mx-auto my-5 size-10" />
                    <h3 className="font-bold">
                        After clicking “Pay now”, you will be redirected to Paystack to complete your purchase securely
                    </h3>
                </div>

                <div className="mt-4 flex items-center gap-2 border border-gray-300 p-2">
                    <div className="h-5 w-5 rounded-full border border-gray-300 bg-white"></div>
                    <h3 className="font-bold">Nomba</h3>
                </div>

                <div className="mt-4 flex items-center gap-2 border border-gray-300 p-2">
                    <div className="h-5 w-5 rounded-full bg-green-700 p-1">
                        <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    <h3 className="font-bold">Bank transfer (Bank name)</h3>
                </div>

                <div className="mt-10 flex justify-end">
                    <Link
                        href="#"
                        className="rounded-full bg-red-700 px-6 py-2 font-semibold text-white transition hover:bg-white hover:text-red-700 hover:ring-2 hover:ring-red-700"
                    >
                        Pay now
                    </Link>
                </div>
            </div>
        </section>
    );
}
