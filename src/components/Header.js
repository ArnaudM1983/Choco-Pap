import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png'
import panier from '../images/panier.png'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'
import PopUpPanier from './PopUpPanier'


function Header({ cart, setCart }) {
  const [showPanier, setShowPanier] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handlePanierClick = () => {
    setShowPanier(!showPanier);
  };

  const handleClosePanier = () => {
    setShowPanier(false);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 100; // Ajustez la position de déclenchement selon vos préférences

      if (scrollPosition > triggerPosition) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isFixed ? 'fixed-top' : ''}`}>
      <>
        <header className="navbar navbar-expand-sm px-3 mb-2">
          <img src={logo} alt="logo" className="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav ms-auto d-flex align-items-sm-center">
              <li className="nav-item">
                {/* Lien vers Accueil*/}
                <NavLink to="/" className="lien-acceuil text-decoration-none text-white me-3">Acceuil</NavLink>
              </li>
              <li className="nav-item">
                {/* Lien vers Boutique*/}
                <NavLink to="/boutique" className="lien-boutique text-decoration-none text-white me-3">Boutique</NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <img
              src={panier}
              alt="logo panier"
              className="logo-panier"
              onClick={handlePanierClick}
            />
            <span className="cart-count ms-2">{cart.length}</span>
          </div>
        </header>
        {showPanier && <PopUpPanier cart={cart} setCart={setCart} removeFromCart={removeFromCart} handleClose={handleClosePanier} />}
      </>

    </div>
  )
}

export default Header