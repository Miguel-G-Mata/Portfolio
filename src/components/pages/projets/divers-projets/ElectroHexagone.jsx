import React from 'react';
import Footer from '../../../organisms/footer/Footer';
require('./_diversProjets.css')

export default function Electrohexagone() {
    return (
        <>
            <div className='section-1 grid'>
                <div id="boite">
                    <h1 className="h1" >Projet Electrohexagone</h1>
                    <h3 className="h3">Projet examen final pour la certification Développeur Web et Web mobile chez Simplon</h3>
                    <video className="videopage" src='/videos/ElectroHexagone.mp4' autoPlay loop muted />
                </div>
                <div id="boite-1">
                    <p className="texte">
                        L'objectif de réaliser un site de e-commerce sur WordPress en utilisant
                        la plateforme open source Woocommerce qui facilite l'activité de la vente en ligne.
                        On peut y gérer son stock d'articles, les taxe, les modes de payement, les promotions, etc.
                </p>
                </div>
                <div id="boite-2">
                    <h3>Page d'Accueil</h3>
                    <img className="images item__img" src="/images/electrohexagone-6.png" alt="" />
                </div>
                <div id="boite-3">
                    <h3>Page d'Accueil</h3>
                    <img className="images item__img" src="/images/electrohexagone-2.png" alt="" />
                </div>
                <div id="boite-4">
                    <p className="texte texte-2">
                        J'ai creée un plugin pour les commentaires du clients
                    </p>
                </div>

            </div>
            <div className="section-2">
                <h3>Pages</h3>
                <img className="imagesSecundaire" src="/images/electrohexagone-6.png" alt="" />
                <img className="imagesSecundaire" src="/images/electrohexagone-4.png" alt="" />
                <img className="imagesSecundaire" src="/images/electrohexagone-5.png" alt="" />
                <img className="imagesSecundaire" src="/images/electrohexagone-3.png" alt="" />
            </div>
            <div className="section-3" >
                <Footer />
            </div>
        </>
    )
}