import React from "react";

const FilterModeleImg = ({ products, filterName, filterImgPath, selectedImgProduct, selectedImgVariant, }) => {

    const sameModeles = products.filter(cv => cv.modeles === filterName);

    const handleImgClick = (cvImg) => {
        selectedImgProduct(cvImg);
        selectedImgVariant(cvImg.variants);
    };

    return (
        <div>
            {sameModeles.map((image, index) => (
                <div key={index} onClick={() => handleImgClick(image)}>
                <img
                    className={filterImgPath == image.variants.image_path ? "pointer-events-none cursor-pointer mb-5 border-red-600 border-2" : "pointer-events-none cursor-pointer mb-5"}
                    loading="lazy"
                    src={`../../../${image.variants.image_path}`}
                    alt={image.typedecv}
                />
                </div>
            ))}
        </div>
    );
};

export default FilterModeleImg;
