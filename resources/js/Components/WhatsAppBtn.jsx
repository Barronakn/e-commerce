import React from "react";
import whatsApp from "../../../public/assets/sociaux/whatsapp_icon.png";

const WhatsAppBtn = () => {
    return (
        <div className="fixed right-5 sm:right-10 bottom-5 sm:bottom-10 rounded-full bg-white shadow-md shadow-black p-2 cursor-pointer">
            <a href="https://wa.me/message/IBE7CZ6ZMHQIB1">
                <img
                    loading="lazy"
                    className="pointer-events-none w-5 h-5 sm:w-10 sm:h-10"
                    src={whatsApp}
                    alt="WhatsApp-icon"
                />
            </a>
        </div>
    );
};

export default WhatsAppBtn;
