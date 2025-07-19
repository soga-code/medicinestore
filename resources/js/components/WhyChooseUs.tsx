import React from 'react';

export default function WhyChooseUs() {
    return (
        <section className="mx-auto px-6 md:px-12 lg:px-20 py-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-12 text-center">
                Why Choose MediCare+?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex justify-center">
                    <div className="p-6 border-2 border-green-700 rounded-full text-center max-w-xs">
                        <h4 className="font-bold text-lg mb-2">Certified Medicines</h4>
                        <p className="text-sm">We provide only certified and approved drugs for all your health needs.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="p-6 border-2 border-green-700 rounded-full text-center max-w-xs">
                        <h4 className="font-bold text-lg mb-2">Fast Delivery</h4>
                        <p className="text-sm">Receive your prescriptions right at your doorstep in record time.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="p-6 border-2 border-green-700 rounded-full text-center max-w-xs">
                        <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
                        <p className="text-sm">Our support team is always available to assist with your needs.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="p-6 border-2 border-green-700 rounded-full text-center max-w-xs">
                        <h4 className="font-bold text-lg mb-2">Certified Pharmacists</h4>
                        <p className="text-sm">We have certified pharmacists to attend to all your health needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
