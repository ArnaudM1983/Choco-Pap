import React from 'react';
import { useParams } from 'react-router-dom';
import { chocolatList } from '../datas/chocolatList.js';

function DetailProduit() {
  const { productId } = useParams();
  const produit = chocolatList.find((article) => article.id === productId);

  if (!produit) {
    return <p>Produit non trouvé</p>;
  }

  return (
    <div className="detail-produit">
      <h2>{produit.title}</h2>
      <img src={produit.image} alt={produit.title} />
      <p>Prix: {produit.price} €</p>
      <p>Description: {produit.description}</p>
      <p>Ingrédients: {produit.ingredients}</p>
    </div>
  );
}

export default DetailProduit;