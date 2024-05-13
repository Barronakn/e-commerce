import React, { useState, useEffect } from "react";
import modernes from "../../../public/assets/modernes.jpg";
import nopic from "../../../public/assets/nopic.jpg";
import design from "../../../public/assets/design.jpg";
import Download from "./Download";
import ModeleOneList from "./ModeleOneList";
import FilterModeleHexaColor from "./FilterModeleHexaColor";

const HomeSection = ({ products }) => {
    const [groupedModels, setGroupedModels] = useState({});
    const [filteredModels, setFilteredModels] = useState({});
    const [selectedModel, setSelectedModel] = useState(null); // Modèle sélectionné par l'utilisateur

    const [groupedModelsDeuxPages, setGroupedModelsDeuxPages] = useState({});
    const [filteredModelsDeuxPages, setFilteredModelsDeuxPages] = useState({});
    const [selectedModelDeuxPages, setSelectedModelDeuxPages] = useState(null);

    //Affichage des cv de deux pages
    // Regrouper les produits par modèle au chargement initial
    useEffect(() => {
        const groupedDeuxPages = {};
        products
            .filter((cv) => cv.typedecv.match(/02\s+Pages/i))
            .forEach((product) => {
                const modelName = product.modeles;
                if (!groupedDeuxPages[modelName]) {
                    groupedDeuxPages[modelName] = [];
                }
                groupedDeuxPages[modelName].push(product);
            });
        setGroupedModelsDeuxPages(groupedDeuxPages);
        setFilteredModelsDeuxPages(groupedDeuxPages); // Initialise les modèles filtrés avec tous les modèles au chargement initial
    }, [products]);

    // Fonction pour filtrer les modèles par couleur
    const handleFilterByColorDeuxPages = (modelName, colorHexa) => {
        const filtered = { ...groupedModelsDeuxPages };
        filtered[modelName] = groupedModelsDeuxPages[modelName]
            .filter((cv) => cv.typedecv.match(/02\s+Pages/i))
            .filter((product) => product.variants.couleurhexa === colorHexa);
        setFilteredModelsDeuxPages(filtered);
        setSelectedModelDeuxPages(modelName); // Définir le modèle sélectionné après le filtrage
    };

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
        <section className="mx-10 md:mx-32 my-14">
            <div className="flex justify-center mb-10">
            <iframe
                className="w-full"
                height="350"
                src="https://www.youtube.com/embed/N_CtUbQoqBg?si=68tno1qAFLwQPouU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
            </div>
            <div className="bg-gray-600 text-white p-5 leading-8">
                <div>
                    <h3 className="text-xl font-bold">
                        Votre CV est Votre Vendeur
                    </h3>
                </div>
                <div className="my-5">
                    <p>
                        <span className="font-bold">
                            Avoir un Curriculum Vitae, c'est bien. En avoir
                            plusieurs, c'est préférable.
                        </span>{" "}
                        Devant la diversité de compétences et d'aptitudes
                        requises pour les offres d'emploi, il serait presque
                        impossible d'avoir un unique Curriculum Vitae assez
                        polyvalent pour être à votre avantage.
                    </p>
                    <p>
                        <span className="font-bold">
                            Nous croyons en la puissance de la diversité et de
                            l'adaptabilité
                        </span>
                        ; c'est pourquoi nous mettons à votre disposition{" "}
                        <span className="font-bold">
                            une vaste sélection de modèles de CV, vous offrant
                            la liberté de choisir sans contrainte.
                        </span>{" "}
                    </p>
                </div>
            </div>
            <section className="cvdedeuxpages bg-white grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {Object.keys(filteredModelsDeuxPages)
                    .slice(0, 3)
                    .map((modelName) => (
                        <div
                            key={modelName}
                            className="model-container border-r-4 border-b-4 border-l-0 border-t-0 border-gray-200  w-full p-4"
                        >
                            {/* Afficher le CV par défaut pour chaque modèle */}
                            {selectedModelDeuxPages !== modelName &&
                                filteredModelsDeuxPages[modelName].length > 0 &&
                                [filteredModelsDeuxPages[modelName][0]].map(
                                    (cv, index) => (
                                        <div
                                            key={index}
                                            className="block model"
                                        >
                                            <ModeleOneList
                                                id={cv.id} // ID du premier CV du modèle
                                                name={cv.modeles}
                                                image_path={
                                                    cv.variants.image_path
                                                }
                                                couleur={cv.variants.couleur}
                                            />
                                        </div>
                                    )
                                )}

                            {/* Afficher les CV filtrés après la sélection d'un modèle */}
                            {selectedModelDeuxPages === modelName &&
                                filteredModelsDeuxPages[modelName].length > 0 &&
                                filteredModelsDeuxPages[modelName].map((cv) => (
                                    <div key={cv.id} className="block model">
                                        <ModeleOneList
                                            id={cv.id}
                                            name={cv.modeles}
                                            image_path={cv.variants.image_path}
                                            couleur={cv.variants.couleur}
                                        />
                                    </div>
                                ))}

                            {/* Filtrer par couleur pour afficher d'autres CV du modèle */}
                            {filteredModelsDeuxPages[modelName].length > 0 && (
                                <div className="flex flex-col model">
                                    <FilterModeleHexaColor
                                        products={
                                            groupedModelsDeuxPages[modelName]
                                        }
                                        filterName={modelName}
                                        handleFilter={
                                            handleFilterByColorDeuxPages
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    ))}
            </section>

            <div className="typedecv flex flex-col xl:flex-row items-center justify-center gap-20 my-10">
                <div className="relative">
                    <img
                        className="pointer-events-none"
                        src={modernes}
                        alt="modernes-img"
                    />
                    <Download typelink="/cvmodernes" />
                </div>
                <div className="relative">
                    <img
                        className="pointer-events-none"
                        src={nopic}
                        alt="nopic-img"
                    />
                    <Download typelink="cvsansphoto" />
                </div>
                <div className="relative">
                    <img
                        className="pointer-events-none"
                        src={design}
                        alt="design-img"
                    />
                    <Download typelink="cvdesign" />
                </div>
            </div>
            <div className="mb-10 leading-8">
                <h3 className="sm:text-xl text-base font-bold">
                    Personnalisation à l'Infini : Facile, Accessible et Unique
                </h3>
                <p className="text-base sm:text-sm">
                    Explorez la créativité sans limites avec nos{" "}
                    <span className="font-bold text-gray-600">
                        modèles de CV au format Word et PowerPoint
                    </span>
                    . La{" "}
                    <span className="font-bold text-gray-600">
                        personnalisation
                    </span>{" "}
                    devient un jeu d'enfant, même{" "}
                    <span className="font-bold text-gray-600">
                        sans compétences informatiques. En 15 mn votre CV
                    </span>{" "}
                    devient l'expression unique de votre histoire
                    professionnelle, sans tracas ni complication
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-4">
                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="font-bold">CV Word & Powerpoint</h2>
                        <p>
                            Remplacez simplement les informations génériques par
                            celles qui reflètent votre parcours et vos
                            aspirations.{" "}
                        </p>
                    </div>
                    <div>
                        <a
                            className="text-white bg-black px-6 py-2 rounded-md"
                            href=""
                        >
                            Télécharger
                        </a>
                    </div>
                </div>
                <section className="all grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-white xl:ml-14">
                    {Object.keys(filteredModels)
                        .slice(10, 14)
                        .map((modelName) => (
                            <div
                                key={modelName}
                                className="model-container border-r-4 border-b-4 border-l-0 border-t-0 border-gray-200  w-full mt-6 py-4 px-8"
                            >
                                {/* Afficher le CV par défaut pour chaque modèle */}
                                {selectedModel !== modelName && (
                                    <div className="block">
                                        <ModeleOneList
                                            id={filteredModels[modelName][0].id} // ID du premier CV du modèle
                                            name={modelName}
                                            image_path={
                                                filteredModels[modelName][0]
                                                    .variants.image_path
                                            }
                                            couleur={
                                                filteredModels[modelName][0]
                                                    .variants.couleur
                                            }
                                        />
                                    </div>
                                )}

                                {/* Afficher les CV filtrés après la sélection d'un modèle */}
                                {selectedModel === modelName &&
                                    filteredModels[modelName].map((product) => (
                                        <div key={product.id} className="block">
                                            <ModeleOneList
                                                id={product.id}
                                                name={modelName}
                                                image_path={
                                                    product.variants.image_path
                                                }
                                                couleur={
                                                    product.variants.couleur
                                                }
                                            />
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
            </div>
        </section>
    );
};

export default HomeSection;
