import React from 'react';
import Footer from '../../../organisms/footer/Footer';
require('./_diversProjets.css')

export default function Twitter() {
    return (
        <>
            <div className='section-1 grid'>
                <div id="boite">
                    <h1 className="h1" >Projet Airbnb-Clone</h1>
                    <h3 className="h3">Projet réalisé dans le cadre de ma formation "développeur full stack JavaScript" chez Simplon</h3>
                    <video className="videopage" src='/videos/Twitter.mp4' autoPlay loop muted />
                </div>
                <div id="boite-1">
                    <p className="texte">
                        L'Objectif reproduire certaines fonctionnalités de Twitter en suivant une architecture MVC pedant 2 semaine.
                        Notamment, une inscription connexion via passportJs, récupérer les informations de l'user dans la base de données
                        et les afficher, écrire des messages les récupérer et les afficher dans la page d'actualités. Produire une interface avec SASS.
                    </p>
                </div>
                <div id="boite-2">
                    <h3>Page Decouverte</h3>
                    <img className="images item__img" src="/images/twitter-2.png" alt="" />
                </div>
                <div id="boite-3">
                    <h3>Page d'Accueil</h3>
                    <img className="images item__img" src="/images/twitter-3.png" alt="" />
                </div>
                <div id="boite-4">
                </div>
            </div>

            <div className="section-2">
                <h3>Maquette et Modélisation UML</h3>
                <img className="imagesSecundaire" src="/images/twitter-3.png" alt="" />
                <img className="imagesSecundaire" src="/images/twitter-4.png" alt="" />
                <img className="imagesSecundaire" src="/images//twitter-5.png" alt="" />
                <img className="imagesSecundaire" src="/images//twitter-6.png" alt="" />
            </div>
            <div className="section-3" >
                <Footer />
            </div>
        </>
    )
}