import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function OurMedia() {
    return (
        <section className="items-center px-6 sm:px-10 lg:px-35 py-10">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between w-full border-b-2 border-t-2 border-green-600 mb-10 px-4 sm:px-10 lg:px-20 py-5">
                <h3 className="text-black font-semibold text-center">
                    Get daily health tips on all our media platforms
                </h3>
                <div className="flex justify-center space-x-6 text-black">
                    <a href="#" className="hover:text-green-300 text-xl">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-green-300 text-xl">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-green-300 text-xl">
                        <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-green-300 text-xl">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </section>
    );
}
