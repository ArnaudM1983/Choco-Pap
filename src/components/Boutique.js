import React, { useState, useEffect } from 'react';
import { chocolatList } from '../datas/chocolatList.js'
import '../styles/chocolatItem.css'
import '../styles/Boutique.css'
import { Link } from 'react-router-dom';


function Boutique({ cart, setCart }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(20);
  const [minNote, setMinNote] = useState(1);
  const [maxNote, setMaxNote] = useState(5);
  const [filteredChocolates, setFilteredChocolates] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    // Appliquer le filtre en temps réel
    const filtered = chocolatList.filter((article) => {
      // Filtre par catégorie
      const categoryFilter =
        selectedCategories.length === 0 || selectedCategories.some((cat) => article.category[cat]);
      // Filtre par prix
      const priceFilter = article.price >= minPrice && article.price <= maxPrice;
      const noteFilter = article.note >= minNote && article.note <= maxNote;

      return categoryFilter && priceFilter && noteFilter;
    });

    setFilteredChocolates(filtered);
  }, [selectedCategories, minPrice, maxPrice, minNote, maxNote]);


  function handleCategoryChange(category) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  }

  function handleMinPriceChange(event) {
    setMinPrice(Number(event.target.value));
  }

  function handleMaxPriceChange(event) {
    setMaxPrice(Number(event.target.value));
  }

  function handleMinNoteChange(event) {
    setMinNote(Number(event.target.value));
  }

  function handleMaxNoteChange(event) {
    setMaxNote(Number(event.target.value));
  }

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      // Si le produit est déjà dans le panier, mettez à jour la quantité
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Si le produit n'est pas encore dans le panier, ajoutez-le avec une quantité initiale de 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }


  return (
    <div className='container-fluid'>
      <h1 className='text-center my-5'>BOUTIQUE</h1>
      <div >
        <div className='Row d-md-flex'>
          <div className='filtres col-md-3 px-4 pb-3 ms-2 me-2'>
            <div className='categories'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='pb-2 pt-3'>CATÉGORIE</h5>
                <button className='btn btn-link d-md-none' onClick={() => setShowCategories(!showCategories)}>
                  {showCategories ? '-' : '+'}
                </button>
              </div>
              <div className={`filtres  px-4 pb-3 ms-2 me-2 ${showCategories ? '' : 'hidden-filters'}`}>
                <label>
                  <input
                    type="checkbox"
                    value="tous"
                    checked={selectedCategories.length === 0}
                    onChange={() => setSelectedCategories([])}
                  />
                  Tous
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="blanc"
                    checked={selectedCategories.includes('blanc')}
                    onChange={() => handleCategoryChange('blanc')}
                  />
                  Chocolat Blanc
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="lait"
                    checked={selectedCategories.includes('lait')}
                    onChange={() => handleCategoryChange('lait')}
                  />
                  Chocolat au lait
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="noir"
                    checked={selectedCategories.includes('noir')}
                    onChange={() => handleCategoryChange('noir')}
                  />
                  Chocolat Noir
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="noix"
                    checked={selectedCategories.includes('noix')}
                    onChange={() => handleCategoryChange('noix')}
                  />
                  Noix/Noisette
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="caramel"
                    checked={selectedCategories.includes('caramel')}
                    onChange={() => handleCategoryChange('caramel')}
                  />
                  Caramel
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="fruit"
                    checked={selectedCategories.includes('fruit')}
                    onChange={() => handleCategoryChange('fruit')}
                  />
                  Fruit
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="liqueur"
                    checked={selectedCategories.includes('liqueur')}
                    onChange={() => handleCategoryChange('liqueur')}
                  />
                  Liqueur
                </label>
              </div>
              {/* Ajoutez d'autres cases à cocher pour chaque catégorie */}
            </div>
            <hr></hr>
            <div className='prix'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='pb-2 pt-3'>PRIX</h5>
                <button className='btn btn-link d-md-none' onClick={() => setShowPrice(!showPrice)}>
                  {showPrice ? '-' : '+'}
                </button>
              </div>
              <div className={`filtres  px-4 pb-3 ms-2 me-2 ${showPrice ? '' : 'hidden-filters'}`}>
                <div>
                  <label>Prix min</label>
                  <select value={minPrice} onChange={handleMinPriceChange}>
                    <option value={1}>1€</option>
                    <option value={5}>5€</option>
                    <option value={10}>10€</option>
                    <option value={15}>15€</option>
                  </select>
                </div>
                <div>
                  <label>Prix max</label>
                  <select value={maxPrice} onChange={handleMaxPriceChange}>
                    <option value={5}>5€</option>
                    <option value={10}>10€</option>
                    <option value={15}>15€</option>
                    <option value={20}>20€</option>
                  </select>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className='notes'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='pb-2 pt-3'>NOTE</h5>
                <button className='btn btn-link d-md-none' onClick={() => setShowNotes(!showNotes)}>
                  {showNotes ? '-' : '+'}
                </button>
              </div>
              <div className={`filtres  px-4 pb-3 ms-2 me-2 ${showNotes ? '' : 'hidden-filters'}`}>
                <div>
                  <label>Note min:</label>
                  <select value={minNote} onChange={handleMinNoteChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
                <div>
                  <label>Note max:</label>
                  <select value={maxNote} onChange={handleMaxNoteChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="articles-list col-md-8 pe-3">
            {filteredChocolates.map((article) => (
              <div key={article.id} className="chocolatItem text-center mb-5 py-4 px-4">
              <Link to={`/boutique/${article.id}`} className="lien-detail">
              <img className="chocolatCover" src={article.image} alt={article.title} />
                <h5 className='mx-auto fw-bold mt-5'>{article.title}</h5>
                <p className='mx-auto'>Note : {article.note}</p>
                <p className='mx-auto fw-bold'>{article.price} €</p>
              </Link>
              <button className='bouton-panier mx-auto pt-2 pb-2 px-3 ' onClick={() => addToCart(article)}>Ajouter au panier</button>
            </div>
            ))}
          </div>
        </div>

      </div>

    </div>

  );
}

export default Boutique;