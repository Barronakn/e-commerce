import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Bannerier from "../Bannerier";

const Header = () => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div>
            {visible && (
                <div onClick={() => handleClick()}>
                    <Backdrop />
                </div>
            )}
            <header>
                <Bannerier />
                <div className="flex flex-col flex-justify-center text-center items-center gap-5 bg-black text-white py-8">
                    <div className="px-10">
                    <h3 className="font-bold text-xl sm:text-2xl md:text-4xl text-center my-4">
                        Le recrutement est avant tout visuel
                    </h3>
                    <p className="text-base md:text-xl">
                        Faute de pouvoir tester tous les candidats un par un au
                        travail, le recruteur va se fier à ses impressions.
                        Inutile donc de préciser à quel point il est primordial
                        de faire bonne impression avec votre dossier.
                    </p>
                    </div>
                    <div
                        onClick={() => handleClick()}
                        className="border-2 text-sm sm:text-base border-white font-bold border-solid rounded-lg px-4 py-2 hover:bg-white text-white hover:text-black cursor-pointer mx-10 md:mx-40"
                    >
                        Nous confier votre dossier
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
