export default function AboutMain() {
  return (
    <section className="w-full bg-cover bg-center px-6 sm:px-10 lg:px-20 py-10 inset-0 bg-gradient-to-b from-black to-green-800/90 z-0">
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center text-center lg:text-left mb-20">
        <div
          className="h-52 w-52 sm:h-60 sm:w-60 lg:h-72 lg:w-72 rounded-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/aboutimg.jpg')" }}
        ></div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white py-4 lg:py-20">
          We are most concerned <br />
          about <span className="text-green-600">YOU </span> and your <br />
          <span className="text-green-600">HEALTH</span>
        </h1>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
        <div className="max-w-xl">
          <h3 className="text-2xl sm:text-3xl mb-4 font-semibold text-white">
            What makes us <span className="text-red-500">unique</span> from others.
          </h3>
          <p className="text-white mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus
            braut eligendi doloremque jcecn lorem lorem.
          </p>
          <ul className="text-white list-disc list-inside space-y-2">
            <li>We provide only certified and approved drugs for all your health needs.</li>
            <li>Receive your prescriptions right at your doorstep in record time.</li>
            <li>Our support team is always available to assist with your needs.</li>
            <li>We have certified and approved pharmacists to attend to all your health needs.</li>
          </ul>
        </div>

        <div
          className="h-52 w-52 sm:h-60 sm:w-60 lg:h-72 lg:w-72 rounded-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/unique.jpg')" }}
        ></div>
      </div>
    </section>
  );
}
