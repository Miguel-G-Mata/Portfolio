import React from 'react';
import './Footer.css';
import { Button } from '../../atoms/button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
          Vous pouvez me contacter à tout moment..
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Votre email'
            />
            <Button to='/contactez-moi' buttonStyle='btn--outline'>Contactez-moi</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>À propos de moi</h2>
            <Link to='/biographie'>Biographie</Link>
            <Link to='/biographie'>Formations</Link>
            <Link to='/biographie'>Expériences</Link>
            <Link to='/biographie'>Competences</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contacts</h2>
            <Link to='/contactez-moi'>Informations</Link>
            <Link to='/contactez-moi'>Adresse</Link>
            <Link to='/contactez-moi'>Email</Link>
            <Link to='/contactez-moi'>Téléphone</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <a href="https://www.youtube.com/watch?v=no82oluCZag&t=2023s" target="link">
              <p>ReactJS</p>
            </a>
            <a href="https://www.youtube.com/watch?v=jaQGNDqXHxc" target="link">
              <p>MySQL</p>
            </a>
            <a href="https://www.youtube.com/watch?v=uYhAfgEwNWA" target="link">
              <p>Angular</p>
            </a>
            <a href="https://www.youtube.com/watch?v=0PA69L88HeI&list=PLjwdMgw5TTLV7VsXd9NOeq39soYXORezN" target="link">
              <p>NodeJS</p>
            </a>
          </div>
          <div class='footer-link-items'>
            <h2>Réseaux</h2>
            <a href="https://github.com/MiguelGMata" target="link">
              <p>Githup</p>
            </a>
            <a href="https://www.linkedin.com/in/miguel-garcia-mata-846b85170/" target="link">
              <p>Linkedin</p>
            </a>
            <a href="https://www.facebook.com/miguel.gmata.3" target="link">
              <p>Facebook</p>
            </a>
            <a href="https://www.instagram.com/miguel_g_mata/" target="link">
              <p>Instagram</p>
            </a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Miguel G Mata
            </Link>
          </div>
          <small class='website-rights'>MGM © 2020</small>
          <div class='social-icons'>
            <a href="https://www.facebook.com/miguel.gmata.3" target="link">
              <i class='fab fa-facebook-f' />
            </a>
            <a href="https://www.instagram.com/miguel_g_mata/" target="link">
              <i class='fab fa-instagram' />
            </a>
            <a href="https://www.youtube.com/channel/UCOC0waSb0wWZU-f9za6P-WA?view_as=subscriber" target="link">
              <i class='fab fa-youtube' />
            </a>
            <a href="https://www.linkedin.com/in/miguel-garcia-mata-846b85170/" target="link">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
