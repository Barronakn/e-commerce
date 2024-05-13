import React from "react";
import others1 from "../../../../public/assets/Others/others1.png";
import others2 from "../../../../public/assets/Others/others2.png";
import others3 from "../../../../public/assets/Others/others3.png";
import others4 from "../../../../public/assets/Others/others4.png";

const Others = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-10 md:mx-20 leading-8">
            <div className="bg-white p-4">
                <h3 className="mb-4 text-lg font-bold">
                    Payez une Seule Fois, pour Vos Objectifs.
                </h3>
                <div className="others1 flex flex-col md:flex-row gap-5 items-center">
                    <div>
                        <img className="w-32 md:w-full pointer-events-none" src={others1} alt="assistance1-img" />
                    </div>
                    <div>
                        <p className="text-justify">
                            Atteignez vos objectifs professionnels en un gain de
                            temps et d’argent avec nos solutions. Optez pour des
                            paiements uniques et ponctuels. Pas d'abonnement,
                            pas de frais cachés. Vous payez une fois,
                            téléchargez votre modèle / vos modèles, et c'est à
                            vous pour toujours. Nous comprenons le besoin de
                            flexibilité et de liberté pour personnaliser votre
                            CV selon vos besoins, sans vous soucier de coûts
                            récurrents.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4">
                <h3 className="mb-4 text-lg font-bold">
                    Assistance Proactive à Chaque Étape.
                </h3>
                <div className="flex flex-col md:flex-row gap-5 items-center">
                    <div>
                        <img className="w-32 md:w-full pointer-events-none" src={others2} alt="assistance2-img" />
                    </div>
                    <div>
                        <p className="text-justify">
                            Nous ne vous laissons jamais seul. L'assistance est
                            notre engagement. Que ce soit pour personnaliser
                            votre CV ou obtenir des réponses, nous sommes
                            joignables par e-mail et sur WhatsApp. Votre
                            réussite professionnelle est notre priorité, et nous
                            sommes là pour vous accompagner à chaque étape de
                            votre carrière.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4">
                <h3 className="mb-4 text-lg font-bold">
                    L’Informatique, ce n’est pas trop votre truc ?
                </h3>
                <div className="flex flex-col md:flex-row gap-5 items-center">
                    <div>
                        <img className="w-32 md:w-full pointer-events-none" src={others3} alt="assistance3-img" />
                    </div>
                    <div>
                        <p className="text-justify">
                            Avec nos modèles de CV au format Word et PowerPoint,
                            la personnalisation devient un jeu d'enfant.
                            Remplacez les informations génériques par les
                            vôtres, déplacer les rubriques, changer les icônes,
                            ajuster les couleurs et la police sans tracas. Dites
                            adieu aux recherches fastidieuses d'icônes ou de
                            polices, car tout ce dont vous avez besoin est déjà
                            inclus dans le fichier que vous téléchargez.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4">
                <h3 className="mb-4 text-lg font-bold">
                    Conseils pour Réussir vos Candidatures.
                </h3>
                <div className="flex flex-col md:flex-row gap-5 items-center">
                    <div>
                        <img className="w-32 md:w-full pointer-events-none" src={others4} alt="assistance4-img" />
                    </div>
                    <div>
                        <p className="text-justify">
                            Découvrez des conseils professionnels sur nos
                            réseaux sociaux pour booster votre carrière.
                            Suivez-nous pour des astuces exclusives sur la
                            rédaction de CV, la gestion de profil et bien plus.
                            Casineuve Actions est plus qu'un service, c'est une
                            communauté dynamique pour le développement de votre
                            carrière. Notre Job, vous Obtenir le Vôtre !
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Others;
