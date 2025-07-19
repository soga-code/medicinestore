import React from 'react';


export default function ContactHero() {
    return (
        <section className="mb-20 flex flex-col items-center justify-between gap-10 px-6 py-10 sm:px-10 lg:flex-row lg:gap-20 lg:px-20">
            <div className="">
                <h1 className="mb-6 text-3xl leading-snug font-semibold text-black sm:text-4xl lg:text-5xl">
                    We are Available <span className="text-4xl text-green-700">24/7</span>, Contact Us Bellow
                </h1>
                <p className="text-base leading-relaxed text-black sm:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus possimus magni libero illum nemo fuga unde qui ab
                    sint, distinctio laboriosam commodi, atque voluptates officiis hic reiciendis architecto sit.
                </p>
            </div>

            <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-10">
                <div
                    className="h-56 w-56 rounded-t-full bg-cover bg-center sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                    style={{ backgroundImage: "url('images/her.jpg')" }}
                ></div>
                <div className="h-56 w-56 rounded-b-full bg-green-600 sm:h-72 sm:w-72 lg:h-80 lg:w-80"></div>
            </div>
        </section>
    );
}
