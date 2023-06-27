// Importation des dépendances nécessaires
import React, { useState } from 'react';

// Définition du composant Counter
const Counter = () => {
  // Utilisation du useState pour déclarer une variable d'état appelée "count" et une fonction pour la mettre à jour appelée "setCount"
  // La valeur initiale de "count" est 0
  const [count, setCount] = useState(0);

  // Fonction pour augmenter la valeur de "count" de 1
  const increment = () => {
    setCount(count + 1);
  };

  // Fonction pour diminuer la valeur de "count" de 1
  const decrement = () => {
    setCount(count - 1);
  };

  // Rendu du composant Counter
  return (
    <div>
      <h2>Counter</h2> {/* Titre du compteur */}
      <h3>{count}</h3> {/* Affichage de la valeur actuelle de "count" */}
      <button onClick={increment}>More</button> {/* Bouton pour augmenter la valeur de "count" */}
      <button onClick={decrement}>Less</button> {/* Bouton pour diminuer la valeur de "count" */}
    </div>
  );
};

// Exportation du composant Counter pour pouvoir l'utiliser ailleurs
export default Counter;
