import React from 'react';


export default function ContactForm() {
    return (
        <section className='px-35 py-20 bg-cover bg-center w-full h-160 item-center mb-15' style={{ backgroundImage: "url('/images/her.jpg')"}}>
            <div className="flex justify-start w-150">
                <form className='space-y-4 text-black bg-white p-10 rounded-lg w-full' action="https://getform.io/f/bronxlpa" method='POST'>
                    <label className="block font-semibold mb-1">Name</label>
                    <input type="text" placeholder='Name' name='name' className='w-full border p-2 rounded' />
                    <label className="block font-semibold mb-1">Email</label>
                    <input type="email" placeholder='Email' name='email' className='w-full border p-2 rounded' />
                    <label className="block font-semibold mb-1">Message</label>
                    <textarea placeholder='Type your message here' name="message" className='w-full border p-2 rounded h-32'></textarea>
                    <button className='px-12 py-2 font-semibold bg-green-600 text-white hover:bg-white hover:text-green-600 hover:ring-2 rounded-full'>Send</button>
                </form>
            </div>
        </section>
    );
}