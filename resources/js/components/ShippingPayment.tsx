import { Wallet } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function ShippingPayment() {
    return (
        <section className="px-25 py-20">
            <h3 className="mb-10 text-start text-2xl font-bold text-green-700"> Shipping and Billing</h3>
            <div className="mb-20 h-auto w-250 rounded-2xl border-2 border-gray-300 px-10 py-10 shadow-md">
                <form className="w-full space-y-4 rounded-lg bg-white p-3 text-black" action="">
                    <button className="hover:bg- ml-190 rounded-full border-2 border-red-700 bg-white px-9 py-1 font-semibold text-red-700 hover:bg-white">
                        Log In
                    </button>
                    <label className="mb-1 block font-bold">Contact</label>
                    <input type="text" placeholder="Email or mobile phone number" name="name" className="w-full rounded border border-gray-300 p-2" />
                    <label className="mt-3 mb-1 block font-bold">Delivery</label>
                    <div className="flex-col-2 flex gap-5">
                        <div className="flex-col-2 flex h-10 w-110 gap-2 rounded border border-green-700 bg-green-200 p-2">
                            <div className="h-5 w-5 rounded-full bg-green-700 p-1">
                                <div className="h-3 w-3 rounded-full bg-white"></div>
                            </div>
                            <h3 className="font-bold">Ship</h3>
                        </div>
                        <div className="flex-col-2 flex h-10 w-110 gap-2 rounded border border-gray-300 bg-white p-2">
                            <div className="h-5 w-5 rounded-full border border-gray-300 bg-white p-1"></div>
                            <h3 className="font-bold">Pickup in store</h3>
                        </div>
                    </div>
                    <div className="flex-col-2 flex h-11 w-full gap-150 rounded border border-gray-300 bg-white p-2">
                        <h3 className="font-bold text-gray-400">Country/Region</h3>
                    </div>
                    <div className="flex-col-2 flex gap-5">
                        <input type="text" placeholder="Last name" name="name" className="w-110 rounded border border-gray-300 p-2" />
                        <input type="text" placeholder="First name" name="name" className="w-110 rounded border border-gray-300 p-2" />
                    </div>
                    <input type="text" placeholder="Address" name="name" className="w-full rounded border border-gray-300 p-2" />
                    <div className="flex-col-3 flex gap-5">
                        <input type="text" placeholder="City" name="name" className="w-71 rounded border border-gray-300 p-2" />
                        <div className="flex-col-2 flex h-11 w-71 gap-150 rounded border border-gray-300 bg-white p-2">
                            <h3 className="font-bold text-gray-400">State</h3>
                        </div>
                        <input type="text" placeholder="Postal Code(optional)" name="name" className="w-71 rounded border border-gray-300 p-2" />
                    </div>
                    <input type="text" placeholder="Phone" name="name" className="w-full rounded border border-gray-300 p-2" />
                    <div className="flex-col-2 flex gap-2">
                        <div className="h-5 w-5 rounded border border-gray-400"> </div>
                        <h3 className="font-bold">Save this information for next time</h3>
                    </div>
                    <div className="flex-col-2 mt-20 flex gap-138">
                        <h3 className="mb-10 text-start font-bold">Billing Address</h3>
                        <div className="flex-col-2 flex gap-2">
                            <div className="h-5 w-5 rounded border border-gray-400"> </div>
                            <h3 className="font-bold">Same as shipping address</h3>
                        </div>
                    </div>
                    <div className="flex-col-2 flex h-11 w-full gap-150 rounded border border-gray-300 bg-white p-2">
                        <h3 className="font-bold text-gray-400">Country/Region</h3>
                    </div>
                    <div className="flex-col-2 flex gap-5">
                        <input type="text" placeholder="Last name" name="name" className="w-110 rounded border border-gray-300 p-2" />
                        <input type="text" placeholder="First name" name="name" className="w-110 rounded border border-gray-300 p-2" />
                    </div>
                    <input type="text" placeholder="Address" name="name" className="w-full rounded border border-gray-300 p-2" />
                    <div className="flex-col-3 flex gap-5">
                        <input type="text" placeholder="City" name="name" className="w-71 rounded border border-gray-300 p-2" />
                        <div className="flex-col-2 flex h-11 w-71 gap-150 rounded border border-gray-300 bg-white p-2">
                            <h3 className="font-bold text-gray-400">State</h3>
                        </div>
                        <input type="text" placeholder="Postal Code(optional)" name="name" className="w-71 rounded border border-gray-300 p-2" />
                    </div>
                    <input type="text" placeholder="Phone" name="name" className="w-full rounded border border-gray-300 p-2" />
                </form>
            </div>
            <h3 className="mb-10 text-start text-2xl font-bold text-green-700">Payment</h3>
            <div className="h-auto w-250 rounded-2xl border-2 border-gray-300 px-10 py-10 shadow-md">
                <div className="flex-col-2 flex h-10 w-full gap-2 rounded-t border border-green-700 bg-green-200 p-2">
                    <div className="h-5 w-5 rounded-full bg-green-700 p-1">
                        <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    <h3 className="font-bold">Paystack</h3>
                </div>
                <div className="h-auto w-full gap-2 border border-green-700 bg-green-100 p-2">
                    <Wallet className="mx-100 my-5 size-30" />
                    <h3 className="text-center font-bold">
                        After clicking “Pay now”, you will be redirected to Paystack to complete your purchase securely
                    </h3>
                </div>
                <div className="flex-col-2 flex h-10 w-full gap-2 border border-gray-300 p-2">
                    <div className="h-5 w-5 rounded-full border border-gray-300 bg-white"></div>
                    <h3 className="font-bold">Nomba</h3>
                </div>
                <div className="flex-col-2 flex h-10 w-full gap-2 rounded-t border border-gray-300 p-2 mb-10">
                    <div className="h-5 w-5 rounded-full bg-green-700 p-1">
                        <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    <h3 className="font-bold">Bank transfer (Bank name)</h3>
                </div>
                <Link
                    href="#"
                    className="ml-200 rounded-full bg-red-700 px-6 py-2 font-semibold text-white transition hover:bg-white hover:text-red-700 hover:ring-2 hover:ring-red-700"
                >
                    Pay now
                </Link>
            </div>
            <h3 className="mb-10 text-start font-bold">Payment Summary</h3>
            <div className="h-auto w-120 rounded-2xl border-2 border-gray-300 px-10 py-10 shadow-md">
                <h3 className="mb-10 text-start font-bold">Discount</h3>
                <div className="flex-col-2 flex gap-15 mb-10">
                    <input type="code" placeholder="Discount code" name="name" className="w-auto rounded border border-gray-300 p-2" />
                    <Link
                        href="#"
                        className="rounded-full bg-red-700 px-8 py-2 font-semibold text-white transition hover:bg-white hover:text-red-700 hover:ring-2 hover:ring-red-700"
                    >
                        Apply
                    </Link>
                </div>
                <div className="flex-col-2 flex gap-40 mb-10">
                    <ul className=''>Subtotal: 8 items</ul>
                    <ul>11,000.00</ul>
                </div>
                <div className="flex-col-2 flex gap-40 mb-10">
                    <ul className=''>Shipping</ul>
                    <ul>3,500.00</ul>
                </div>
                <div className="flex-col-2 flex gap-40 mb-10">
                    <ul className='font-bold'>Total:</ul>
                    <ul>14,500.00</ul>
                </div>
            </div>
        </section>
    );
}
