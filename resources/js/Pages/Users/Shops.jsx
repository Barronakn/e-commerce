import React from 'react';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';

const Shops = ({ products }) => {
    return (
        <div>
            <Nav />
            <section>
                <h1 className="text-center text-3xl font-bold mt-8">Liste des produits</h1>
                    <div className="grid grid-cols-3 gap-20 py-24 px-20">
                        {products.map((product) => (
                        <ul key={product.id}>
                            <div className="flex flex-col bg-gray-100 p-9 rounded-md">
                                <a href={"/shop/" + product.id}>
                                    <img loading='lazy' src={product.image_path} alt={product.name} />
                                </a>

                                <li className="flex justify-between text-center mt-5">
                                    <a className="underline" href={"/shop/" + product.id}>{product.name}</a>
                                    <span>{product.price} FCFA</span>
                                </li>
                            </div>
                        </ul>
                ))}
                    </div>
            </section>
            <Footer />
        </div>
    );
};

export default Shops;
