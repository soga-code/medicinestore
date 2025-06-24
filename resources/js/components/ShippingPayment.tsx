import React from 'react'
import { DropdownMenu } from './ui/dropdown-menu';


export default function ShippingPayment() {
    return (
        <section className='px-25 py-20'>
            <h3 className='font-bold text-start text-2xl text-green-700 mb-10'> Shipping and Billing</h3>
            <div className="border-2 border-gray-300 rounded-2xl h-auto w-250 px-10 py-10 shadow-md">
                <form className='space-y-4 text-black bg-white p-3 rounded-lg w-full' action="">
                    <button className='px-9 py-1 ml-190 font-semibold border-2 border-red-700 bg-white text-red-700 hover:bg-white hover:bg- rounded-full'>Log In</button>
                    <label className="block font-bold mb-1">Contact</label>
                    <input type="text" placeholder='Email or mobile phone number' name='name' className='w-full border border-gray-300 p-2 rounded' />
                    <label className="block font-bold mb-1 mt-3">Delivery</label>
                    <div className="flex flex-col-2 gap-5">
                        <div className="w-110 bg-green-200 p-2 h-10 rounded border border-green-700 flex flex-col-2 gap-2">
                            <div className="rounded-full h-5 w-5 bg-green-700 p-1">
                                <div className="rounded-full h-3 w-3 bg-white"></div>
                            </div>
                            <h3 className='font-bold '>Ship</h3>
                        </div>
                        <div className="w-110 bg-white p-2 h-10 rounded border border-gray-300 flex flex-col-2 gap-2">
                            <div className="rounded-full h-5 w-5 bg-white p-1 border border-gray-300"></div>
                            <h3 className='font-bold '>Pickup in store</h3>
                        </div>
                    </div>
                    <div className="w-full bg-white p-2 h-10 rounded border border-gray-300 flex flex-col-2 gap-150">
                        <h3 className='font-bold text-gray-400'>Country/Region</h3>
                        <DropdownMenu />
                    </div>
                </form>
            </div>
        </section>
    );
}