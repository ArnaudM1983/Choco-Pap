import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { chocolatList } from '../datas/chocolatList.js';
import '../styles/DetailProduits.css'

function DetailProduit({ cart, setCart }) {
  const { productId } = useParams();
  // Recherche le produit dans la liste
  const produit = chocolatList.find((article) => article.id === productId);

  // State pour gérer la quantité du produit à ajouter au panier
  const [quantity, setQuantity] = useState(1);

  // useEffect pour réinitialiser la quantité à 1
  useEffect(() => {
    setQuantity(1);
  }, []);

  // Fonction pour mettre à jour la quantité
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  // Fonction pour ajouter le produit au panier
  const addToCart = () => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex((item) => item.id === produit.id);

    if (existingProductIndex !== -1) {
      // Si le produit existe déjà dans le panier, met à jour la quantité
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      // Si le produit n'existe pas encore dans le panier, ajoute le produit
      updatedCart.push({ ...produit, quantity });
    }

    // Met à jour le panier avec la nouvelle liste
    setCart(updatedCart);
  };

  return (
    <div className="detail-produit mx-4 my-3">
      <div className="d-flex flex-md-row flex-column">
        <div className="me-md-3">
          <img className="my-3 img-fluid w-100" src={produit.image} alt={produit.title} />
        </div>
        <div className="flex-grow-1 d-flex flex-column mt-4">
          <h2>{produit.title}</h2>
          <p>{produit.price} €</p>
          <p>Description: {produit.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-row align-items-center me-4">
              <button className='border-0' onClick={() => handleQuantityChange(quantity - 1)}>-</button>
              <span className="mx-2">{quantity}</span>
              <button className='border-0' onClick={() => handleQuantityChange(quantity + 1)}>+</button>
            </div>
            <button className="bouton-panier-detail ms-4 mx-auto pt-2 pb-2 px-3" onClick={addToCart}>
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p>Ingrédients: {produit.ingredients}</p>
      </div>
    </div>
  );

}

export default DetailProduit;