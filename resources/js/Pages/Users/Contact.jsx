import React, { useState } from 'react';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { Inertia } from '@inertiajs/inertia';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the form data using Inertia.post
        Inertia.post(route('contact'), formData, {
            onSuccess: () => {
                // Clear the form and show the success message
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            },
        });
    };

    return (
        <div>
            <Nav />
            <div className="flex flex-col justify-center items-center pb-8">
                <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>

                <form
                    className="flex flex-col gap-2 justify-center items-center"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="name" className="block text-gray-700">
                        Nom :
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        Required
                        value={name}
                        onChange={handleChange}
                        className="w-96 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                    />

                    <label htmlFor="email" className="block text-gray-700">
                        E-mail :
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        Required
                        value={email}
                        onChange={handleChange}
                        className="w-96 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                    />

                    <label htmlFor="message" className="block text-gray-700">
                        Message :
                    </label>
                    <textarea
                        rows="8"
                        id="message"
                        name="message"
                        Required
                        value={message}
                        onChange={handleChange}
                        className="w-96 resize-none px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                    ></textarea>

                    <button
                        type="submit"
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
