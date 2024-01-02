import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { chocolatList } from '../datas/chocolatList.js';
import '../styles/DetailProduits.css'

function DetailProduit({ cart, setCart }) {
  const { productId } = useParams();
  const produit = chocolatList.find((article) => article.id === productId);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, []);


  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex((item) => item.id === produit.id);
  
    if (existingProductIndex !== -1) {
      // Si le produit existe déjà dans le panier, mettez à jour la quantité
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      // Si le produit n'existe pas encore dans le panier, ajoutez-le
      updatedCart.push({ ...produit, quantity });
    }
  
    setCart(updatedCart);
  };


  if (!produit) {
    return <p>Produit non trouvé</p>;
  }


  return (
    <div className="detail-produit">
      <h2>{produit.title}</h2>
      <p>Prix: {produit.price} €</p>
      <p>Description: {produit.description}</p>
      <img src={produit.image} alt={produit.title} />
      <p>Ingrédients: {produit.ingredients}</p>
      <div className='d-flex flex-row align-items-center ms-2'>
        <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
        <span className='mx-2'>{quantity}</span>
        <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
      </div>
      <button onClick={addToCart}>Ajouter au panier</button>
    </div>
  );
}

export default DetailProduit;