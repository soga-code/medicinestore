import React from 'react';


export default function WhyChooseUs() {
    return (
        <section className=" mx-auto px-35 py-20">
            <h3 className="text-2xl font-bold text-green-700 mb-12 text-center">Why Choose MediCare+?</h3>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="mb-30">
                    <div className="p-6 border-2 border-green-700 rounded-full text-center">
                        <h4 className="font-bold text-lg mb-2">Certified Medicines</h4>
                        <p>We provide only certified and approved drugs for all your health needs.</p>
                    </div>
                </div>
                <div className="mt-30">
                    <div className="p-6 border-2 border-green-700 rounded-full text-center">
                        <h4 className="font-bold text-lg mb-2">Fast Delivery</h4>
                        <p>Receive your prescriptions right at your doorstep in record time.</p>
                    </div>
                </div>
                <div className="mb-30">
                    <div className="p-6 border-2 border-green-700 rounded-full text-center">
                        <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
                        <p>Our support team is always available to assist with your needs.</p>
                    </div>
                </div>
                <div className="mt-30">
                    <div className="p-6 border-2 border-green-700 rounded-full text-center">
                        <h4 className="font-bold text-lg mb-2">Certified Pharmacists</h4>
                        <p>We have certified and pharmacists to attend to all your health needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}