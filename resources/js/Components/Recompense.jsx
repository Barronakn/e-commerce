import React from "react";
import Target from "./Target";

const Recompense = () => {
    const appreciations = [
        {
            name: "Gloria",
            pays: "Dakar, Sénégal",
            avis: "Je suis comblée ! J'ai reçu une réponse positive pour le dossier que j'ai déposé. Leur CV a considérablement améliorer ma visibilité et a apporté un poids significatif à ma candidature. Un immense merci à Casineuve Actions, ma gratitude est sincère.",
        },
        {
            name: "Manon",
            pays: "Paris, France",
            avis: "Des modèles qui se démarquent réellement! J'ai été contacté pour un entretien rapidement après avoir utilisé le modèle. Merci à toute l'équipe pour ce coup de pouce précieux.",
        },
        {
            name: "Mohammed",
            pays: "Alger, Algérie",
            avis: "Les modèles de CV de Casineuve Actions sont tout simplement exceptionnels. J'ai trouvé celui qui correspondait parfaitement à mon profil. L'impact sur les recruteurs a été immédiat, je ne peux que les recommander.",
        },
    ];
    return (
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-around my-14 container">
            {appreciations.map((appreciation, index) => (
                <div className="flex flex-col items-center gap-2 bg-white shadow-md shadow-gray-500 p-5 w-full h-64 lg:w-96">
                    <h2 className="text-sm">
                        <span className="font-bold">{appreciation.name}</span> |{" "}
                        {appreciation.pays}
                    </h2>

                    <Target />

                    <div className="objectif-icon"></div>
                    <p className="italic text-center text-gray-500 text-sm">
                        {appreciation.avis}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Recompense;
