import React from 'react';
import { Button } from '../../atoms/button/Button';
import { Button1 } from '../../atoms/button/Button-1';
import { Button2 } from '../../atoms/button/Button-2';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Miguel G Mata</h1>
      <p>Développeur Web FullstackJS</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contactez-moi
        </Button>
        <Button1
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('salut miguel')}
        >
          À propos de moi <i className='far fa-play-circle' />
        </Button1>
        <Button2
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Télécharger CV
        </Button2>
      </div>
      <div className="audio">
            <audio controls="controls" autoPlay loop >
                <source src='/videos/audio-2.mp3'type="audio/mpeg" />
            </audio>
      </div>
    </div>
  );
}

export default HeroSection;
