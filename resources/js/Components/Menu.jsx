import { Link, usePage } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import panier from "../../../public/assets/cart.svg";
import MenuResponsiv from "./MenuResponsiv";

const Menu = ({items}) => {


    const compteur = items.length > 0 ? items.length : 0;

    const { url } = usePage();

    const nav = [
        {
            linkName: "Modèles de CV",
            link: "/",
        },
        {
            linkName: "CV Sur-Mesure",
            link: "/cvsurmesure",
        },
        {
            linkName: "Avis et Témoignages",
            link: "/avisettemoignages",
        },
        {
            linkName: "Aide",
            link: "/aide",
        },
    ];

    //Fixer le menu au défilement
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const navbarStyle = {
        background: scrollPosition > 75 ? "rgba(0, 0, 0, 0.5)" : "black",
    };

    return (
        <div
            style={navbarStyle}
            className="flex flex-row justify-between px-10 py-2 sm:px-20 md:px-0 md:justify-around items-center fixed top-0 z-50 w-full shadow-xl"
        >
            <div className="logo">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <nav className="hidden md:block">
                <ul className="flex flex-row md:gap-8 lg:gap-14">
                    {nav.map((navlink, index) => (
                        <li key={index}>
                            <Link
                                className={
                                    url == navlink.link
                                        ? "pb-2 text-white hover:text-blue-300 border-blue-300 border-b-2"
                                        : "pb-2 text-white hover:text-blue-300 hover:border-blue-300 hover:border-b-2"
                                }
                                href={navlink.link}
                            >
                                {navlink.linkName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <div className="flex flex-row gap-5 items-center">
                    <div>
                        <Link className="flex flex-row items-center text-white" href="/cart">
                            <img
                                className="cursor-pointer w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7"
                                src={panier}
                                alt="panier_icon"
                            />
                            <span className="rounded-full bg-blue-600 w-7 h-7 pt-1 text-center font-bold">{compteur}</span>
                        </Link>
                    </div>
                    <MenuResponsiv />
                </div>
            </div>
        </div>
    );
};

export default Menu;
