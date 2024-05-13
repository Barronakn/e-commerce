import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({});

    const { name, email, password, password_confirmation } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = Inertia.post('/register', formData);
            if (response.errors) {
                setErrors(response.errors);
            } else {
                // Rediriger ou gérer le succès selon le besoin
                Inertia.visit("/accueil"); // Rediriger vers la page spécifiée par le backend
            }
        } catch (error) {
            return 'Une erreur s\'est produite :'.error;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Register</h1>
            <form className="w-64" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                    {errors.name && <div className="text-red-500">{errors.name[0]}</div>}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 font-medium">Password</label>
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password_confirmation" className="block mb-2 font-medium">Confirm Password</label>
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={password_confirmation}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 text-white font-bold rounded"
                >
                    Register
                </button>
            </form>
            <a className='text-purple-800 mt-2 hover:text-purple-600' href="/login">Login</a>
        </div>
    );
};

export default Register;
