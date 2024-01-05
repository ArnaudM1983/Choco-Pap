import React from 'react';
import '../styles/Footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <>
                <footer className="container-fluid pt-3 mt-5">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <p className="fs-4">Choco pap</p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
                                doloremque quo facilis. Cum illum molestiae veniam, sit cupiditate
                                necessitatibus amet!
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <p className="fs-4">Contact</p>
                            <p>
                                Adresse: 51 rue du chocolat 75000 Paris
                                <br />
                                Téléphone: 01 23 45 67 89 <br />
                                Horaires: 9h00 - 17h00 Du lundi au vendredi
                            </p>
                        </div>
                        <div className="col-12 col-md-4 reseaux-sociaux d-flex align-items-center justify-content-evenly pb-3">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                                <FaFacebook className="facebook-icon" /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                                <FaInstagram className="instagram-icon" /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-reset'>
                            <   FaTwitter className="twitter-icon" /></a>
                        </div>
                    </div>
                </footer>
            </>
        </div>

    )
}

export default Footer
