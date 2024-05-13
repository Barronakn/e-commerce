import React, { useState, useEffect } from "react";
import More from "./More";
import FilterModeleHexaColor from "./FilterModeleHexaColor";
import ModeleOneList from "./ModeleOneList";

const Modeles = ({ products }) => {
  const [groupedModels, setGroupedModels] = useState({});
  const [filteredModels, setFilteredModels] = useState({});
  const [selectedModel, setSelectedModel] = useState(null); // Modèle sélectionné par l'utilisateur

  // Regrouper les produits par modèle au chargement initial
  useEffect(() => {
    const grouped = {};
    products.forEach((product) => {
      const modelName = product.modeles;
      if (!grouped[modelName]) {
        grouped[modelName] = [];
      }
      grouped[modelName].push(product);
    });
    setGroupedModels(grouped);
    setFilteredModels(grouped); // Initialise les modèles filtrés avec tous les modèles au chargement initial
  }, [products]);

  // Fonction pour filtrer les modèles par couleur
  const handleFilterByColor = (modelName, colorHexa) => {
    const filtered = { ...groupedModels };
    filtered[modelName] = groupedModels[modelName].filter(
      (product) => product.variants.couleurhexa === colorHexa
    );
    setFilteredModels(filtered);
    setSelectedModel(modelName); // Définir le modèle sélectionné après le filtrage
  };

  return (
    <div>
      <h4 className="text-xl sm:text-xl md:text-3xl font-bold my-10 text-center">
      Exemples de CV
      </h4>
      <p className="text-center text-lg leading-8">Remplacez simplement les informations génériques par celles qui reflètent votre parcours et vos aspirations. </p>
      <section className="all grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-white xl:ml-14">
        {Object.keys(filteredModels).slice(0,10).map((modelName) => (
          <div key={modelName} className="model-container border-r-4 border-b-4 border-l-0 border-t-0 border-gray-200 w-full p-4">
            {/* Afficher le CV par défaut pour chaque modèle */}
            {selectedModel !== modelName && (
              <div className="block">
                <ModeleOneList
                  id={filteredModels[modelName][0].id} // ID du premier CV du modèle
                  name={modelName}
                  image_path={filteredModels[modelName][0].variants.image_path}
                  couleur={filteredModels[modelName][0].variants.couleur}
                />
              </div>
            )}

            {/* Afficher les CV filtrés après la sélection d'un modèle */}
            {selectedModel === modelName &&
              filteredModels[modelName].map((product) => (
                <div key={product.id} className="block">
                  <ModeleOneList
                    id={product.id}
                    name={modelName}
                    image_path={product.variants.image_path}
                    couleur={product.variants.couleur}
                  />
                </div>
              ))}

            {/* Filtrer par couleur pour afficher d'autres CV du modèle */}
            <div className="flex flex-col">
              <FilterModeleHexaColor
                products={groupedModels[modelName]}
                filterName={modelName}
                handleFilter={handleFilterByColor}
              />
            </div>
          </div>
        ))}
      </section>
      <More />
    </div>
  );
};

export default Modeles;
