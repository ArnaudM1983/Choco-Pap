import React, { useState } from 'react';
import Header from './Header'
import Boutique from './Boutique'
import Acceuil from './Acceuil';
import Footer from './Footer';
import DetailProduit from './DetailProduit';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [cart, setCart] = useState([]);

    return (
        <div>
            <BrowserRouter>
            <Header cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/boutique" element={<Boutique cart={cart} setCart={setCart} />} />
          <Route path="/boutique/:productId" element={<DetailProduit />} />
        </Routes>
            </BrowserRouter>
            <Footer />
        </div>
      
    )
        
}


export default App