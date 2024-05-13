import FilterColor from "@/Components/FilterColor";
import FilterProfile from "@/Components/FilterProfile";
import Head from "@/Components/Head";
import Menu from "@/Components/Menu";
import PageNav from "@/Components/PageNav";
import Footer from "@/Components/Sections/Footer";
import Others from "@/Components/Sections/Others";
import WhatsAppBtn from "@/Components/WhatsAppBtn";
import React, { useEffect, useState } from "react";
import bannierremodeles from "../../../public/assets/bannierremodeles.png";
import ModeleOneList from "@/Components/ModeleOneList";
import FilterModeleHexaColor from "@/Components/FilterModeleHexaColor";

const SansPhoto = ({ products, items }) => {
    const [groupedModels, setGroupedModels] = useState({});
    const [filteredModels, setFilteredModels] = useState({});
    const [selectedModel, setSelectedModel] = useState(null); // Modèle sélectionné par l'utilisateur
    const [currentPage, setCurrentPage] = useState(1);
    const [modelsPerPage] = useState(8);
    const [filteredProducts, setFilteredProducts] = useState();
    const [visible, setVisible] = useState(false);

    const grouped = {};
    // Regrouper les produits par modèle au chargement initial
    useEffect(() => {
        products
            .filter((cv) => cv.typedecv.match(/Sans\s+Photo/i))
            .forEach((product) => {
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
            filtered[modelName] = groupedModels[modelName]
                .filter((cv) => cv.typedecv.match(/Sans\s+Photo/i))
                .filter((product) => product.variants.couleurhexa === colorHexa);
            setFilteredModels(filtered);
            setSelectedModel(modelName); // Définir le modèle sélectionné après le filtrage
            setCurrentPage(1); // Réinitialiser la page actuelle à la première page après le filtrage
        };

        // Fonction pour filtrer par type
        const handleFilterByType = (type) => {
            setFilteredProducts([]);
            const filtered = {};
            Object.keys(groupedModels).forEach((modelName) => {
                // Vérifier si le modèle a des CV qui correspondent au type sélectionné
                const filteredCVs = groupedModels[modelName].filter((product) =>
                    product.typedecv.includes(type)
                );
                // Si des CV correspondent, les ajouter au filtre, sinon, ignorer ce modèle
                if (filteredCVs.length > 0) {
                    filtered[modelName] = filteredCVs;
                }
            });
            setFilteredModels(filtered);
        };

    // Fonction pour gérer le changement de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculer l'index du dernier modèle de la page
    const indexOfLastModel = currentPage * modelsPerPage;
    // Calculer l'index du premier modèle de la page
    const indexOfFirstModel = indexOfLastModel - modelsPerPage;
    // Récupérer les modèles actuels à afficher
    const currentModels = Object.keys(filteredModels).slice(
        indexOfFirstModel,
        indexOfLastModel
    );

    const totalPages = Math.ceil(
        Object.keys(filteredModels).length / modelsPerPage
    );

    // Récupérer les modèles actuels à afficher
    const currentModelsFilteredProducts = filteredProducts && filteredProducts.slice(
        indexOfFirstModel,
        indexOfLastModel
    );

    const totalPagesFilteredProducts = filteredProducts && Math.ceil(
        filteredProducts.length / modelsPerPage
    );



    const model = document.querySelectorAll(".model-container");
    const modelArray = Array.from(model);

    const cvType = products.filter((cv) => cv.typedecv.match(/Sans\s+Photo/i));



    // Fonction pour annuler les filtres
    const handleCancelFilter = () => {
        const checkboxes = document.querySelectorAll('input[type="radio"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
        setFilteredModels(groupedModels); // Réinitialiser les modèles filtrés aux modèles groupés initiaux
        setSelectedModel(null); // Réinitialiser le modèle sélectionné
        setCurrentPage(1); // Réinitialiser la page actuelle à la première page
        setFilteredProducts([]); // Réinitialiser le cv sélectionné par couleur
        modelArray.forEach(element => {
            element.classList.remove("hidden")
        });

        setVisible(false);
    };

    // Filtre position au scroll
    const [isFilterFixed, setIsFilterFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const filterElement = document.querySelector(".filtre");

            if (filterElement) {
                const filterOffsetTop = filterElement.offsetTop;
                const filterHeight = filterElement.offsetHeight;
                const allSectionElement = document.querySelector(".others1");
                const allSectionHeight = allSectionElement.offsetHeight;
                const allSectionOffsetTop = allSectionElement.offsetTop;

                if (
                    scrollPosition >= filterOffsetTop &&
                    scrollPosition <=
                        allSectionOffsetTop + allSectionHeight - filterHeight
                ) {
                    setIsFilterFixed(true);
                } else {
                    setIsFilterFixed(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <Head
                title="Casineuve Actions | +200 Modèles de CV sans photos à télécharger et à remplir"
                description="Découvrez notre univers dédié à l'excellence dans la rédaction de CV et de lettres de motivation. Chez Casineuve Actions, nous proposons des modèles de CV Word professionnels, esthétiques et personnalisables, conçus pour vous démarquer dans le monde professionnel. Notre équipe experte vous accompagne dans la rédaction de CV percutants qui mettent en avant votre parcours de manière claire et professionnelle. Que vous soyez étudiant, professionnel confirmé, ou en reconversion, nos services de montage de dossier vous garantissent une présentation impeccable auprès des recruteurs. Optimisez votre recherche d'emploi avec nos conseils spécialisés et nos modèles de CV téléchargeables. Casineuve Actions, c'est l'assurance d'un CV qui vous représente et qui séduit les employeurs. Rejoignez des milliers de candidats satisfaits et donnez un nouvel élan à votre carrière avec nos services de qualité."
                keywords="Casineuve Actions, Casineuve, CV Word, CV PowerPoint, Joli CV, CV 2024, CV 2023, CV Professionnel, CV Pro, CV Professionnel sur deux pages , CV Pro sur deux pages, Modèles de CV sur deux pages, Modèles de CV 2024, Modèles de CV 2023, Modèles de CV Pro, Modèles de CV, Créer un CV, CV attractif, CV design, CV original, Modèles CV gratuits, CV téléchargement gratuit, Conseils rédaction CV, CV réussi, CV moderne, CV efficace, Modèles de CV Word, Modèles de CV professionnels, Rédaction de CV, CV personnalisable, Lettres de motivation percutantes, Services de montage de dossier, CV esthétique et professionnel, Conseils pour rédiger un CV, CV téléchargeable, Modèles de CV pour tous métiers, CV impactant, curriculum vitae, Personnaliser son CV, Lettre de motivation, Rédiger lettre de motivation, Modèle lettre de motivation, Lettre de motivation professionnelle, Exemple lettre de motivation, Conseils lettre de motivation, aide"
            />
            <Menu items={items} />

            <section className="mt-32 mx-10 sm:mx-20">
                <PageNav link="/cv_professionnel-cv_word-cv_powerPoint-cv_junior-cv_simples-cv_senior-cv_ modernes-cv-sur_deux_pages" linkName="Modèles de CV à Télécharger" />
            </section>

            <section className="mx-10 sm:mx-20">
                {visible && (
                    <div
                        className={`filtre left ${
                            isFilterFixed
                                ? "fixed top-20 left-3 sm:left-[57px] xl:left-20"
                                : "absolute left-3 sm:left-[57px]"
                        } w-auto sm:w-5/6 xl:w-auto mt-10 p-4 bg-white h-auto xl:h-full`}
                    >
                        <h3 className="uppercase font-bold">
                            Filtre pour vous
                        </h3>
                        <div className="flex sm:flex-row flex-col justify-center items-center my-10 xl:flex-row">
                            <FilterColor
                                cvType={products}
                                setFilteredProducts={setFilteredProducts}
                                modelArray={modelArray}
                                setFilteredModels={setFilteredModels}
                            />
                            <FilterProfile
                                handleFilterByType={handleFilterByType}
                            />
                        </div>
                        <div className="text-center">
                            <button
                                className="bg-black text-white p-2 rounded-md"
                                onClick={handleCancelFilter}
                            >
                                Annuler le filtre
                            </button>
                        </div>
                    </div>
                )}
                <div
                    className={`filtre left ${
                        isFilterFixed
                            ? "fixed top-20 left-6 xl:left-20"
                            : "absolute"
                    } w-full xl:w-52 2xl:w-96 mt-10 p-4 bg-white xl:h-full hidden xl:flex flex-col`}
                >
                    <h3 className="uppercase font-bold">Filtre pour vous</h3>
                    <div className="filter flex flex-row xl:flex-col justify-center my-0">
                        <FilterColor
                            cvType={products}
                            setFilteredProducts={setFilteredProducts}
                            modelArray={modelArray}
                            setFilteredModels={setFilteredModels}
                        />
                        <FilterProfile
                            handleFilterByType={handleFilterByType}
                        />
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-black text-white p-2 rounded-md"
                            onClick={handleCancelFilter}
                        >
                            Annuler le filtre
                        </button>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="hidden xl:block left xl:w-1/5"></div>
                    <div className="right xl:ml-10 mt-10 xl:w-[100%] h-full max-w-full">
                        <img
                            className="pointer-events-none"
                            src={bannierremodeles}
                            alt="bannierremodeles-img"
                        />

                        <div className="flex flex-col flex-justify-center gap-5 bg-white p-3 xl:p-10 text-justify">
                            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-blue-500 my-2">
                                Le recrutement est avant tout visuel
                            </h2>
                            <p className="text-base md:text-lg">
                                Faute de pouvoir tester tous les candidats un
                                par un au travail, le recruteur va se fier à ses
                                impressions. Inutile donc de préciser à quel
                                point il est primordial de faire bonne
                                impression avec votre dossier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="xl:hidden flex justify-center mt-10">
                    <button
                        className="text-center bg-black px-4 py-2 text-white rounded-md"
                        onClick={() => setVisible(true)}
                    >
                        Faire un filtre
                    </button>
                </div>
                <div className="all bg-gray-200 mx-10 xl:ml-14 xl:mr-20">
                    <div className="flex sm:flex-row flex-col gap-6">
                        <div className="hidden xl:block left xl:w-[25%]"></div>
                        <div className="right w-full xl:w-[75%] mt-6">
                            <div className="bg-white grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                                {currentModels.map((modelName) => (
                                    <div
                                        key={modelName}
                                        className="model-container border-r-4 border-b-4 border-l-0 border-t-0 border-gray-200 w-full p-4"
                                    >
                                        {/* Afficher le CV par défaut pour chaque modèle */}
                                        {selectedModel !== modelName &&
                                            filteredModels[modelName].length >
                                                0 &&
                                            [filteredModels[modelName][0]].map(
                                                (cv, index) => (
                                                    <div
                                                        key={index}
                                                        className="block model"
                                                    >
                                                        <ModeleOneList
                                                            id={cv.id} // ID du premier CV du modèle
                                                            name={cv.modeles}
                                                            image_path={
                                                                cv.variants
                                                                    .image_path
                                                            }
                                                            couleur={
                                                                cv.variants
                                                                    .couleur
                                                            }
                                                        />
                                                    </div>
                                                )
                                            )}

                                        {/* Afficher les CV filtrés après la sélection d'un modèle */}
                                        {selectedModel === modelName &&
                                            filteredModels[modelName].length >
                                                0 &&
                                            filteredModels[modelName].map(
                                                (cv) => (
                                                    <div
                                                        key={cv.id}
                                                        className="block model"
                                                    >
                                                        <ModeleOneList
                                                            id={cv.id}
                                                            name={cv.modeles}
                                                            image_path={
                                                                cv.variants
                                                                    .image_path
                                                            }
                                                            couleur={
                                                                cv.variants
                                                                    .couleur
                                                            }
                                                        />
                                                    </div>
                                                )
                                            )}

                                        {/* Filtrer par couleur pour afficher d'autres CV du modèle */}
                                        {filteredModels[modelName].length >
                                            0 && (
                                            <div className="flex flex-col model">
                                                <FilterModeleHexaColor
                                                    products={
                                                        groupedModels[modelName]
                                                    }
                                                    filterName={modelName}
                                                    handleFilter={
                                                        handleFilterByColor
                                                    }
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Afficher les CV filtrés par la barre de filtre */}
                                {currentModelsFilteredProducts &&
                                    currentModelsFilteredProducts.map((cv) => (
                                        <div key={cv.id} className="block p-5">
                                            <ModeleOneList
                                                id={cv.id}
                                                name={cv.modeles}
                                                image_path={
                                                    cv.variants.image_path
                                                }
                                                couleur={cv.variants.couleur}
                                            />
                                        </div>
                                    ))}
                            </div>


                            <div className="pagination flex flex-row justify-between mt-4">
                                <div>
                                    {currentPage > 1 && (
                                        <button
                                            onClick={() =>
                                                paginate(currentPage - 1)
                                            }
                                        >
                                            &lt; Précédent
                                        </button>
                                    )}
                                </div>
                                <div>
                                    <span className="mx-4 text-blue-500">
                                        Page {currentPage} sur{" "}
                                        {totalPages ||
                                            totalPagesFilteredProducts}
                                    </span>
                                </div>
                                <div>
                                    {Object.keys(filteredModels).length >
                                    currentPage * modelsPerPage ? (
                                        <button
                                            onClick={() =>
                                                paginate(currentPage + 1)
                                            }
                                        >
                                            Suivant &gt;
                                        </button>
                                    ) : (
                                        filteredProducts !== undefined &&
                                        filteredProducts.length >
                                            currentPage * modelsPerPage && (
                                            <button
                                                onClick={() =>
                                                    paginate(currentPage + 1)
                                                }
                                            >
                                                Suivant &gt;
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20">
                <Others />
            </section>

            <section>
                <Footer />
            </section>
            <WhatsAppBtn />
        </div>
    );
};

export default SansPhoto;
