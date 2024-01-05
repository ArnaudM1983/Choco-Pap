import React from 'react';
import '../styles/Accueil.css'
import accueil1 from '../images/accueil1.jpg';
import accueil2 from '../images/accueil2.jpg';
import accueil3 from '../images/accueil3.jpg';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Acceuil() {

  return (
    <div className='text-center'>
      <h1 className='display-5 mb-5 mt-5'>CHOCO PAP</h1>
      <NavLink to="/boutique" className="bouton-boutique">VOIR LA BOUTIQUE</NavLink>
      <div className='accueil-container mt-5'>
        <Carousel className='accueil-container' prevIcon={<FaChevronLeft size={30} style={{ color: 'black' }} />}
          nextIcon={<FaChevronRight size={30} style={{ color: 'black' }} />}>
          <Carousel.Item>
            <img className="d-block w-75 h-75 mx-auto" src={accueil1} alt="Première diapositive" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-75 h-75 mx-auto" src={accueil2} alt="Deuxième diapositive" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-75 h-75 mx-auto" src={accueil3} alt="Troisième diapositive" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Acceuil;