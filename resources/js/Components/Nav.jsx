import React from 'react';

const Nav = () => {
    return (
        <div>
            <nav className="bg-gray-700">
                <div className="container mx-auto">
                    <ul className="flex items-center justify-between py-4">
                        <li>
                            <a href="/accueil" className="text-white font-bold text-lg">
                                <img className="w-14 h-14" src="./images/Virtual_Shop_Logo.png" alt="logo_img" />
                            </a>
                        </li>
                        <li>
                            <a href="/shops" className="text-gray-300 hover:text-white ml-6">Produits</a>
                        </li>
                        <li>
                            <a href="/cart" className="text-gray-300 hover:text-white ml-6">Panier</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-300 hover:text-white ml-6">Contact</a>
                        </li>
                        <li className="ml-6 relative group">
                            <ul className="flex shadow-lg p-2 text-gray-700">
                                <li>
                                    <a href="/compte" className="rounded-s-lg bg-white py-3 px-6 hover:bg-gray-200">Compte</a>
                                </li>
                                <li>
                                    <a href="/logout" className="rounded-e-lg bg-white py-3 px-6 hover:bg-gray-200">Déconnexion</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
