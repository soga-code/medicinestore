import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp} from 'react-icons/fa';


export default function OurMedia() {
    return (
        <section className='item-center px-35 py-2'>
            <div className="flex flex-col-2 gap-20 justify-between w-full h-20  border-b-2 border-t-2 border-green-600 mb-25 px-30 py-5">
                <h3 className='text-2xl text-black font-semibold'>Get daily health tips on all our media platforms</h3>
                <div className="flex space-x-4 text-2xl text-black py-2">
                <a href="#" className="hover:text-green-300"><FaFacebookF /></a>
                <a href="#" className="hover:text-green-300"><FaTwitter /></a>
                <a href="#" className="hover:text-green-300"><FaInstagram /></a>
                <a href="#" className="hover:text-green-300"><FaWhatsapp /></a>
                </div>
            </div>
        </section>
    );
}