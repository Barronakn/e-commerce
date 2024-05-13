import React from "react";
import avis1 from "../../../public/assets/avis/avis1.jpg";
import avis2 from "../../../public/assets/avis/avis2.jpg";
import avis3 from "../../../public/assets/avis/avis3.jpg";
import Star from "./Star";

const Avis = () => {
    const testimonials = [
        {
            person: avis1,
            name: "Edwige Houessou",
            job: "Production Animale",
            pays: "Dakar, Sénégal",
            avis: "J'ai vraiment aimé la prestation. C'est d'ailleurs le plus pertinent et le plus beau CV de ma carrière. Merci beaucoup pour la lettre de motivation aussi. J'ai beaucoup aimé l'ensemble des documents qui m'ont été fait.",
        },
        {
            person: avis2,
            name: "Hermann Dovonou",
            job: "Environnementaliste",
            pays: "Cotonou, Bénin",
            avis: "Courtoisie, Professionnalisme, Respect des délais et Qualité du travail. Je résume Casineuve Actions en ces quelques mots pour les avoir essayé. Je suis très satisfait de la qualité du travail.Je vous le recommande !",
        },
        {
            person: avis3,
            name: "Nadia Dossa",
            job: "Urbaniste d’Espaces Verts",
            pays: "Abidjan, Côte d’Ivoire",
            avis: "J'ai eu recours aux services de Casineuve Actions pour mon CV en Anglais et j’ai été émerveillée. Le rendu était au dessus de ce que j'imaginais. C'était simplement wow ! Je recommande vivement ses services. Très professionnel ! J'ai adoré.",
        },
    ];
    return (
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-around my-14 container">
            {testimonials.map((testimonial, index) => (
                <div className="flex flex-col items-center gap-2 bg-white rounded-xl shadow-md shadow-gray-500 p-5 w-full h-full lg:w-80 lg:h-96">
                    <div className="rounded-full w-20 h-20">
                        <img loading="lazy" className="pointer-events-none" src={testimonial.person} alt="person-img" />
                    </div>

                    <Star />

                    <div className="avis-icon"></div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.job}</p>
                    <h2 className="font-bold">{testimonial.pays}</h2>
                    <p className="italic text-center text-gray-500 text-sm">{testimonial.avis}</p>
                </div>
            ))}
        </div>
    );
};

export default Avis;
