import React, { useState } from "react";

const AboutModeles = () => {
    const faqs = [
        {
            tag: "Qu'est-ce qui distingue nos modèles des autres disponibles en ligne ?",
            answer: (
                <div>
                    <p>
                        Nos modèles de CV sortent du lot grâce à leur <strong>design
                        professionnel, des palettes de couleurs équilibrées et
                        une facilité de personnalisation inégalée.</strong> Nous concevons
                        chaque modèle avec une structure pensée pour captiver
                        l'attention du recruteur du début à la fin. <strong>L'agencement
                        des rubriques est méticuleusement organisé pour garantir
                        une lecture fluide et sans effort,</strong> mettant en avant vos
                        compétences et expériences de manière optimale. Notre
                        objectif est de faire de votre CV un support qui se
                        distingue dans la montagne de candidatures, grâce à un
                        design qui allie esthétique et fonctionnalité.
                    </p>
                </div>
            ),
        },
        {
            tag: "Qui sont les créateurs de ces modèles de CV ?",
            answer: (
                <div>
                    <p>
                    Nos modèles sont l'œuvre de la <strong>collaboration entre recruteurs chevronnés et designers professionnels</strong> qui font partie de notre studio interne. Ces experts en allient <strong>créativité, expertise en communication visuelle et connaissance approfondie des tendances actuelles du marché</strong> du travail pour créer des modèles de CV qui répondent non seulement aux attentes des recruteurs mais qui vous permettent aussi de vous démarquer. Chaque modèle est conçu avec le souci du détail, assurant que votre candidature sera aussi unique et professionnelle que votre parcours.
                    </p>
                </div>
            ),
        },
        {
            tag: "Pourquoi opter pour nos modèles de CV ?",
            answer: (
                <div>
                    <p>
                    Choisir nos modèles de CV, c'est <strong>investir dans un outil conçu pour maximiser vos chances de succès dans votre recherche d'emploi.</strong> La facilité de personnalisation, associée à un design professionnel, permet à chaque candidat de créer un CV qui reflète au mieux sa personnalité et ses compétences. Nos <strong>modèles sont pensés pour s'adapter à divers secteurs d'activité, garantissant que vous trouverez celui qui correspond parfaitement à votre profil et à l'industrie que vous visez.</strong>
                    </p>
                </div>
            ),
        },
        {
            tag: "Comment nos modèles peuvent-ils booster votre candidature ?",
            answer: "Nos modèles sont le fruit d'une collaboration étroite entre nos designers et des spécialistes du recrutement, assurant que chaque CV que nous proposons est non seulement esthétiquement plaisant mais aussi optimisé pour passer les systèmes de suivi des candidatures (ATS) et capter l'attention des recruteurs.",
        },
        {
            tag: "Avec quel logiciel puis-je modifier le CV ?",
            answer: "Vous pouvez personnaliser nos modèles avec Microsoft Word, Microsoft PowerPoint, Google Slides ou Google Docs.",
        },
        {
            tag: "Concernant les polices, puis-je utiliser celles par défaut ?",
            answer: "Absolument. Toutes les polices utilisées sont disponibles par défaut sur Word et PowerPoint, éliminant ainsi tout besoin de téléchargement ou d'achat de polices spécifiques.",
        },
        {
            tag: "Où trouver des icônes supplémentaires ?",
            answer: "Nos modèles intègrent plus de 100 icônes pour les zones d'intérêt, les réseaux sociaux, etc. Pour des demandes spécifiques, n'hésitez pas à nous contacter.",
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
                À Propos de Nos Modèles de CV
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

export default AboutModeles;
