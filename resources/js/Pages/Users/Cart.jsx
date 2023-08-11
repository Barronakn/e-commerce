import React from 'react';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { Inertia } from '@inertiajs/inertia';

const Cart = ({ cartItems, totalPrice }) => {
    const handleRemoveItem = (cartItemId) => {
        // Send a DELETE request to remove the cart item
        Inertia.delete(`/cart/remove/${cartItemId}`);
    };

    return (
        <div>
            <Nav />
            <section className="px-20">
                <h1 className="text-center text-2xl py-6 font-bold">Panier</h1>

                {cartItems.length > 0 ? (
                    <table className="w-full border">
                        <thead>
                            <tr>
                                <th className="py-2 border-b">Produits</th>
                                <th className="py-2 border-b">Prix unitaire</th>
                                <th className="py-2 border-b">Quantité</th>
                                <th className="py-2 border-b">Actions</th>
                                <th className="py-2 border-b">Prix total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((cartItem) => (
                                <tr key={cartItem.id} className="text-center">
                                    <td className="py-2 border-b">{cartItem.product.name}</td>
                                    <td className="py-2 border-b">{cartItem.product.price} FCFA</td>
                                    <td className="py-2 border-b">{cartItem.quantity}</td>
                                    <td className="py-2 border-b">
                                        <button onClick={() => handleRemoveItem(cartItem.id)} className="text-purple-500">
                                            Supprimer
                                        </button>
                                    </td>
                                    <td className="py-2 border-b">{cartItem.product.price * cartItem.quantity} FCFA</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="text-center">
                            <tr>
                                <td className="py-2 border-b"></td>
                                <td className="py-2 border-b"></td>
                                <td className="py-2 border-b"></td>
                                <td className="py-2 border-b">Prix total</td>
                                <td>{totalPrice} FCFA</td>
                            </tr>
                        </tfoot>
                    </table>
                ) : (
                    <p className="text-center">Le panier est vide.</p>
                )}

                {cartItems.length > 0 && (
                    <div className="flex justify-center mb-60">
                        <button
                            className="pay-btn py-2 px-4 mt-4 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            data-transaction-amount={totalPrice}
                            data-transaction-description="Acheter mon produit"
                        >
                            Payer
                        </button>
                    </div>
                )}

                {/* <script src="https://js.fedapay.com/checkout.js"></script>
            <script>
                FedaPay.init(
                '.pay-btn',
                {
                    public_key: 'pk_live_vqkxxq9z7b2pdDU6d5Uwnw7X'
                },
                );
            </script> */}
            </section>
            <Footer />
        </div>
    );
};

export default Cart;
