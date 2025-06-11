import React from 'react';


export default function OurTeam() {
    return (
        <section className='px-35 item-center py-25'>
            <h3 className="mb-15 text-center text-2xl font-bold text-green-700">Meet Our Health Team</h3>
            <div className="grid grid-cols-4 gap-2 px-15">
                <div className="p-4">
                    <div className="item-center p-4">
                        <div className="bg-cover bg-center h-70 w-70 rounded-full mb-8" style={{ backgroundImage: "url('/images/Heroimg1.jpg')"}}></div>
                        <h3 className='text-center font-semibold text-black mb-1'>Ayomide Ayoola</h3>
                        <h3 className='text-center text-black'>Position & Qualification</h3>
                    </div>
                </div>
                <div className="p-4">
                    <div className="item-center p-4">
                        <div className="bg-cover bg-center h-70 w-70 rounded-full mb-8" style={{ backgroundImage: "url('/images/Heroimg1.jpg')"}}></div>
                        <h3 className='text-center font-semibold text-black mb-1'>Ayomide Ayoola</h3>
                        <h3 className='text-center text-black'>Position & Qualification</h3>
                    </div>
                </div>
                <div className="p-4">
                    <div className="item-center p-4">
                        <div className="bg-cover bg-center h-70 w-70 rounded-full mb-8" style={{ backgroundImage: "url('/images/Heroimg1.jpg')"}}></div>
                        <h3 className='text-center font-semibold text-black mb-1'>Ayomide Ayoola</h3>
                        <h3 className='text-center text-black'>Position & Qualification</h3>
                    </div>
                </div>
                <div className="p-4">
                    <div className="item-center p-4">
                        <div className="bg-cover bg-center h-70 w-70 rounded-full mb-8" style={{ backgroundImage: "url('/images/Heroimg1.jpg')"}}></div>
                        <h3 className='text-center font-semibold text-black mb-1'>Ayomide Ayoola</h3>
                        <h3 className='text-center text-black'>Position & Qualification</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}