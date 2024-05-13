import React, { useState } from "react";

const Personnalisation = () => {
    const faqs = [
        {
            tag: "Comment enregistrer mon CV au format PDF sur Word ?",
            answer: (
                <div className="flex flex-col gap-2">
                    <p>
                        1. Avec le document déjà ouvert, cliquez sur l'onglet
                         "Fichier" dans le coin supérieur gauche de l'écran.
                    </p>
                    <p>
                        2. Sélectionnez "Enregistrer sous" dans le menu à
                        gauche.
                    </p>
                    <p>
                        3. Dans la boîte de dialogue qui s'ouvre, choisissez
                        l'emplacement où vous souhaitez enregistrer le fichier.
                    </p>
                    <p>
                        4. Juste en dessous du champ du nom de fichier, vous
                        verrez une liste déroulante pour le "Type". Cliquez
                        dessus et sélectionnez "PDF".
                    </p>
                    <p>
                        5. Cliquez sur "Enregistrer". Votre CV est maintenant
                        enregistré au format PDF.
                    </p>
                </div>
            ),
        },
        {
            tag: "Comment enregistrer mon CV au format PDF sur PowerPoint ?",
            answer: (
                <div className="flex flex-col gap-2">
                    <p>
                    1. Avec votre présentation ouverte, allez à "Fichier" > "Enregistrer sous".
                    </p>
                    <p>
                    2. Choisissez votre dossier de destination.
                    </p>
                    <p>
                    3. Sous 'Type de fichier', sélectionnez "PDF (*.pdf)" dans le menu déroulant.
                    </p>
                    <p>
                    4.Nommez votre fichier si nécessaire, puis cliquez sur "Enregistrer". Votre CV sera sauvegardé en PDF.
                    </p>
                </div>
            ),
        },
        {
            tag: "Comment enregistrer mon CV au format PDF sur Google Docs ?",
            answer :  (
                <div className="flex flex-col gap-2">
                    <p>
                    1. Dans votre document ouvert, cliquez sur "Fichier" dans le menu en haut.".
                    </p>
                    <p>
                    2. Passez la souris sur "Télécharger", puis choisissez "Document PDF (.pdf)" dans le sous-menu.
                    </p>
                    <p>
                    3. Un fichier PDF de votre document sera automatiquement téléchargé dans le dossier de téléchargement par défaut de votre navigateur.
                    </p>
                </div>
            ),
        },
        {
            tag: "Comment enregistrer mon CV au format PDF sur Google Slides ?",
            answer :(
                <div className="flex flex-col gap-2">
                    <p>
                    1. Avec votre présentation ouverte, allez à "Fichier" > "Télécharger".
                    </p>
                    <p>
                    2. Sélectionnez "Document PDF (.pdf)" dans les options disponibles.
                    </p>
                    <p>
                    3. Un fichier PDF de votre présentation sera téléchargé dans votre dossier de téléchargements ou vous serez invité à choisir un emplacement de sauvegarde selon les paramètres de votre navigateur.
                    </p>
                </div>
            ),
        },
        {
            tag: "Guide Microsoft PowerPoint Tutoriel Vidéo",
            answer:(
                <div className="flex flex-col gap-2">
                    <p>Trouvez des vidéos tutorielles pour utiliser le modèle au format PPT dans <a className="hover:underline text-blue-600" href="https://www.youtube.com/playlist?list=PLQVckJCoKuQCM7aaJhh8PMrlyrKXeeNqf">PowerPoint</a>.
                    </p>
                </div>
            ),
        },
        {
            tag: "Guide Microsoft Word Tutoriel Vidéo",
            answer: (
                <div className="flex flex-col gap-2">
                    <p>Trouvez des vidéos tutorielles pour utiliser le modèle au format PPT dans <a className="hover:underline text-blue-600" href="https://www.youtube.com/playlist?list=PLQVckJCoKuQCcj7oEizF9EobPBAj_i8I8">Word</a>.
                    </p>
                </div>
            ),
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
                Personnalisation de Votre Modèle de CV
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
                        {visible[index] && (
                             <p className="italic text-sm md:text-lg">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Personnalisation;
