import React from 'react';
import { Link } from '@inertiajs/react';

export default function CartSummary() {
    return (
        <section className="flex flex-col lg:flex-row gap-10 px-4 sm:px-8 md:px-20 lg:px-25 py-10">
            <div className="w-full lg:w-2/3">
                <h3 className="font-bold text-start text-2xl text-green-700 mb-6">My Cart Summary</h3>
                <div className="border-2 border-gray-300 rounded-2xl px-4 sm:px-6 md:px-10 py-6 shadow-md w-full">
                    <div className="hidden sm:flex justify-between px-4 mb-4">
                        <h3 className="font-bold">Product</h3>
                        <div className="flex gap-10 sm:gap-20">
                            <h3 className="font-bold">Quantity</h3>
                            <h3 className="font-bold">Total</h3>
                        </div>
                    </div>

                    <div className="border-t-2 border-gray-300 py-6">
                        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 px-4">
                            <div className="flex gap-4">
                                <div className="h-24 w-24 sm:h-30 sm:w-30 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('/images/newdrug5.jpg')" }}></div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="font-semibold text-green-700 mb-2">DRUG NAME</h3>
                                    <h3 className="font-semibold text-black">N2,600</h3>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="flex border-2 border-gray-400 gap-4 rounded-sm px-3 py-1">
                                        <h3 className="text-2xl font-semibold text-gray-400">-</h3>
                                        <h3 className="font-semibold text-gray-400">2</h3>
                                        <h3 className="text-2xl font-semibold text-gray-400">+</h3>
                                    </div>
                                    <h3 className="text-gray-500 font-semibold text-center mt-2">Remove</h3>
                                </div>
                                <h3 className="font-semibold text-black">N5,200</h3>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 border-gray-300 py-6">
                        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 px-4">
                            <div className="flex gap-4">
                                <div className="h-24 w-24 sm:h-30 sm:w-30 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('/images/newdrug5.jpg')" }}></div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="font-semibold text-green-700 mb-2">DRUG NAME</h3>
                                    <h3 className="font-semibold text-black">N1,800</h3>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="flex border-2 border-gray-400 gap-4 rounded-sm px-3 py-1">
                                        <h3 className="text-2xl font-semibold text-gray-400">-</h3>
                                        <h3 className="font-semibold text-gray-400">1</h3>
                                        <h3 className="text-2xl font-semibold text-gray-400">+</h3>
                                    </div>
                                    <h3 className="text-gray-500 font-semibold text-center mt-2">Remove</h3>
                                </div>
                                <h3 className="font-semibold text-black">N1,800</h3>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 border-gray-300 py-6">
                        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 px-4">
                            <div className="flex gap-4">
                                <div className="h-24 w-24 sm:h-30 sm:w-30 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('/images/newdrug5.jpg')" }}></div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="font-semibold text-green-700 mb-2">DRUG NAME</h3>
                                    <h3 className="font-semibold text-black">N2,000</h3>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="flex border-2 border-gray-400 gap-4 rounded-sm px-3 py-1">
                                        <h3 className="text-2xl font-semibold text-gray-400">-</h3>
                                        <h3 className="font-semibold text-gray-400">1</h3>
                                        <h3 className="text-2xl font-semibold text-gray-400">+</h3>
                                    </div>
                                    <h3 className="text-gray-500 font-semibold text-center mt-2">Remove</h3>
                                </div>
                                <h3 className="font-semibold text-black">N2,000</h3>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 border-gray-300 py-6">
                        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 px-4">
                            <div className="flex gap-4">
                                <div className="h-24 w-24 sm:h-30 sm:w-30 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('/images/newdrug5.jpg')" }}></div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="font-semibold text-green-700 mb-2">DRUG NAME</h3>
                                    <h3 className="font-semibold text-black">N500</h3>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="flex border-2 border-gray-400 gap-4 rounded-sm px-3 py-1">
                                        <h3 className="text-2xl font-semibold text-gray-400">-</h3>
                                        <h3 className="font-semibold text-gray-400">4</h3>
                                        <h3 className="text-2xl font-semibold text-gray-400">+</h3>
                                    </div>
                                    <h3 className="text-gray-500 font-semibold text-center mt-2">Remove</h3>
                                </div>
                                <h3 className="font-semibold text-black">N2,000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-120">
                <div className="rounded-2xl border-2 border-gray-300 px-6 py-6 shadow-md mt-0 lg:mt-14">
                    <h3 className="mb-4 text-start font-bold text-green-700">Payment Summary</h3>
                    <h3 className="mb-2 text-start font-bold">Discount</h3>
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Discount code"
                            className="w-full sm:w-auto flex-grow rounded border border-gray-300 p-2"
                        />
                        <Link
                            href="#"
                            className="rounded-full bg-green-700 px-6 py-2 font-semibold text-white hover:bg-white hover:text-green-700 hover:ring-2 hover:ring-green-700 text-center"
                        >
                            Apply
                        </Link>
                    </div>
                    <div className="mb-6">
                        <div className="mb-2 flex justify-between">
                            <span>Subtotal: 8 items</span>
                            <span>₦11,000.00</span>
                        </div>
                        <div className="mb-2 flex justify-between">
                            <span>Shipping</span>
                            <span>₦3,500.00</span>
                        </div>
                        <div className="mt-4 flex justify-between text-lg font-bold">
                            <span>Total:</span>
                            <span>₦14,000.00</span>
                        </div>
                    </div>
                    <div className="bg-white border w-full h-10 rounded mb-6 flex items-center justify-center">
                        <h3 className="font-bold text-center">Scroll down to shipping & payments.</h3>
                    </div>
                    <Link
                        href="/products"
                        className="rounded-full bg-green-700 px-6 py-2 font-semibold text-white hover:bg-white hover:text-green-700 hover:ring-2 hover:ring-green-700 block text-center"
                    >
                        Continue to shop
                    </Link>
                </div>
            </div>
        </section>
    );
}
