import React, { useState } from "react";

const FilterColor = ({ cvType, setFilteredProducts, modelArray, setFilteredModels, filteredColorPagination, filterColorPagination}) => {
    const [selectedColor, setSelectedColor] = useState("");

    const handleColorSelection = (color) => {
        setSelectedColor(color);
        filterProducts(color);

        setFilteredModels({});

        modelArray.forEach(element => {
            element.classList.add("hidden")
        });

        filteredColorPagination

        const checkboxes = document.querySelectorAll('input[type="radio"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

    };

    const filterProducts = (color) => {
        const filtered = cvType.filter(
            (product) => product.variants.couleurhexa === color
        );
        setFilteredProducts(filtered);
    };
    return (
        <div>
            <div>
                <h2 className="font-bold">Couleur</h2>
            </div>
            <div className="flex xl:flex-row flew-col gap-4 m-4">
                {
                    cvType
                    .reduce((uniqueColors, color) => {
                        const couleurhexa = color.variants.couleurhexa;

                        // Vérifier si on doit inclure cet élément dans les couleurs uniques
                        if (
                            couleurhexa &&
                            !uniqueColors.includes(couleurhexa)
                        ) {
                            uniqueColors.push(couleurhexa);
                        }

                        return uniqueColors;
                    }, [])
                    .map((couleurhexa, index) => (
                        <div
                            key={index}
                            className="filtrecolor border-red-500 w-8 h-8 cursor-pointer"
                            style={{ background: couleurhexa }}
                            onClick={() => handleColorSelection(couleurhexa)}
                        ></div>
                    ))}
            </div>
        </div>
    );
};

export default FilterColor;


