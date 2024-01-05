import React, { useState } from 'react';
import '../styles/PopUpPanier.css'
import { FaTrash, FaTimes } from 'react-icons/fa'

function PopUpPanier({ cart, setCart, removeFromCart, handleClose }) {
  // State pour stocker les quantités des produits dans le panier
  const [productQuantities, setProductQuantities] = useState(
    cart.reduce((quantities, product) => {
      quantities[product.id] = product.quantity; // Utilise la quantité du produit
      return quantities;
    }, {})
  );

  // Fonction pour mettre à jour la quantité d'un produit dans le panier
  const updateQuantity = (productId, newQuantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCart(updatedCart);
  };

  // Fonction pour réinitialiser complètement le panier
  const resetCart = () => {
    setProductQuantities({});
    setCart([]);
  };

  // Fonction pour calculer le total du panier
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-header">
          <button className="close-button" onClick={handleClose}>
            <FaTimes />
          </button>
          <h2 className="text-center pb-3">PANIER</h2>
        </div>
        <hr></hr>
        {cart.map((product) => (
          <div key={product.id} className="article-panier d-flex align-items-center my-5">
            <button className="button-trash" onClick={() => removeFromCart(product)}>
              <FaTrash />
            </button>
            <img className="me-3" src={product.image} alt={product.title} />
            <div className='me-3 quantity-controls d-flex flex-column flex-sm-row'>
              <p className="fw-bold ms-2 mt-3">{product.title}</p>
              <p className='ms-2 mt-3'>{product.price} €</p>
              <div className='d-flex flex-row align-items-center ms-2'>
                <button onClick={() => updateQuantity(product.id, productQuantities[product.id] - 1)}>
                  -
                </button>
                <span className='mx-2'>{productQuantities[product.id]}</span>
                <button onClick={() => updateQuantity(product.id, productQuantities[product.id] + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
        <hr></hr>
        <div className="footer-panier my-5 py-5 d-flex flex-column text-center">
          <p className="fw-bold mb-5">
            TOTAL : {calculateTotal()} €
          </p>
          <button className="bouton-panier-popup mb-3 py-3 mx-auto" onClick={resetCart}>Réinitialiser le panier</button>
          <button className="bouton-panier-popup py-3 mx-auto">Valider le panier</button>
        </div>
      </div>
    </div>
  );
}

export default PopUpPanier;