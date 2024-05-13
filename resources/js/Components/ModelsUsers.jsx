import React, { useState } from 'react';

const ModelsUsers = () => {
    const faqs = [
        {
            tag: "Comment ouvrir le modèle de CV sur mon ordinateur ?",
            answer: "Le modèle téléchargé est compressé, contenant le modèle au format Word et PowerPoint, un guide d'utilisation, et des icônes. Sur Mac, double-cliquez simplement pour ouvrir. Sur Windows, faites un clic droit et sélectionnez 'Extrait' en utilisant un logiciel comme WinRAR.",
        },
        {
            tag: "Comment l'utiliser avec mon téléphone ?",
            answer: "Utilisez un ordinateur de bureau pour la personnalisation. Les téléphones n'ont pas de logiciel d'édition intégré.",
        },
    ];

    const [visible, setVisible] = useState(Array(faqs.length).fill(false));
    const [visibleIcons, setVisibleIcons] = useState(Array(faqs.length).fill(true));

    const handleToggle = (index) => {
        const newVisible = [...visible];
        newVisible[index] = !newVisible[index];
        setVisible(newVisible);

        // Mettre à jour l'état de l'icône de la FAQ cliquée seulement
        const newVisibleIcons = [...visibleIcons];
        newVisibleIcons[index] = !newVisibleIcons[index];
        setVisibleIcons(newVisibleIcons);
    };

    return (
        <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold my-16 text-center">
            Utilisation de Votre Modèle de CV
            </h1>
            <div>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        onClick={() => handleToggle(index)}
                        className="flex text-sm sm:text-lg md:text-xl cursor-pointer flex-col gap-3 p-5 rounded-lg shadow-md bg-white my-5"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold">{faq.tag}</h2>
                            {visibleIcons[index] ? <div>+</div> : <div>-</div>}
                        </div>
                        {visible[index] &&  <p className="italic text-sm md:text-lg">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModelsUsers;
