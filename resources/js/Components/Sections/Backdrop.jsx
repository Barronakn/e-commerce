import React from "react";
import mesure from "../../../../public/assets/surmesure.jpg";

const Backdrop = () => {
    return (
        <div className="fixed top-0 left-0 bg-[#000000bb] z-50 w-full h-[100vh] ">
            <div className="container w-72 sm:w-[600px] h-full flex flex-col gap-5 justify-center items-center mx-auto my-0">
                <div className="bg-white p-4">
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl text-center">
                            Obtenez un Modèle à Votre Image | On vous guide !
                        </h1>
                    </div>

                    <div className="flex justify-center items-center my-5">
                        <div className="flex flex-col sm:flex-row gap-5">
                            <div className="flex flex-col gap-4">
                                <a
                                    href="https://wa.me/message/IBE7CZ6ZMHQIB1"
                                    className="bg-black text-white hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black rounded-xl px-20 py-4"
                                >
                                    WhatsApp
                                </a>
                                <a
                                    href="mailto:ycasineuve@gmail.com"
                                    className="bg-black text-white hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black rounded-xl px-24 py-4"
                                >
                                    Email
                                </a>
                            </div>
                            <div>
                                <img
                                    loading="lazy"
                                    className="pointer-events-none max-w-full sm:w-64 w-32 sm:h-64 h-32 container"
                                    src={mesure}
                                    alt="bannier-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backdrop;
