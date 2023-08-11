import React, { useState } from 'react';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { Inertia } from '@inertiajs/inertia';

const Shop = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = (e) => {
        e.preventDefault();

        // Send a POST request to add the product to the cart
        Inertia.post(`/cart/add/${product.id}`, { quantity });
    };

    return (
        <div>
            <Nav />
            <div className="container mx-auto">
                <h1 className="text-center text-3xl font-bold mt-8">Détails du produit</h1>

                <div className="flex flex-col md:flex-row items-center justify-center py-10">
                    {product.image_path ? (
                        <div className="md:w-1/3">
                            <img loading='lazy' className="w-full bg-white p-5" src={product.image_path} alt="Product Image" />
                        </div>
                    ) : (
                        <p className="text-center">Aucune image disponible</p>
                    )}

                    <div className="md:w-2/3 md:pl-10">
                        <h2 className="text-xl font-bold mb-3">
                            <span className="underline">Produit</span>: {product.name}
                        </h2>
                        <p>
                            <span className="underline">Description</span>: {product.description}
                        </p>
                        <p>
                            <span className="underline">Prix</span>: {product.price} FCFA
                        </p>

                        <form className="flex items-center mt-4" onSubmit={addToCart}>
                            <label htmlFor="quantity" className="mr-2">
                                Quantité:
                            </label>
                            <button type="button" className="px-3 py-1 bg-yellow-500 text-white font-bold rounded-md" onClick={decrementQuantity}>
                                -
                            </button>
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                value={quantity}
                                min="1"
                                className="w-16 px-2 py-1 border border-gray-300 rounded-md mx-2"
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                            />
                            <button type="button" className="px-3 py-1 bg-yellow-500 text-white font-bold rounded-md" onClick={incrementQuantity}>
                                +
                            </button>
                            <button type="submit" className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-md ml-4">
                                Ajouter au panier
                            </button>
                        </form>

                        <p className="mt-2">
                            <span className="underline">Prix total</span>: {(quantity * product.price).toFixed(2)} FCFA
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;

