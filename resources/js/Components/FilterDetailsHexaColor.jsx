import React from 'react';

const FilterDetailsHexaColor = ({
    products,
    filterName,
    selectedColorProduct,
    selectedColorVariant,
    filterHexa,
}) => {
    const handleColorClick = (cvColor) => {
        selectedColorProduct(cvColor);
        selectedColorVariant(cvColor.variants);
    };

    return (
        <div className="flex flex-row my-4 gap-2 items-center justify-center md:justify-start">
            {products
                .filter((model) => model.modeles === filterName)
                .map((color, index) => (
                    <div
                        key={index}
                        onClick={() => handleColorClick(color)}
                        style={{ background: color.variants.couleurhexa }}
                        className={
                            filterHexa === color.variants.couleurhexa
                                ? "border-red-500 border-2 sm:w-8 sm:h-8 w-5 h-5 cursor-pointer color"
                                : "sm:w-8 sm:h-8 w-5 h-5 cursor-pointer color"
                        }
                    ></div>
                ))}
        </div>
    );
};

export default FilterDetailsHexaColor;
