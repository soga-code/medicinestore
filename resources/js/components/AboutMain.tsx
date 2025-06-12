export default function AboutMain() {
    return (
        <section className="h-full w-full bg-cover bg-center p-35 inset-0 bg-gradient-to-b from-black to-green-800/90 z-0">
            <div className="flex gap-50 justify-center p-2 mb-20">
                <div
                    className="flex h-150 w-150 items-center rounded-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/aboutimg.jpg')" }}
                ></div>
                <h1 className="text-6xl font-bold text-white py-40">We are most concerned <br />about <span className="text-6xl text-green-600">YOU </span>and your <br /> <span className="text-6xl text-green-600"> HEALTH</span>
                </h1>
            </div>
            <div className="flex gap-30 justify-center p-2">
                <div className="p-2 justify-start py-45">
                    <h3 className="text-3xl mb-4">What makes us<span className="text-red-500">unique</span> from others.</h3>
                    <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus braut eligendi <br />doloremque jcecn lorem lorem.</p>
                    <li className="mb-1">We provide only certified and approved drugs for all your health needs.</li>
                    <li className="mb-1">Receive your prescriptions right at your doorstep in record time.</li>
                    <li className="mb-1">Our support team is always available to assist with your needs.</li>
                    <li className="mb-1">We have certified and approved pharmacists to attend to all your health needs.</li>
                </div>
                <div
                    className="flex h-150 w-150 items-center rounded-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/unique.jpg')" }}
                ></div>
            </div>
        </section>
    );
}
