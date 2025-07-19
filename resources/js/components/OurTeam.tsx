import React from 'react';

export default function OurTeam() {
    return (
        <section className="px-6 sm:px-10 lg:px-35 py-16">
            <h3 className="mb-10 text-center text-2xl font-bold text-green-700">
                Meet Our Health Team
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-10 lg:px-15">
                <div className="p-4 flex flex-col items-center">
                    <div
                        className="bg-cover bg-center h-40 w-40 rounded-full mb-6"
                        style={{ backgroundImage: "url('/images/client1.jpg')" }}
                    ></div>
                    <h3 className="text-center font-semibold text-black mb-1">Ayomide Ayoola</h3>
                    <h3 className="text-center text-black">Position & Qualification</h3>
                </div>

                <div className="p-4 flex flex-col items-center">
                    <div
                        className="bg-cover bg-center h-40 w-40 rounded-full mb-6"
                        style={{ backgroundImage: "url('/images/client2.jpg')" }}
                    ></div>
                    <h3 className="text-center font-semibold text-black mb-1">Micheal Tunde</h3>
                    <h3 className="text-center text-black">Position & Qualification</h3>
                </div>

                <div className="p-4 flex flex-col items-center">
                    <div
                        className="bg-cover bg-center h-40 w-40 rounded-full mb-6"
                        style={{ backgroundImage: "url('/images/client3.jpg')" }}
                    ></div>
                    <h3 className="text-center font-semibold text-black mb-1">James Jackson</h3>
                    <h3 className="text-center text-black">Position & Qualification</h3>
                </div>

                <div className="p-4 flex flex-col items-center">
                    <div
                        className="bg-cover bg-center h-40 w-40 rounded-full mb-6"
                        style={{ backgroundImage: "url('/images/client2.jpg')" }}
                    ></div>
                    <h3 className="text-center font-semibold text-black mb-1">Ken Miles</h3>
                    <h3 className="text-center text-black">Position & Qualification</h3>
                </div>
            </div>
        </section>
    );
}
