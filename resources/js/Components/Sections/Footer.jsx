import React from "react";
import { Link } from "@inertiajs/react";
import facebook from "../../../../public/assets/sociaux/facebook_icon.png";
import linkedin from "../../../../public/assets/sociaux/linkedin_icon.png";
import tiktok from "../../../../public/assets/sociaux/tiktok_icon.png";
import téléchargementDirect from "../../../../public/assets/telecharger-sur-le-lecteur-de-stockage.png";
import heart from "../../../../public/assets/contour-en-forme-de-coeur.png";
import moyenP from "../../../../public/assets/moyens-de-paiement.png";
import assistance from "../../../../public/assets/un-service-en-ligne.png";

const Footer = () => {
    return (
        <footer className="mt-20 bg-white">
            <div className="top flex flex-col xl:flex-row gap-10 mt-20 px-10 sm:px-20 lg:px-32 py-10">
                <div className="flex flex-row xl:justify-center items-center justify-normal gap-5">
                    <div>
                        <img className="pointer-events-none w-24" src={téléchargementDirect} alt="téléchargementDirect_icon" />
                    </div>
                    <div>
                        <h2 className="font-bold text-base sm:text-sm">Téléchargement direct</h2>
                        <p className="text-base sm:text-sm">
                            Finis les prises de tête. Téléchargez votre CV sans
                            créer un compte.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row xl:justify-center items-center justify-normal gap-5 ">
                    <div>
                        <img className="pointer-events-none w-24" src={heart} alt="heart_icon" />
                    </div>
                    <div>
                        <h2 className="font-bold text-base sm:text-sm">
                            Satisfaction garantie 100%
                        </h2>
                        <p className="text-base sm:text-sm">
                            Plus de 2000 Professionnels à travers le monde nous
                            recommandent.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row xl:justify-center items-center justify-normal gap-5 ">
                    <div>
                        <img className="pointer-events-none w-24" src={assistance} alt="assistance_icon" />
                    </div>
                    <div>
                        <h2 className="font-bold text-base sm:text-sm">
                            Assistance & Tutoriels vidéos
                        </h2>
                        <p className="text-base sm:text-sm">
                            Notre équipe est à votre disposition pour toutes vos
                            préoccupations.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row xl:justify-center items-center justify-normal gap-5">
                    <div>
                        <img className="pointer-events-none w-24" src={moyenP} alt="moyenPaiment_icon" />
                    </div>
                    <div>
                        <h2 className="font-bold text-base sm:text-sm">Moyens de Paiement</h2>
                        <p className="text-base sm:text-sm">
                            Plusieurs options sécurisées s’offrent (Mobile,
                            Visa…) à vous pour le paiement.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="flex flex-col md:flex-row gap-10 px-10 sm:px-20 lg:px-32 py-5 bg-black text-white">
                    <div className="w-full text-justify md:w-3/5">
                        <h2 className="font-bold pb-3">
                            À propos de Casineuve Actions
                        </h2>
                        <p className="text-sm leading-6 sm:text-base">
                            Casineuve Actions se distingue par son engagement à
                            fournir des outils de candidature de haute qualité
                            qui allient professionnalisme et personnalisation
                            aisée. Depuis notre création, nous avons pour
                            mission d'accompagner chaque candidat dans sa quête
                            d'opportunités professionnelles, en offrant des
                            produits adaptés à une grande variété de profils et
                            de secteurs
                        </p>
                    </div>
                    <div className="w-full md:w-1/5">
                        <h2 className="font-bold pb-3">Ressources</h2>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link className="hover:underline" href="/">
                                    Modèles de CV
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:underline"
                                    href="/cvsurmesure"
                                >
                                    CV Sur-Mesure
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:underline"
                                    href="/avisettemoignages"
                                >
                                    Avis Clients
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="/aide">
                                    Aide
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/5">
                        <h2 className="font-bold pb-3">Exemple de cv</h2>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link className="hover:underline" href="/">
                                    Cv Simples
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="/">
                                    Cv Junior
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="/">
                                    Cv Professionnel
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="/">
                                    Cv Word
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="/">
                                    Cv 2024
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="/">
                                    Cv PowerPoint
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row px-5 sm:px-20 mt-3 bg-black text-white">
                    <div className="flex flex-col justify-center items-center text-base sm:text-md py-2 sm:py-5 px-4 xl:border-r-2 rounded-xl border-white">
                        <p className="mb-2">
                            ©{" "}
                            <Link
                                className="font-bold hover:underline"
                                href="/"
                            >
                                Casineuve Actions
                            </Link>{" "}
                            <span>
                                | Vous méritez de vivre votre rêve
                                professionnel.
                            </span>
                        </p>
                        <p className="font-bold">
                            Notre Job, vous Obtenir le Vôtre !{" "}
                            <span className="font-normal">
                                | Parce que vous méritez de vivre de votre rêve professionnel
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center xl:border-l-2 rounded-xl border-white xl:pl-64 xl:pb-0 pb-5">
                        <div className="text-white font-bold">
                            <h4>Suivez-nous sur</h4>
                        </div>
                        <div className="flex flex-row gap-4 justify-center items-center">
                            <a href="https://www.facebook.com/actionscasineuve">
                                <img
                                    loading="lazy"
                                    className="pointer-events-none w-5 h-5"
                                    src={facebook}
                                    alt="facebook-icon"
                                />
                            </a>
                            <a href="https://www.facebook.com/actionscasineuve">
                                <img
                                    loading="lazy"
                                    className="pointer-events-none w-5 h-5"
                                    src={linkedin}
                                    alt="linkedin-icon"
                                />
                            </a>
                            <a href="https://www.facebook.com/actionscasineuve">
                                <img
                                    loading="lazy"
                                    className="pointer-events-none w-5 h-5"
                                    src={tiktok}
                                    alt="tiktok-icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
