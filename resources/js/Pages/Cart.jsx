import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Menu from "@/Components/Menu";
import Head from "@/Components/Head";
import Footer from "@/Components/Sections/Footer";
import Bannerier from "@/Components/Bannerier";
import mastercard from "../../../public/assets/paiement/master-card.jpg";
import PayPal from "../../../public/assets/paiement/PayPal.jpg";
import Pay from "../../../public/assets/paiement/Pay.jpg";
import visa from "../../../public/assets/paiement/Iconevisa.png";
import stripe from "../../../public/assets/paiement/stripe.png";
import fedapay from "../../../public/assets/paiement/Fedapay.png";
import FilterModeleHexaColor from "@/Components/FilterModeleHexaColor";

const Cart = ({ products, totalNewPrice, totalOldPrice, productcvs, items }) => {
    const [groupedModels, setGroupedModels] = useState({});
    const [filteredModels, setFilteredModels] = useState({});
    const [selectedModel, setSelectedModel] = useState(null); // Modèle sélectionné par l'utilisateur
    // Regrouper les produits par modèle au chargement initial
    useEffect(() => {
        const grouped = {};
        productcvs.forEach((product) => {
            const modelName = product.modeles;
            if (!grouped[modelName]) {
                grouped[modelName] = [];
            }
            grouped[modelName].push(product);
        });
        setGroupedModels(grouped);
        setFilteredModels(grouped); // Initialise les modèles filtrés avec tous les modèles au chargement initial
    }, [productcvs]);

    // Fonction pour filtrer les modèles par couleur
    const handleFilterByColor = (modelName, colorHexa) => {
        const filtered = { ...groupedModels };
        filtered[modelName] = groupedModels[modelName].filter(
            (product) => product.variants.couleurhexa === colorHexa
        );
        setFilteredModels(filtered);
        setSelectedModel(modelName); // Définir le modèle sélectionné après le filtrage
    };

    FedaPay.init('.pay-btn', { public_key: 'pk_live_1NAzZcE8KQi-9lFi66rm_VhS' });


    const handleRemoveItem = (cartItemId) => {
        Inertia.delete(`/cart/remove/${cartItemId}`);
    };

    return (
        <div>
            <Head
                title="Casineuve Actions | +200 Modèles de CV Professionnel - CV Word - CV PowerPoint - CV Junior - CV Simples - CV Senior -  CV Modernes, CV Professionnel sur deux pages à télécharger et à remplir"
                description="Découvrez notre univers dédié à l'excellence dans la rédaction de CV et de lettres de motivation. Chez Casineuve Actions, nous proposons des modèles de CV Word professionnels, esthétiques et personnalisables, conçus pour vous démarquer dans le monde professionnel. Notre équipe experte vous accompagne dans la rédaction de CV percutants qui mettent en avant votre parcours de manière claire et professionnelle. Que vous soyez étudiant, professionnel confirmé, ou en reconversion, nos services de montage de dossier vous garantissent une présentation impeccable auprès des recruteurs. Optimisez votre recherche d'emploi avec nos conseils spécialisés et nos modèles de CV téléchargeables. Casineuve Actions, c'est l'assurance d'un CV qui vous représente et qui séduit les employeurs. Rejoignez des milliers de candidats satisfaits et donnez un nouvel élan à votre carrière avec nos services de qualité."
                keywords="Casineuve Actions, Casineuve, CV Word, CV PowerPoint, Joli CV, CV 2024, CV 2023, CV Professionnel, CV Pro, CV Professionnel sur deux pages , CV Pro sur deux pages, Modèles de CV sur deux pages, Modèles de CV 2024, Modèles de CV 2023, Modèles de CV Pro, Modèles de CV, Créer un CV, CV attractif, CV design, CV original, Modèles CV gratuits, CV téléchargement gratuit, Conseils rédaction CV, CV réussi, CV moderne, CV efficace, Modèles de CV Word, Modèles de CV professionnels, Rédaction de CV, CV personnalisable, Lettres de motivation percutantes, Services de montage de dossier, CV esthétique et professionnel, Conseils pour rédiger un CV, CV téléchargeable, Modèles de CV pour tous métiers, CV impactant, curriculum vitae, Personnaliser son CV, Lettre de motivation, Rédiger lettre de motivation, Modèle lettre de motivation, Lettre de motivation professionnelle, Exemple lettre de motivation, Conseils lettre de motivation, Acceuil"
            />
            <Menu items={items} />
            <Bannerier />
            <section className="panier mx-5 sm:mx-20 my-10">
                <div>
                    <h1 className="text-2xl font-bold">Votre Panier</h1>
                    <p className="py-2">
                        ✅ Validez votre commande pour profiter de notre offre
                        exceptionnelle 🎉
                    </p>
                </div>
                <section className="flex xl:flex-row flex-col gap-5">
                    {products.length > 0 ? (
                        <div className="left w-full xl:w-3/4">
                            <table className="w-full table-auto border-collapse bg-white">
                                <thead>
                                    <tr>
                                        <th className="p-2 text-sm sm:text-base">
                                            Modèles / Produits
                                        </th>
                                        <th className="p-2 text-sm sm:text-base sm:block hidden">Couleur</th>
                                        <th className="p-2 text-sm sm:text-base">Prix unitaire</th>
                                        <th className="p-2 text-sm sm:text-base">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((cartItem, index) => (
                                        <tr key={index} className="text-center">
                                            <td className="border-t-2 p-2">
                                                <img
                                                    className="pointer-events-none h-16 sm:h-32 mx-auto my-0"
                                                    src={`../../../${cartItem.variant.image_path}`}
                                                    alt="cvprofesionnel"
                                                />
                                                <p className="text-sm sm:text-base font-bold">
                                                    Modèle de cv{" "}
                                                    <span className="uppercase">
                                                        {cartItem.cv.modeles}
                                                    </span>
                                                </p>
                                            </td>
                                            <td className="p-2 border-t-2 sm:block hidden pt-16">
                                                {cartItem.variant.couleur}
                                            </td>
                                            <td className="p-2 border-t-2 text-indigo-500 font-bold">
                                                {cartItem.cv.newprice} €
                                            </td>
                                            <td className="p-2 border-t-2">
                                                <button
                                                    onClick={() =>
                                                        handleRemoveItem(
                                                            cartItem.id
                                                        )
                                                    }
                                                    className="text-red-500"
                                                >
                                                    Supprimer
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="mx-auto my-10">
                            <p className="text-center text-lg font-bold">
                                Le panier est vide !
                            </p>
                        </div>
                    )}
                    {products.length > 0 && (
                        <div className="right w-full xl:w-1/4 bg-white p-6">
                            <div>
                                <p className="text-justify text-sm sm:text-base">
                                    Obtenez 25% de réduction supplémentaire à
                                    partir du deuxième modèle 😊
                                </p>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="py-2 text-gray-500 text-base sm:text-xl font-bold">
                                        Prix total :
                                    </p>
                                    <p className="text-green-900 text-base sm:text-xl font-bold">
                                        {totalNewPrice} €
                                    </p>
                                </div>
                                <p className="text-indigo-500 my-2 font-semibold">
                                    {totalOldPrice - totalNewPrice} € économisés
                                    !
                                </p>
                                <p className="text-center text-sm sm:text-base">
                                    Vous recevrez votre commande par mail
                                    automatiquement !
                                </p>
                                <div className="flex justify-center">
                                    <button
                                        id="pay-btn"
                                        className="pay-btn py-2 px-4 mt-4 bg-black text-white rounded hover:bg-gray-600"
                                        data-transaction-amount={totalNewPrice}
                                        data-currency-iso="EUR"
                                        data-transaction-description="Télécharger un CV"
                                    >
                                        Passer à l'action
                                    </button>
                                </div>
                                <div className="card-paiement flex flex-row flex-wrap items-center gap-1 my-3">
                                    <img
                                        className="pointer-events-none w-10 h-6"
                                        loading="lazy"
                                        src={mastercard}
                                        alt="mastercard-img"
                                    />
                                    <img
                                        className="pointer-events-none w-10 h-6"
                                        loading="lazy"
                                        src={PayPal}
                                        alt="PayPal-img"
                                    />
                                    <img
                                        className="pointer-events-none w-10 h-6"
                                        loading="lazy"
                                        src={Pay}
                                        alt="Pay-img"
                                    />
                                    <img
                                        className="pointer-events-none w-10 h-8"
                                        loading="lazy"
                                        src={visa}
                                        alt="visa-icon"
                                    />
                                    <img
                                        className="pointer-events-none w-10 h-8"
                                        loading="lazy"
                                        src={stripe}
                                        alt="stripe-icon"
                                    />
                                    <img
                                        className="pointer-events-none w-10 h-8"
                                        loading="lazy"
                                        src={fedapay}
                                        alt="fedapay-icon"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </section>

            <section className="md:m-20 m-10">
                <div className="md:ml-14">
                    <h2 className="text-xl leading-8 font-bold my-2">
                        Vous pourriez être intéressé.e par les modèles suivants,
                        sélectionnés pour vous
                    </h2>
                </div>
                <section className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 bg-white ml-14">
                    {Object.keys(filteredModels)
                        .slice(5, 10)
                        .map((modelName) => (
                            <div
                                key={modelName}
                                className="model-container border-r-4 border-b-4 border-l-0 border-t-0 border-gray-200 w-full mt-6 py-4 px-8"
                            >
                                {/* Afficher le CV par défaut pour chaque modèle */}
                                {selectedModel !== modelName && (
                                    <div className="block">
                                        <div
                                            key={
                                                filteredModels[modelName][0].id
                                            }
                                            className="block"
                                        >
                                            <div className="flex flex-col lg:flex-row justify-center lg:items-center">
                                                <div>
                                                    <a
                                                        href={
                                                            "/detailscv/" +
                                                            filteredModels[
                                                                modelName
                                                            ][0].id
                                                        }
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            className="pointer-events-none"
                                                            src={`../../../${filteredModels[modelName][0].variants.image_path}`}
                                                            alt={
                                                                filteredModels[
                                                                    modelName
                                                                ][0].typedecv
                                                            }
                                                        />
                                                    </a>
                                                    <a
                                                        className="hover:underline"
                                                        href={
                                                            "/detailscv/" +
                                                            filteredModels[
                                                                modelName
                                                            ][0].id
                                                        }
                                                    >
                                                        Modèle de CV{" "}
                                                        <span>
                                                            {
                                                                filteredModels[
                                                                    modelName
                                                                ][0].modeles
                                                            }
                                                        </span>
                                                    </a>
                                                    <h3>
                                                        <strong>
                                                            Couleur :{" "}
                                                        </strong>
                                                        <span className="uppercase text-sm">
                                                            {
                                                                filteredModels[
                                                                    modelName
                                                                ][0].variants
                                                                    .couleur
                                                            }
                                                        </span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Afficher les CV filtrés après la sélection d'un modèle */}
                                {selectedModel === modelName &&
                                    filteredModels[modelName].map((product) => (
                                        <div key={product.id} className="block">
                                            <div className="flex flex-col lg:flex-row justify-center lg:items-center">
                                                <div>
                                                    <a
                                                        href={
                                                            "/detailscv/" +
                                                            product.id
                                                        }
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            className="pointer-events-none"
                                                            src={`../../../${product.variants.image_path}`}
                                                            alt={
                                                                product.typedecv
                                                            }
                                                        />
                                                    </a>
                                                    <a
                                                        className="hover:underline"
                                                        href={
                                                            "/detailscv/" +
                                                            product.id
                                                        }
                                                    >
                                                        Modèle de CV{" "}
                                                        <span>
                                                            {product.modeles}
                                                        </span>
                                                    </a>
                                                    <h3>
                                                        <strong>
                                                            Couleur :{" "}
                                                        </strong>
                                                        <span className="uppercase text-sm">
                                                            {
                                                                product.variants
                                                                    .couleur
                                                            }
                                                        </span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                {/* Filtrer par couleur pour afficher d'autres CV du modèle */}
                                <div className="flex flex-col">
                                    <FilterModeleHexaColor
                                        products={groupedModels[modelName]}
                                        filterName={modelName}
                                        handleFilter={handleFilterByColor}
                                    />
                                </div>
                            </div>
                        ))}
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default Cart;
