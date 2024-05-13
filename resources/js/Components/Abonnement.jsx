import { Link } from "@inertiajs/react";
import React from "react";
import CheckIcon from "./CheckIcon";
import DeleteIcon from "./DeleteIcon";

const Abonnement = ({ price1, price2, price3 }) => {
    return (
        <section
            id="abonnement"
            className="md:px-32 px-6 gap-12 my-14 flex max-[1100px]:flex-col bg-price justify-center items-center"
        >
            <div className="bg-white rounded-tl-xl lg:w-96 w-full rounded-tr-xl">
                <div className="bg-black p-5 text-white text-center rounded-tl-xl rounded-tr-xl">
                    <h2 className="text-2xl font-bold">Basique</h2>
                    <p className="py-2">
                        Rédaction de CV Professionnel à base d’un de nos modèles
                    </p>
                    <p className="text-lg font-bold">{price1}</p>
                </div>
                <div className="text-justify sm:text-base text-sm p-10 flex flex-col gap-6">
                    <ul className="flex flex-col gap-3">
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            CV Sur Mesure, Optimisé ATS et adapté à votre
                            domaine
                        </li>

                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Révision illimitée jusqu'à votre satisfaction
                        </li>

                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Fichiers aux formats : PDF, Word et PowerPoint
                        </li>

                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            03 Mises à jours dans les 15 prochains jours
                        </li>

                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Assistance 24/7 par e-mail ou WhatsApp
                        </li>
                        <li className="flex flex-row gap-2 text-gray-500">
                            <DeleteIcon />
                            Lettre de motivation adaptée pour une offre
                            spécifique
                        </li>
                        <li className="flex flex-row gap-2 text-gray-500">
                            <DeleteIcon />
                            Conseils personnalisés selon vos objectifs de
                            carrière
                        </li>
                        <li className="flex flex-row gap-2 text-gray-500">
                            <DeleteIcon />
                            Analyse de votre profil LinkedIn et optimisation
                        </li>
                        <li className="flex flex-row gap-2 text-gray-500">
                            <DeleteIcon />
                            Référencement de votre profil LinkedIn
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="p-5 text-center">
                    <Link
                        className="border-2 border-black rounded-3xl px-4 py-2 hover:bg-black hover:text-white"
                        href="https://wa.me/message/IBE7CZ6ZMHQIB1"
                    >
                        Parlons-en
                    </Link>
                </div>
            </div>
            <div className="bg-white rounded-tl-xl lg:w-96 w-full height-[500px] rounded-tr-xl">
                <div className="relative bg-blue-500 hover:bg-blue-600 p-5 text-white text-center rounded-tl-xl rounded-tr-xl">
                    <legend className="absolute left-[42%] -top-3 bg-white text-black font-bold w-20">
                        Populaire
                    </legend>

                    <h2 className="text-2xl font-bold">Premium</h2>
                    <p className="py-2">
                        Dossier de candidature (CV Pro + Lettre de Motivation…)
                    </p>
                    <p className="text-lg font-bold">{price2}</p>
                </div>
                <div className="text-justify sm:text-base text-sm p-10 flex flex-col gap-6">
                    <ul className="flex flex-col gap-3">
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            CV Sur Mesure, Optimisé ATS et adapté à votre
                            domaine
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Révision illimitée jusqu'à votre satisfaction
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Fichiers aux formats : PDF, Word et PowerPoint
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            03 Mises à jours dans les 15 prochains jours
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Assistance 24/7 par e-mail ou WhatsApp
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Lettre de motivation adaptée pour une offre
                            spécifique
                        </li>
                        <li className="flex flex-row gap-2 text-gray-500">
                            <DeleteIcon />
                            Conseils personnalisés selon vos objectifs de
                            carrière
                        </li>
                        <li className="flex flex-row gap-2 text-gray-500">
                            <DeleteIcon />
                            Analyse de votre profil LinkedIn et optimisation
                        </li>
                        <li className="flex flex-row gap-2 text-gray-500">
                            <DeleteIcon />
                            Référencement de votre profil LinkedIn
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="p-5 text-center mt-6">
                    <Link
                        className=" bg-blue-500 hover:bg-blue-600 rounded-3xl py-4 px-14"
                        href="https://wa.me/message/IBE7CZ6ZMHQIB1"
                    >
                        Parlons-en
                    </Link>
                </div>
            </div>
            <div className="bg-white rounded-tl-xl lg:w-96 w-full rounded-tr-xl">
                <div className="bg-black p-5 text-white text-center rounded-tl-xl rounded-tr-xl">
                    <h2 className="text-2xl font-bold">Platinium</h2>
                    <p className="py-2">
                        Votre dossier de candidature et votre profil LinkedIn
                        optimisé
                    </p>
                    <p className="text-lg font-bold">{price3}</p>
                </div>
                <div className="text-justify sm:text-base text-sm p-10 flex flex-col gap-6">
                    <ul className="flex flex-col gap-3">
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            CV Sur Mesure, Optimisé ATS et adapté à votre
                            domaine
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Révision illimitée jusqu'à votre satisfaction
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Fichiers aux formats : PDF, Word et PowerPoint
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            03 Mises à jours dans les 15 prochains jours
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Assistance 24/7 par e-mail ou WhatsApp
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Lettre de motivation adaptée pour une offre
                            spécifique
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Conseils personnalisés selon vos objectifs de
                            carrière
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Analyse de votre profil LinkedIn et optimisation
                        </li>
                        <li className="flex flex-row gap-2">
                            <CheckIcon />
                            Référencement de votre profil LinkedIn
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="p-5 text-center">
                    <Link
                        className="border-2 border-black rounded-3xl px-4 py-2 hover:bg-black hover:text-white"
                        href="https://wa.me/message/IBE7CZ6ZMHQIB1"
                    >
                        Parlons-en
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Abonnement;
