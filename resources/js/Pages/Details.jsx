import React, { useState, useEffect } from "react";
import Footer from "@/Components/Sections/Footer";
import Menu from "@/Components/Menu";
import Head from "@/Components/Head";
import Others from "@/Components/Sections/Others";
import sheet from "../../../public/assets/icon/02fichiers.png";
import pen from "../../../public/assets/icon/pen.png";
import assistance from "../../../public/assets/icon/Icone Assistance.png";
import valide from "../../../public/assets/icon/Icones Design.png";
import paiement from "../../../public/assets/icon/Icone de Paiement.png";
import FilterModeleImg from "@/Components/FilterModeleImg";
import mastercard from "../../../public/assets/paiement/master-card.jpg";
import PayPal from "../../../public/assets/paiement/PayPal.jpg";
import Pay from "../../../public/assets/paiement/Pay.jpg";
import visa from "../../../public/assets/paiement/Iconevisa.png";
import stripe from "../../../public/assets/paiement/stripe.png";
import fedapay from "../../../public/assets/paiement/Fedapay.png";
import WhatsAppBtn from "@/Components/WhatsAppBtn";
import SendAvis from "@/Components/Sections/SendAvis";
import FilterDetailsHexaColor from "@/Components/FilterDetailsHexaColor";
import FilterModeleHexaColor from "@/Components/FilterModeleHexaColor";
import { Inertia } from "@inertiajs/inertia";

const Details = ({ products, product, variant, testimonials, items }) => {
    const addToCart = (e) => {
        e.preventDefault();

        Inertia.get(`/cart/add/${product.id}`);
        alert("Ce produit vient d'être ajouter à votre panier.");
    };

    const totalAvis = testimonials
        ? testimonials.filter((avis) => avis.cv_modeles === product.modeles)
              .length
        : 0;

    const [filteredProducts, setFilteredProducts] = useState(product);
    const [filteredVariants, setFilteredVariant] = useState(variant);

    // Fonction pour supprimer les balises HTML
    const stripHtmlTags = (html) => {
        const regex = /(<([^>]+)>)/gi;
        return html.replace(regex, "");
    };

    const [groupedModels, setGroupedModels] = useState({});
    const [filteredModels, setFilteredModels] = useState({});
    const [selectedModel, setSelectedModel] = useState(null); // Modèle sélectionné par l'utilisateur
    // Regrouper les produits par modèle au chargement initial
    useEffect(() => {
        const grouped = {};
        products.forEach((product) => {
            const modelName = product.modeles;
            if (!grouped[modelName]) {
                grouped[modelName] = [];
            }
            grouped[modelName].push(product);
        });
        setGroupedModels(grouped);
        setFilteredModels(grouped); // Initialise les modèles filtrés avec tous les modèles au chargement initial
    }, [products]);

    // Fonction pour filtrer les modèles par couleur
    const handleFilterByColor = (modelName, colorHexa) => {
        const filtered = { ...groupedModels };
        filtered[modelName] = groupedModels[modelName].filter(
            (product) => product.variants.couleurhexa === colorHexa
        );
        setFilteredModels(filtered);
        setSelectedModel(modelName); // Définir le modèle sélectionné après le filtrage
    };

    return (
        <div>
            <Head
                title="Casineuve Actions | Modèles de CV Professionnel à télécharger et à remplir"
                description="Découvrez notre univers dédié à l'excellence dans la rédaction de CV et de lettres de motivation. Chez Casineuve Actions, nous proposons des modèles de CV Word professionnels, esthétiques et personnalisables, conçus pour vous démarquer dans le monde professionnel. Notre équipe experte vous accompagne dans la rédaction de CV percutants qui mettent en avant votre parcours de manière claire et professionnelle. Que vous soyez étudiant, professionnel confirmé, ou en reconversion, nos services de montage de dossier vous garantissent une présentation impeccable auprès des recruteurs. Optimisez votre recherche d'emploi avec nos conseils spécialisés et nos modèles de CV téléchargeables. Casineuve Actions, c'est l'assurance d'un CV qui vous représente et qui séduit les employeurs. Rejoignez des milliers de candidats satisfaits et donnez un nouvel élan à votre carrière avec nos services de qualité."
                keywords="Casineuve Actions, Casineuve, CV Word, CV PowerPoint, Joli CV, CV 2024, CV 2023, CV Professionnel, CV Pro, CV Professionnel sur deux pages , CV Pro sur deux pages, Modèles de CV sur deux pages, Modèles de CV 2024, Modèles de CV 2023, Modèles de CV Pro, Modèles de CV, Créer un CV, CV attractif, CV design, CV original, Modèles CV gratuits, CV téléchargement gratuit, Conseils rédaction CV, CV réussi, CV moderne, CV efficace, Modèles de CV Word, Modèles de CV professionnels, Rédaction de CV, CV personnalisable, Lettres de motivation percutantes, Services de montage de dossier, CV esthétique et professionnel, Conseils pour rédiger un CV, CV téléchargeable, Modèles de CV pour tous métiers, CV impactant, curriculum vitae, Personnaliser son CV, Lettre de motivation, Rédiger lettre de motivation, Modèle lettre de motivation, Lettre de motivation professionnelle, Exemple lettre de motivation, Conseils lettre de motivation, Acceuil"
            />
            <Menu items={items} />

            <div className="flex flex-col sm:flex-row gap-1 items-center bg-white p-2 mt-32 mx-10 md:mx-20 xl:mx-32">
                <a className="text-sm sm:text-base hover:text-blue-500 hover:underline" href="/">
                    Accueil
                </a>
                <span className="rotate-90 sm:rotate-0">&gt;</span>
                <a
                    className="text-sm sm:text-base hover:text-blue-500 hover:underline"
                    href="/cv_professionnel-cv_word-cv_powerPoint-cv_junior-cv_simples-cv_senior-cv_ modernes-cv-sur_deux_pages"
                >
                    Modèles de CV à Télécharger
                </a>
                <span className="rotate-90 sm:rotate-0">&gt;</span>
                <a
                    className="text-sm sm:text-base hover:text-blue-500 hover:underline"
                    href="/avisettemoignages"
                >
                    Avis & Témoignages
                </a>
            </div>
            <section className="details flex flex-col xl:flex-row justify-between mx-10 md:mx-20 xl:mx-32 mb-10 mt-10 gap-20">
                <div className="left w-full xl:w-1/2">
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col w-40 h-40">
                            <FilterModeleImg
                                products={products}
                                filterName={product.modeles}
                                filterImgPath={filteredVariants.image_path}
                                selectedImgProduct={setFilteredProducts}
                                selectedImgVariant={setFilteredVariant}
                            />
                        </div>
                        <div>
                            <img
                                className="pointer-events-none"
                                loading="lazy"
                                src={`../../../${filteredVariants.image_path}`}
                                alt={product.typedecv}
                            />
                        </div>
                    </div>
                    <div className="textes my-4">
                        <div className="details-1 bg-white p-4 mb-4">
                            <h2 className="text-base sm:text-lg font-bold mb-4">
                                À propos du modèle {filteredProducts.modeles}
                            </h2>
                            <div
                                className="leading-8"
                                dangerouslySetInnerHTML={{
                                    __html: variant.about,
                                }}
                            />
                        </div>

                        <div className="bg-white p-4 flex flex-col gap-5">
                            <div className="details-2 my-2">
                                <h2 className="text-base sm:text-lgfont-bold mb-2">
                                    Facile à Personnaliser sans compétences
                                    informatiques
                                </h2>
                                <ul
                                    type="a"
                                    className="flex leading-8 flex-col gap-3 p-4 bg-blue-200"
                                >
                                    <li>
                                        •{" "}
                                        <span className="font-bold">
                                            Modifiable à 100% :{" "}
                                        </span>
                                        Textes, couleurs, icônes, photo, mise en
                                        page
                                    </li>
                                    <li>
                                        •{" "}
                                        <span className="font-bold">
                                            Utilisable sur PC & MAC avec
                                            Microsoft Office
                                        </span>
                                        (Word & PowerPoint)
                                    </li>
                                    <li>
                                        •{" "}
                                        <span className="font-bold">
                                            Configurations optimisées
                                        </span>{" "}
                                        pour l'enregistrement au format PDF et
                                        l'impression
                                    </li>
                                    <li>
                                        •{" "}
                                        <span className="font-bold">
                                            Bonus :
                                        </span>{" "}
                                        100 icônes et illustrations pour
                                        personnaliser
                                    </li>
                                    <li>
                                        •{" "}
                                        <span className="font-bold">
                                            Assistance Proactive
                                        </span>{" "}
                                        par{" "}
                                        <a
                                            className="text-blue-500 hover:underline"
                                            href="mailto:ycasineuve@gmail.com"
                                        >
                                            E-mail
                                        </a>{" "}
                                        &{" "}
                                        <a
                                            className="text-blue-500 hover:underline"
                                            href="https://wa.me/message/IBE7CZ6ZMHQIB1"
                                        >
                                            WhatsApp{" "}
                                        </a>
                                        7/7 et tutoriels vidéos
                                    </li>
                                </ul>
                            </div>
                            <div className="details-3">
                                <h2 className="text-base sm:text-lg font-bold mb-4">
                                    Le Modèle de CV Alpha pour vous ?
                                </h2>
                                <div className="flex flex-col gap-3">
                                    <div>
                                        <div
                                            className="leading-8"
                                            dangerouslySetInnerHTML={{
                                                __html: variant.foryou,
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold leading-8">
                                            N'hésitez pas à explorer d'autres
                                            modèles de la sélection{" "}
                                            <a
                                                className="text-blue-500 hover:underline"
                                                href="/cv_professionnel-cv_word-cv_powerPoint-cv_junior-cv_simples-cv_senior-cv_ modernes-cv-sur_deux_pages"
                                            >
                                                Modèles de CV Originaux
                                            </a>{" "}
                                            pour trouver celui qui correspond le
                                            mieux à vos besoins.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="details-4">
                                <h2 className="text-base sm:text-lg font-bold">
                                    Aide & Accompagnement
                                </h2>
                                <p className="font-bold my-2">
                                    Ça devient galère 😔 ?
                                </p>
                                <div>
                                    <div className="flex flex-col gap-3 leading-8">
                                        <p>
                                            N'hésitez pas à consulter notre{" "}
                                            <a
                                                className="text-blue-500 hover:underline"
                                                href="/aide"
                                            >
                                                FAQ
                                            </a>{" "}
                                            et les tutoriels vidéos disponibles
                                            pour vous accompagner à
                                            personnaliser votre modèle de CV sur
                                            Word ou Powerpoint. Ou si vous
                                            préférez les interactions humaines
                                            directes comme nous, vous allez vous
                                            faire plaisir en contactant notre
                                            équipe d’
                                            <a
                                                className="text-blue-500 hover:underline"
                                                href="https://wa.me/message/IBE7CZ6ZMHQIB1"
                                            >
                                                assistance
                                            </a>
                                            🖖.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right w-full xl:w-1/2">
                    <div className="bg-white p-5">
                        <h2 className="text-base sm:text-xl font-bold mb-3 uppercase">
                            <span>Modèle de cv</span> {filteredProducts.modeles}
                        </h2>
                        <div className="bg-green-600 text-center text-white p-2">
                            <p>Profitez de -50% de Réduction</p>
                        </div>
                        <div className="rank flex flex-row justify-end gap-4 items-center text-sm my-3">
                            <div className="flex flex-row">
                                {[1, 2, 3, 4, 5].map((nbr, index) => (
                                    <span
                                        key={index}
                                        className={`cursor-pointer text-xl ${
                                            nbr <= 5 && "text-yellow-400"
                                        }`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-base">
                                {totalAvis} Avis – Utilisateurs
                            </p>
                        </div>
                        <div className="my-3">
                            <p className="leading-8">
                                🚀 Avec ce design qui capte l'attention,
                                préparez-vous à être en tête de liste !
                            </p>
                        </div>
                        <div className="flex flex-col leading-8 gap-3">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <img
                                    loading="lazy"
                                    className="cursor-pointer w-8 h-8"
                                    src={sheet}
                                    alt="sheet-icon"
                                />

                                <p>
                                    <span className="text-blue-500 font-bold">
                                        Fichiers Modifiables :{" "}
                                    </span>
                                    Formats Word (.docx) et PowerPoint (.pptx).
                                    Compatibles sur PC & MAC
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <img
                                    loading="lazy"
                                    className="cursor-pointer w-8 h-8"
                                    src={pen}
                                    alt="pen-icon"
                                />

                                <p>
                                    <span className="text-blue-500 font-bold">
                                        Personnalisation Illimitée :{" "}
                                    </span>
                                    Modifiez, déplacez, ajustez les rubriques,
                                    la police, les couleurs et les icônes du CV
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <img
                                    loading="lazy"
                                    className="cursor-pointer w-8 h-8"
                                    src={assistance}
                                    alt="assistance-icon"
                                />

                                <p>
                                    <span className="text-blue-500 font-bold">
                                        Assistance Garantie :{" "}
                                    </span>
                                    Assistance instantanée via WhatsApp et
                                    E-mail. Tutoriels vidéo disponibles
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <img
                                    loading="lazy"
                                    className="cursor-pointer w-8 h-8"
                                    src={valide}
                                    alt="valide-icon"
                                />

                                <p>
                                    <span className="text-blue-500 font-bold">
                                        Designs Modernes :{" "}
                                    </span>
                                    Optimisés pour passer à travers les systèmes
                                    ATS et les logiciels RH
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <img
                                    loading="lazy"
                                    className="cursor-pointer w-8 h-8"
                                    src={paiement}
                                    alt="paiement-icon"
                                />

                                <p>
                                    <span className="text-blue-500 font-bold">
                                        Paiements Sécurisés et Faciles :{" "}
                                    </span>
                                    Plusieurs options de paiement disponibles
                                    (Paiements Mobiles y compris)
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-0 gap-5 mt-3">
                            <div className="flex flex-col items-center">
                                {/* Filtre par couleur hexadeximal */}
                                <div className="flex flex-col">
                                    <FilterDetailsHexaColor
                                        products={products}
                                        filterName={product.modeles}
                                        selectedColorProduct={
                                            setFilteredProducts
                                        }
                                        selectedColorVariant={
                                            setFilteredVariant
                                        }
                                        filterHexa={
                                            filteredVariants.couleurhexa
                                        }
                                    />
                                </div>
                                <p>
                                    <span className="font-bold">Couleur </span>:{" "}
                                    {filteredVariants.couleur}
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h2 className="font-bold">Prix</h2>
                                <div className="flex sm:flex-row flex-col gap-5 items-center">
                                    <p className="text-green-600 text-xl sm:text-2xl">
                                        {filteredProducts.newprice} €
                                    </p>
                                    <p className="text-red-500 line-through">
                                        {filteredProducts.oldprice} €
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 justify-center items-center my-3">
                            <form
                                className="flex items-center"
                                onSubmit={addToCart}
                            >
                                <button
                                    type="submit"
                                    className="text-sm sm:text-base px-4 py-2 bg-black text-white font-bold rounded-md ml-4"
                                >
                                    Ajouter au panier
                                </button>
                            </form>

                            <span>ou</span>
                            <p className="font-bold text-xl py-3 px-3">
                                Obtenez tous
                            </p>
                        </div>
                        <div className="bg-blue-200 p-4 mb-4 mr-1">
                            <div className="flex sm:flex-row flex-col gap-2 sm:gap-10">
                                <p className="text-xl">Nos modèles de CV à</p>
                                <span className="text-2xl sm:text-3xl font-bold text-green-600">
                                    29.99 €
                                </span>
                            </div>
                            <p>
                                Téléchargez plus de 100 modèles de CV sans frais
                                cachés !
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 leading-8">
                            <h3 className="font-bold text-lg">
                                Moyens de paiements sécurisés
                            </h3>
                            <p>
                                Plusieurs options de paiement sécurisées
                                disponibles{" "}
                                <span className="font-bold">
                                    (Paiements Mobiles y compris)
                                </span>
                            </p>
                        </div>
                        <div className="card-paiement flex flex-row flex-wrap items-center gap-3 my-3">
                            <img
                                className="pointer-events-none w-16 h-10"
                                loading="lazy"
                                src={mastercard}
                                alt="mastercard-img"
                            />
                            <img
                                className="pointer-events-none w-16 h-10"
                                loading="lazy"
                                src={PayPal}
                                alt="PayPal-img"
                            />
                            <img
                                className="pointer-events-none w-16 h-10"
                                loading="lazy"
                                src={Pay}
                                alt="Pay-img"
                            />
                            <img
                                className="pointer-events-none w-16 h-10"
                                loading="lazy"
                                src={visa}
                                alt="visa-icon"
                            />
                            <img
                                className="pointer-events-none w-16 h-10"
                                loading="lazy"
                                src={stripe}
                                alt="stripe-icon"
                            />
                            <img
                                className="pointer-events-none w-16 h-10"
                                loading="lazy"
                                src={fedapay}
                                alt="fedapay-icon"
                            />
                        </div>
                        <div>
                            <p className=" leading-8">
                                Le traitement de vos informations de paiement
                                (carte de crédit ou compte mobile money) est
                                effectué de manière sécurisée par les
                                fournisseurs de ces services.
                                <span className="font-bold">
                                    Casineuve Actions,
                                </span>{" "}
                                n’a donc pas accès à vos informations !
                            </p>
                        </div>
                    </div>

                    <SendAvis testimonials={testimonials} product={product} />
                </div>
            </section>

            <section className="md:m-20 m-10">
                <div className="md:ml-14">
                    <h2 className="text-xl leading-8 font-bold my-2">
                        Vous pourriez être intéressé.e par les modèles suivants,
                        sélectionnés pour vous
                    </h2>
                </div>
                <section className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 bg-white ml-14">
                    {Object.keys(filteredModels)
                        .slice(14, 8)
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

            <WhatsAppBtn />
            <Others />
            <Footer />
        </div>
    );
};

export default Details;
