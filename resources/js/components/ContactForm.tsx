import { Link } from '@inertiajs/react';

export default function ContactForm() {
    return (
        <section className="item-center mb-15 h-160 w-full bg-cover bg-center px-35 py-20" style={{ backgroundImage: "url('/images/her.jpg')" }}>
            <div className="flex w-150 justify-start">
                <form className="w-full space-y-4 rounded-lg bg-white p-10 text-black" action="https://getform.io/f/bronxlpa" method="POST">
                    <label className="mb-1 block font-semibold">Name</label>
                    <input type="text" placeholder="Name" name="name" className="w-full rounded border p-2" />
                    <label className="mb-1 block font-semibold">Email</label>
                    <input type="email" placeholder="Email" name="email" className="w-full rounded border p-2" />
                    <label className="mb-1 block font-semibold">Message</label>
                    <textarea placeholder="Type your message here" name="message" className="h-32 w-full rounded border p-2"></textarea>
                    <Link
                        href="/contact"
                        className="rounded-full bg-red-700 px-6 py-2 font-semibold text-white transition hover:bg-white hover:text-red-700 hover:ring-2 hover:ring-red-700"
                    >
                        Send
                    </Link>
                </form>
            </div>
        </section>
    );
}
