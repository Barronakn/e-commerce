import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import React from 'react';


const Home = () => {

    return (
        <div>
            <Nav />
            <section className="home py-10">
                <div className="ml-20 mt-48 w-2/3">
                    <h1 className="text-4xl font-bold mb-4">Bienvenue sur votre espace de shopping</h1>
                    <p className="text-lg text-gray-700">Découvrez une large sélection de produits de qualité</p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
