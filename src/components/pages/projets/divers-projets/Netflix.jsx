import React from 'react';
import Footer from '../../../organisms/footer/Footer';
require('./_diversProjets.css')

export default function Netflix() {
    return (
        <>
            <div className='section-1 grid'>
                <div id="boite">
                    <h1 className="h1" >Projet Netflix-Clone</h1>
                    <h3 className="h3">Projet examen final pour la certification Développeur Web et Web mobile chez Simplon</h3>
                    <video className="videopage" src='/videos/Netflix.mp4' autoPlay loop muted />
                </div>
                <div id="boite-1">
                    <p className="texte">
                        L'objectif étant , en groupe de 4 pedant 2 semaine, de récupérer dans l'API movieDB les films et séries par le biais de fonctions asynchrones,
                        pour remplir nos sections. De pouvoir cliquer sur une miniature pour permettre l'apparition d'une modale.
                        D'avoir l'affiche d'un film en header avec son titre et résumé selon sa fiche.
                    </p>
                </div>
                <div id="boite-2">
                    <h3>Page Home</h3>
                    <img className="images item__img" src="/images/Netflix.png" alt="" />
                </div>
                <div id="boite-3">
                    <h3>Page Home</h3>
                    <img className="images item__img" src="/images/Netflix-2.png" alt="" />
                </div>
                <div id="boite-4">

                </div>

            </div>
            <div className="section-2">
                <h3>Version Mobile et Desktop</h3>
                <img className="images" src="/images/Netflix-3.png" alt="" />
                <img className="images" src="/images/Netflix-4.png" alt="" />
                <img className="images images-3" src="/images/Netflix-5.png" alt="" />
            </div>
            <div className="section-3" >
                <Footer />
            </div>
        </>
    )
}