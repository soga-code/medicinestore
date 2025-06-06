import React from 'react';


export default function WhyChooseUs() {
    return (
        <section className=" mx-auto px-35 py-20 bg-green-100 text-black">
            <h3 className="text-2xl font-bold mb-12 text-center">What Our Clients Say</h3>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="p-10 border-2 rounded-3xl text-start">
                    <div className="flex flex-col-2 gap-4">
                        <img src="/images/client1.jpg" alt="Client 1" className='h-10 w-10 rounded-full mb-2' />
                        <h4 className="font-bold text-lg mt-2">Ayomide Ayoola</h4>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="p-10 border-2 rounded-3xl text-start">
                    <div className="flex flex-col-2 gap-4">
                        <img src="/images/client2.jpg" alt="Client 2" className='h-10 w-10 rounded-full mb-2' />
                        <h4 className="font-bold text-lg mt-2">Michael Tunde</h4>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="p-10 border-2 rounded-3xl text-start">
                    <div className="flex flex-col-2 gap-4">
                        <img src="/images/client3.jpg" alt="Client 3" className='h-10 w-10 rounded-full mb-2' />
                        <h4 className="font-bold text-lg mt-2">James Jackson</h4>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </section>
    );
}