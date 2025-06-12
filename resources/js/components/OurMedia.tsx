import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp} from 'react-icons/fa';


export default function OurMedia() {
    return (
        <section className='item-center px-35 py-10'>
            <div className="flex flex-col-2 gap-20 justify-between w-full h-15  border-b-2 border-t-2 border-green-600 mb-25 px-100 py-5">
                <h3 className='text-black font-semibold'>Get daily health tips on all our media platforms</h3>
                <div className="flex space-x-4 text-black mr-30">
                <a href="#" className="hover:text-green-300"><FaFacebookF /></a>
                <a href="#" className="hover:text-green-300"><FaTwitter /></a>
                <a href="#" className="hover:text-green-300"><FaInstagram /></a>
                <a href="#" className="hover:text-green-300"><FaWhatsapp /></a>
                </div>
            </div>
        </section>
    );
}