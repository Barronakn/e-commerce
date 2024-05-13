import React from "react";

const ModeleOneList = ({ id, image_path, name, couleur }) => {
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:items-center">
                <div>
                    <a href={"/detailscv/" + id}>
                        <img
                            loading="lazy"
                            className="pointer-events-none max-h-full w-full max-w-full"
                            src={image_path}
                            alt={name}
                        />
                    </a>
                    <a
                        className="hover:underline"
                        href={"/detailscv/" + id}
                    >
                        Modèle de CV <span>{name}</span>
                    </a>
                    <h3>
                        <strong>Couleur : </strong>
                        <span className="uppercase text-sm">{couleur}</span>
                    </h3>
                </div>
        </div>
    );
};

export default ModeleOneList;
