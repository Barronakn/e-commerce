import React, { useState, useEffect } from "react";

const FilterModeleHexaColor = ({
    products,
    filterName,
    handleFilter,
    setIndexModel,
}) => {
    const indexState = 0;
    const [selectedColor, setSelectedColor] = useState(null);
    const [defaultColor, setDefaultColor] = useState(null);

    // Effet pour définir la couleur par défaut lorsque le filtre par modèle change
    useEffect(() => {
        if (products.length > 0) {
            // Utiliser la première couleur hexadécimale comme couleur par défaut
            const initialDefaultColor = products[0].variants.couleurhexa;
            setDefaultColor(initialDefaultColor);
            setSelectedColor(initialDefaultColor); // Sélectionner la couleur par défaut par défaut
            // Mettre à jour l'index du modèle sélectionné par défaut
        }
    }, [products, setIndexModel]);

    const handleColorClick = (colorHexa) => {
        handleFilter(filterName, colorHexa);
        setSelectedColor(colorHexa);
        setIndexModel(colorHexa.id);
        indexState = 1
    };

    return (
        <div className="flex flex-row my-4 gap-2 items-center justify-center md:justify-start">
            {products.map((product, index) => (
                <div key={index}>
                    <div
                        onClick={() =>
                            handleColorClick(product.variants.couleurhexa)
                        }
                        style={{
                            background: product.variants.couleurhexa,
                        }}
                        className={`w-5 h-5 cursor-pointer ${
                            index === indexState && selectedColor === product.variants.couleurhexa || selectedColor === product.variants.couleurhexa ?  "border-red-500 border-2" : "" // Appliquer une bordure rouge à la première couleur par défaut
                        }`}
                    ></div>
                </div>
            ))}
        </div>
    );
};

export default FilterModeleHexaColor;

