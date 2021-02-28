import React from 'react';
import Footer from '../../../organisms/footer/Footer';
require('./_diversProjets.css')

export default function Sosvet() {
    return (
        <>
            <div className='section-1 grid'>
                <div id="boite">
                    <h1 className="h1" >Projet SOSVET</h1>
                    <h3 className="h3">Projet examen final pour la certification Développeur Web et Web mobile chez Simplon</h3>
                    <video className="videopage" src='/videos/SOSVET.mp4' autoPlay loop muted />
                </div>
                <div id="boite-1">
                    <p className="texte">
                        L'objectif est le développement d'une page web responsive qui
                        permet de localiser des vétérinaires et des
                        cliniques vétérinaires près de chez soi. <br />
                        Si un visiteur souhaite devenir utilisateur, il doit se rendre sur la page
                        d'inscription et une fois inscrit, la page le redirige vers la page de connexion pour
                        se connecter.Une fois connecté, l'utilisateur aura accès à son profil, et il pourra
                        ajouter un animal et également rechercher des vétérinaires.
                    </p>
                </div>
                <div id="boite-2">
                    <h3>Page Contactez-nous</h3>
                    <img className="images item__img" src="/images/sosvet-1.png" alt="" />
                </div>
                <div id="boite-3">
                    <h3>Page Vétérinaire</h3>
                    <img className="images item__img" src="/images/sosvet-3.png" alt="" />
                </div>
                <div id="boite-4">
                    <p className="texte">
                        Les technologies que j’ai utilisées sont :
                        Mysql en tant que systèmes de gestion de bases de donnée relationnelles,
                        ExpressJS comme infrastructure d’applications web nodeJs, La bibliothèque de
                        javaScrit React pour gérer l’interface de l’application, NodeJS en tant que
                        plateforme de développement et Sequelize comme ORM et SASS pour les styles.
                    </p>
                </div>

            </div>
            <div className="section-2">
                <h3>Version Mobile</h3>
                <img className="images" src="/images/sosvet-4.png" alt="" />
                <img className="images" src="/images/sosvet-6.png" alt="" />
                <img className="images" src="/images/sosvet-5.png" alt="" />
                <img className="images" src="/images/sosvet-7.png" alt="" />
            </div>
            <div className="section-2-B">
                <h3>Modélisation UML</h3>
                <img className="imagesSecundaire" src="/images/UML-Classe.png" alt="" />
                <img className="imagesSecundaire" src="/images/UML-Use-Case.png" alt="" />
                <img className="imagesSecundaire" src="/images/UML-Secuences.png" alt="" />
                <img className="imagesSecundaire" src="/images/UML-MCD.png" alt="" />
            </div>
            <div className="section-3" >
                <Footer />
            </div>
        </>
    )
}