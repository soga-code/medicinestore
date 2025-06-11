import React from 'react';


export default function AboutHero() {
    return (
        <section className="flex-col-2 flex h-140 justify-between px-35 mb-20">
            <div className="py-50">
                <h1 className="mb-6 text-4xl text-black font-semibold">
                    The <span className="text-green-700 text-5xl">Genesis</span> of Medicare+
                </h1>
                <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus <br /> possimus magni libero illum nemo fuga unde qui ab sint, distinctio laboriosam <br /> commodi, atque voluptates officiis hic reiciendis architecto sit.
                </p>
            </div>
            <div className="flex-col-2 flex gap-15">
                <div className="h-90 w-90 rounded-t-full bg-cover bg-center mt-50" style={{ backgroundImage: "url('images/Heroimg1.jpg')" }}></div>
                <div className="h-90 w-90 rounded-b-full bg-green-600"></div>
            </div>
        </section>
    );
}
