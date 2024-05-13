import React, { useState } from "react";

const FileDownload = () => {
    const faqs = [
        {
            tag: "Comment Télécharger Mon Modèle ?",
            answer: "Pour télécharger votre modèle, cliquez sur le bouton 'Télécharger' puis assurez-vous d'avoir complété votre achat. Vos fichiers seront alors automatiquement téléchargés aux formats Word et PowerPoint.",
        },
        {
            tag: "Où Trouver Mes Fichiers Après le Téléchargement ?",
            answer: "Vos fichiers seront dans le dossier de téléchargement. Après téléchargement, décompressez le fichier zip pour accéder à la version Word,PowerPoint et à notre guide de personnalisation détaillé.",
        },
        {
            tag: "Dans combien de temps vais-je recevoir le CV après paiement ?",
            answer: "Immédiatement après votre paiement, vous recevrez un lien de téléchargement sur la page de confirmation et par e-mail.",
        },
        {
            tag: "Dois-je créer un compte pour télécharger les modèles de CV ?",
            answer: "Non, aucune création de compte n'est nécessaire.",
        },
        {
            tag: "Le lien de téléchargement ne fonctionne pas. Que faire ?",
            answer: "Assurez-vous de désactiver tout bloqueur de sites ou protection qui pourrait entraver le fonctionnement du lien. Si des problèmes persistent, contactez-nous pour une assistance personnalisée.",
        },
    ];

    const [visible, setVisible] = useState(Array(faqs.length).fill(false));
    const [visibleIcons, setVisibleIcons] = useState(Array(faqs.length).fill(true));

    const handleToggle = (index) => {
        const newVisible = [...visible];
        newVisible[index] = !newVisible[index];
        setVisible(newVisible);

        const newVisibleIcons = [...visibleIcons];
        newVisibleIcons[index] = !newVisibleIcons[index];
        setVisibleIcons(newVisibleIcons);
    };

    return (
        <div>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold my-16 text-center">
                Téléchargement de Vos Fichiers
            </h3>
            <div>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        onClick={() => handleToggle(index)}
                        className="flex text-sm sm:text-lg md:text-xl cursor-pointer flex-col gap-6 sm:gap-3 p-5 rounded-lg shadow-md bg-white my-5"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold">{faq.tag}</h2>
                            {visibleIcons[index] ? <div>+</div> : <div>-</div>}
                        </div>
                        {visible[index] && (
                            <p className="italic text-sm md:text-lg">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileDownload;
