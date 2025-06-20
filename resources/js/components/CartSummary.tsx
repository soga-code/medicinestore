import React from 'react'


export default function CartSummary() {
    return (
        <section className='flex flex-col-2 px-25 py-20 gap-25'>
            <div className="p-1">
                <h3 className='font-bold text-start text-2xl text-green-700 mb-10'>My Cart Summary</h3>
                <div className="border-1 rounded-2xl h-150 w-250 px-10 py-10">
                    <div className="flex flex-col-2 gap-120 px-10">
                        <h3 className='font-bold'>Product</h3>
                        <div className="flex flex-col-2 gap-40">
                        <h3 className='font-bold'>Quantity</h3> 
                        <h3 className='font-bold'>Total</h3> 
                        </div>
                    </div>
                    <div className="">
                        <div className="my-6 border-t-2 border-gray-300"></div>
                        <div className="flex flex-col-2 gap-72 px-10 py-2">
                            <div className="flex flex-col-2 gap-10">
                                <div className="h-30 w-30 rounded-lg bg-cover" style={{ backgroundImage: "url('/images/newdrug5.jpg')" }}></div>
                                <div className="py-10">
                                    <h3 className='font-semibold text-green-700'>DRUG NAME</h3>
                                    <h3 className='font-semibold text-black'>N2,600</h3>
                                </div>
                            </div>
                            <div className="flex flex-col-2 gap-40">
                                <div className="flex flex-col-3 gap-0 p-2">
                                    <div className="border border-gray-700 h-8 w-10 text-center">
                                        <h3 className='text-2xl font-semibold text-black'>-</h3>
                                    </div>
                                    <div className="bg-gray-400 h-8 w-10 text-center">
                                        <h3 className='font-semibold text-black py-1'>2</h3>
                                    </div>
                                    <div className="bg-gray-400 h-8 w-10 text-center">
                                        <h3 className='text-2xl font-semibold text-black'>+</h3>
                                    </div>
                                </div>
                                <h3 className='text-gray-500 font-semibold'>Remove</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}