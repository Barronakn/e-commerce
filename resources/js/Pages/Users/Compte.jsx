import React from 'react';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { Inertia } from '@inertiajs/inertia';

const Compte = ({ user, orders }) => {
    return (
        <div>
            <Nav />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-6">Mon compte</h1>

                <h3 className="text-lg font-bold mb-2">Informations personnelles</h3>
                <p className="mb-2">Nom : {user.name}</p>
                <p className="mb-6">Email : {user.email}</p>

                <h3 className="text-lg font-bold mb-2">Commandes récentes</h3>
                {orders.map((order) => (
                    <div key={order.id}>
                        <p>Numéro de commande : {order.order_number}</p>
                        <p>Montant : {order.amount}</p>
                        <hr className="my-4" />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Compte;
