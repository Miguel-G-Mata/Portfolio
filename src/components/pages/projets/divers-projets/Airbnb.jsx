import React from 'react';
import Footer from '../../../organisms/footer/Footer';
require('./_diversProjets.css')

export default function Airbnb() {
    return (
        <>
            <div className='section-1 grid'>
                <div id="boite">
                    <h1 className="h1" >Projet Airbnb-Clone</h1>
                    <h3 className="h3">Projet réalisé dans le cadre de ma formation "développeur full stack JavaScript" chez Simplon</h3>
                    <video className="videopage" src='/videos/Airbnb.mp4' autoPlay loop muted />
                </div>
                <div id="boite-1">
                    <p className="texte">
                        L'ojectif étant en groupe de 4, de réaliser un clone responsive de
                    l'application Airbnb pendant 2 semaine. En divisant le projet en deux dossiers différents, back-ent et front-ent. <br />
                    Dans la partie back-end on a utilisé Sequelize pour simplifier l'accès à la base
                    de données et JWT pour sécuriser l'échange des informations. Dans ce projet si l'utilisateur
                    est bien authentifié, il peut ajouter un appartement à la location.
                </p>
                </div>
                <div id="boite-2">
                    <h3>Page d'Accueil</h3>
                    <img className="images item__img" src="/images/airbnb-1.png" alt="" />
                </div>
                <div id="boite-3">
                    <h3>Page Ajouter place</h3>
                    <img className="images item__img" src="/images/airbnb-4.png" alt="" />
                </div>
                <div id="boite-4">
                    <p className="texte texte-2">Dans la partie front-end on a utilisé React et du SASS. On a utilisé un Reducer
                    pour récupérer le token généré par la connexion pour pouvoir autoriser l'ajout d'un nouvel appartement.
                    </p>
                </div>
            </div>
            <div className="section-2">
                <h3>Version Mobile</h3>
                <img className="images" src="/images/airbnb-2.png" alt="" />
                <img className="images" src="/images/airbnb-3.png" alt="" />
                <img className="images" src="/images/airbnb-5.png" alt="" />
                <img className="images" src="/images/airbnb-6.png" alt="" />
            </div>
            <div className="section-3" >
                <Footer />
            </div>
        </>
    )
}