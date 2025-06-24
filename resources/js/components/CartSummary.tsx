import React from 'react'


export default function CartSummary() {
    return (
        <section className='flex flex-col-2 px-25 py-20 gap-25'>
            <div className="p-1">
                <h3 className='font-bold text-start text-2xl text-green-700 mb-10'>My Cart Summary</h3>
                <div className="border-2 border-gray-300 rounded-2xl h-auto w-250 px-10 py-10 shadow-md">
                    <div className="flex flex-col-2 gap-120 px-10 mb-4">
                        <h3 className='font-bold'>Product</h3>
                        <div className="flex flex-col-2 gap-40">
                        <h3 className='font-bold'>Quantity</h3> 
                        <h3 className='font-bold'>Total</h3> 
                        </div>
                    </div>
                    <div className="">
                        <div className="my-2 border-t-2 border-gray-300"></div>
                        <div className="flex flex-col-2 gap-65 px-10 pt-4">
                            <div className="flex flex-col-2 gap-10">
                                <div className="h-30 w-30 rounded-lg bg-cover" style={{ backgroundImage: "url('/images/newdrug5.jpg')" }}></div>
                                <div className="py-10">
                                    <h3 className='font-semibold text-green-700 mb-3'>DRUG NAME</h3>
                                    <h3 className='font-semibold text-black'>N2,600</h3>
                                </div>
                            </div>
                            <div className="flex flex-col-2 gap-30">
                                <div className=" mt-7">
                                    <div className="flex flex-col-3 border-2 border-gray-400 gap-4 rounded-sm">
                                        <h3 className='text-2xl font-semibold text-gray-400 pl-3'>-</h3>
                                        <h3 className='font-semibold text-gray-400 px-2 mt-1'>2</h3>
                                        <h3 className='text-2xl font-semibold text-gray-400 pr-3'>+</h3>
                                    </div>
                                    <h3 className='text-gray-500 font-semibold text-center mt-3'>Remove</h3>
                                </div>
                                <h3 className='font-semibold text-black mt-10'>N5,200</h3>
                            </div>
                        </div>
                        <div className="my-2 border-t-2 border-gray-300"></div>
                        <div className="flex flex-col-2 gap-65 px-10 pt-4">
                            <div className="flex flex-col-2 gap-10">
                                <div className="h-30 w-30 rounded-lg bg-cover" style={{ backgroundImage: "url('/images/newdrug5.jpg')" }}></div>
                                <div className="py-10">
                                    <h3 className='font-semibold text-green-700 mb-3'>DRUG NAME</h3>
                                    <h3 className='font-semibold text-black'>N1,800</h3>
                                </div>
                            </div>
                            <div className="flex flex-col-2 gap-30">
                                <div className=" mt-7">
                                    <div className="flex flex-col-3 border-2 border-gray-400 gap-4 rounded-sm">
                                        <h3 className='text-2xl font-semibold text-gray-400 pl-3'>-</h3>
                                        <h3 className='font-semibold text-gray-400 px-2 mt-1'>1</h3>
                                        <h3 className='text-2xl font-semibold text-gray-400 pr-3'>+</h3>
                                    </div>
                                    <h3 className='text-gray-500 font-semibold text-center mt-3'>Remove</h3>
                                </div>
                                <h3 className='font-semibold text-black mt-10'>N1,800</h3>
                            </div>
                        </div>
                        <div className="my-2 border-t-2 border-gray-300"></div>
                        <div className="flex flex-col-2 gap-65 px-10 pt-4">
                            <div className="flex flex-col-2 gap-10">
                                <div className="h-30 w-30 rounded-lg bg-cover" style={{ backgroundImage: "url('/images/newdrug5.jpg')" }}></div>
                                <div className="py-10">
                                    <h3 className='font-semibold text-green-700 mb-3'>DRUG NAME</h3>
                                    <h3 className='font-semibold text-black'>N2,000</h3>
                                </div>
                            </div>
                            <div className="flex flex-col-2 gap-30">
                                <div className=" mt-7">
                                    <div className="flex flex-col-3 border-2 border-gray-400 gap-4 rounded-sm">
                                        <h3 className='text-2xl font-semibold text-gray-400 pl-3'>-</h3>
                                        <h3 className='font-semibold text-gray-400 px-2 mt-1'>1</h3>
                                        <h3 className='text-2xl font-semibold text-gray-400 pr-3'>+</h3>
                                    </div>
                                    <h3 className='text-gray-500 font-semibold text-center mt-3'>Remove</h3>
                                </div>
                                <h3 className='font-semibold text-black mt-10'>N2000</h3>
                            </div>
                        </div>
                        <div className="my-2 border-t-2 border-gray-300"></div>
                        <div className="flex flex-col-2 gap-65 px-10 pt-4">
                            <div className="flex flex-col-2 gap-10">
                                <div className="h-30 w-30 rounded-lg bg-cover" style={{ backgroundImage: "url('/images/newdrug5.jpg')" }}></div>
                                <div className="py-10">
                                    <h3 className='font-semibold text-green-700 mb-3'>DRUG NAME</h3>
                                    <h3 className='font-semibold text-black'>N500</h3>
                                </div>
                            </div>
                            <div className="flex flex-col-2 gap-30">
                                <div className=" mt-7">
                                    <div className="flex flex-col-3 border-2 border-gray-400 gap-4 rounded-sm">
                                        <h3 className='text-2xl font-semibold text-gray-400 pl-3'>-</h3>
                                        <h3 className='font-semibold text-gray-400 px-2 mt-1'>4</h3>
                                        <h3 className='text-2xl font-semibold text-gray-400 pr-3'>+</h3>
                                    </div>
                                    <h3 className='text-gray-500 font-semibold text-center mt-3'>Remove</h3>
                                </div>
                                <h3 className='font-semibold text-black mt-10'>N2000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}