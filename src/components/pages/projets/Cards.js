import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Découvrez mes projets de développement web!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              text='Application web et web mobile qui permet de localiser des vétérinaires particuliers et des cliniques vétérinaires près de chez soi'
              label='SOSVET'
              path='/sosvet'
            />
            <CardItem
              src='images/airbnb-1.png'
              text='Application Web et web mobile avec les principales features de Airbnb'
              label='Airbnb'
              path='/airbnb'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/twitter-1.png'
              text='Application web avec les principales features du réseau social Twitter'
              label='Twitter'
              path='/twitter'
            />
            <CardItem
              src='images/img-4.png'
              text='Application web avec les principales features de Netflix'
              label='Netflix'
              path='/netflix'
            />
            <CardItem
              src='images/img-5.png'
              text='Projet e-commerce de la boutique ElectroHexagone'
              label='ElectroHexagone'
              path='/electrohexagone'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
