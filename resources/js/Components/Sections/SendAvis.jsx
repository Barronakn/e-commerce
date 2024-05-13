import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const SendAvis = ({ testimonials, product }) => {
    //Avis par models
    const modelAvis = testimonials.filter(
        (avis) => avis.cv_modeles === product.modeles
    );

    // Affichage de la date
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);

        const options = {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
        };

        const formattedDate = date.toLocaleDateString("fr-FR", options);
        return formattedDate;
    };

    // Afficher les étoiles
    const afficheStars = (nombresdestars) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`cursor-pointer text-xl ${
                        i <= nombresdestars
                            ? "text-yellow-400"
                            : "text-gray-400"
                    }`}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    const [formData, setFormData] = useState({
        cv_modeles: product.modeles,
        client_username: "",
        client_profession: "",
        avislong: "",
        aviscourt: "",
        stars: 0, // Ajout de l'état pour la notation par étoiles
    });

    const [errors, setErrors] = useState({});

    const [totalAvis, setTotalAvis] = useState(
        testimonials
            ? testimonials.filter((avis) => avis.cv_modeles === product.modeles)
                  .length
            : 0
    ); // Nombre total d'avis

    const { client_username, client_profession, avislong, aviscourt, stars } =
        formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //
        Inertia.post(route("avis"), formData, {
            onSuccess: () => {
                setFormData({
                    cv_modeles: product.modeles,
                    client_username: "",
                    client_profession: "",
                    avislong: "",
                    aviscourt: "",
                    stars: 0,
                });
                setTotalAvis((nbrAvis) => nbrAvis++); //Incrémente le nombre d'avis
            },
        });
    };

    const testimonialsPerPage = 3; // Nombre d'éléments à afficher par page

    const [currentPage, setCurrentPage] = useState(1);

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(modelAvis.length / testimonialsPerPage);

    // Calcul de l'index de début et de fin des cv à afficher pour la page courante
    const startIndex = (currentPage - 1) * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;

    // Sélection des cv à afficher pour la page courante
    const currentTestimonials = modelAvis.slice(startIndex, endIndex);

    // Fonction pour passer à la page suivante
    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    // Fonction pour passer à la page précédente
    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div className="bg-white p-5">
            <div className="flex flex-col sm:flex-row items-center justify-between border-gray-400 border-b-2">
                <div>
                    <p>Avis & Témoignages</p>
                </div>
                <div className="flex flex-row gap-5 items-center text-sm my-3">
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
                    <p className="text-base">{totalAvis} Avis – Utilisateurs</p>
                </div>
            </div>
            {errors.name && (
                <div className="text-red-500">{errors.name[0]}</div>
            )}
            <form className="avis my-5" onSubmit={handleSubmit}>
                <input
                    type="hidden"
                    name="cv_modeles"
                    value={formData.cv_modeles}
                />

                <div className="w-full flex flex-col my-4">
                    <label htmlFor="client_username">Nom : </label>
                    <input
                        type="text"
                        name="client_username"
                        id="client_username"
                        placeholder="Ex: Casineuve A."
                        value={client_username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="w-full flex flex-col my-4">
                    <label htmlFor="client_profession">Profession : </label>
                    <input
                        type="text"
                        name="client_profession"
                        id="client_profession"
                        placeholder="Ex: Analyste Financière"
                        value={client_profession}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="my-4">
                    <label htmlFor="aviscourt">Avis : </label>
                    <textarea
                        className="resize-none w-full"
                        name="aviscourt"
                        id="aviscourt"
                        placeholder="Ex: Une valeur sûre pour se démarquer"
                        cols="30"
                        rows="2"
                        value={aviscourt}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className="my-4">
                    <label htmlFor="avislong">Commentaire : </label>
                    <textarea
                        className="resize-none w-full"
                        name="avislong"
                        id="avislong"
                        placeholder="Ex: Ce modèle de CV est une valeur sûre pour se démarquer..."
                        cols="30"
                        rows="4"
                        value={avislong}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                {/* Système de notation par étoiles */}
                <div className="flex items-center mb-4">
                    <label htmlFor="stars" className="mr-2">
                        Note :{" "}
                    </label>
                    {[1, 2, 3, 4, 5].map((index) => (
                        <span
                            key={index}
                            className={`cursor-pointer text-xl ${
                                index <= stars
                                    ? "text-yellow-400"
                                    : "text-gray-400"
                            }`}
                            onClick={() =>
                                setFormData({ ...formData, stars: index })
                            }
                        >
                            ★
                        </span>
                    ))}
                </div>

                <button
                    className="bg-blue-600 cursor-pointer text-lg text-white hover:bg-blue-500 px-5 py-1 rounded-md"
                    type="submit"
                >
                    Laisser un Avis
                </button>
            </form>

            <div className="avis leading-8">
                {currentTestimonials &&
                    currentTestimonials.map((testimonial, index) => (
                        <div className="my-4" key={index}>
                            <div className="flex flex-row items-center">
                                {afficheStars(testimonial.stars)}
                            </div>
                            <h2 className="font-bold mb-2">
                                {testimonial.aviscourt}
                            </h2>
                            <p>{testimonial.avislong}</p>
                            <p className="italic">
                                {testimonial.client_username} /{" "}
                                {testimonial.client_profession} /{" "}
                                {formatTimestamp(testimonial.created_at)}
                            </p>
                        </div>
                    ))}

                {/* Pagination */}
                {totalPages > 1 ? (
                    <div className="flex flex-row justify-between mt-4">
                        <button
                            className="cursor-pointer font-bold"
                            onClick={prevPage}
                            disabled={currentPage === 1}
                        >
                            &lt; Précédent
                        </button>
                        <span className="mx-4 text-blue-500">
                            Page {currentPage} sur {totalPages}
                        </span>
                        <button
                            className="cursor-pointer font-bold"
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                        >
                            Suivant &gt;
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default SendAvis;
