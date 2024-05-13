import React from "react";

const Bannerier = () => {
    return (
        <div className="bannerier">
            <div className="xl:pt-32 pt-28 xl:pb-16 pb-14 pl-10 xl:pl-14 bg-black bg-opacity-50">
                <div className="flex flex-col gap-4 mb-10">
                    <h3 className="text-blue-500 text-base md:text-lg xl:text-xl font-blod">Sans abonnement,</h3>
                    <h2 className="text-white text-base md:text-lg xl:text-xl font-bold">
                        Notre job, vous obtenir le vôtre
                    </h2>
                    <h1 className="text-white text-base md:text-lg xl:text-xl font-bold">
                        Avec plus de 200 modèles CV &
                    </h1>
                    <h2 className="text-white text-base md:text-lg xl:text-xl font-bold">
                        Notre Accompagnement Personnalisé
                    </h2>
                </div>
                <div className="float-right xl:float-none mr-10">
                    <a
                        className="text-white shadow-lg bg-gray-600 px-2 sm:px-8 py-2 rounded-md cursor-pointer hover:bg-gray-500 hover:shadow-sm"
                        href="/cv_professionnel-cv_word-cv_powerPoint-cv_junior-cv_simples-cv_senior-cv_ modernes-cv-sur_deux_pages"
                    >
                        Choisir un modèles de CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Bannerier;
