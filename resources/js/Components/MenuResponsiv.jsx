import React, { useState } from "react";
import menu from "../../../public/assets/menu_icon.png";
import reset from "../../../public/assets/menu-reset.svg";
import { Link } from "@inertiajs/react";
const MenuResponsiv = () => {
    const [visible, setVisible] = useState(false);

    const handleToogle = () => {
        setVisible(true);
    };

    const handleReset = () => {
        setVisible(false);
    };

    return (
        <div className="block md:hidden">
            <div onClick={() => handleToogle()}>
                <img
                    loading="lazy"
                    className="pointer-events-none w-6 h-5 md:w-9 md:h-8 xl:w-10 xl:h-10"
                    src={menu}
                    alt="meun-icon"
                />
            </div>
            <nav>
                {visible && (
                    <div className="flex flex-col  bg-black gap-6 p-3 h-[100vh] fixed z-0 top-0 right-0">
                        <div onClick={() => handleReset()}>
                            <img
                                loading="lazy"
                                className="pointer-events-none float-right w-6 h-5 md:w-9 md:h-8 xl:w-10 xl:h-10"
                                src={reset}
                                alt="meun-icon"
                            />
                        </div>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link
                                    className="hover:border-b-2 pb-2 text-white hover:text-blue-300 hover:border-blue-300"
                                    href="/"
                                >
                                    Modèles de CV
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:border-b-2 pb-2 text-white hover:text-blue-300 hover:border-blue-300"
                                    href="/cvsurmesure"
                                >
                                    CV Sur-Mesure
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:border-b-2 pb-2 text-white hover:text-blue-300 hover:border-blue-300"
                                    href="/avisettemoignages"
                                >
                                    Avis & Témoignages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:border-b-2 pb-2 text-white hover:text-blue-300 hover:border-blue-300"
                                    href="/aide"
                                >
                                    Aide
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default MenuResponsiv;
