import React from 'react';
import Footer from '../../organisms/footer/Footer';

require('./_biographie.css');

export default function Biographie() {
    return (
        <>
            <div className='biographie__container'>
                <div className='biographie'>
                    <video className="videososvet" src='/videos/video-1.mp4' autoPlay loop muted />
                    <div className='photo'>
                        <p className="bio-2">Je m'appelle Miguel Garcia Mata, je suis Vénézuélien et je vis en France depuis 3 ans.
                        Actuellement en formation Licence concepteur développeur d’application chez Simplon.co<br></br>
                        Diplômé d’un Master II en Informatique au Venezuela où j’ai eu la chance de développer un site web e-commerce 
                        et tout récemment du titre professionnel de Développeur Web et Web Mobile classé au niveau 5 (ex niveau III) 
                        au cours du quel j’ai eu l’opportunité de réaliser de nombreux projets, Notamment en mode Agile avec des 
                        technologies comme MySQL, Express JS, React, NodeJS, API Rest, Sequelize, Sass. 
                       </p>
                    </div>

                    <h1 className="texte-biographie" >Biographie</h1>
                    <div className="bio">
                        <p>
                        J'ai également eu l’occasion 
                        durant cette formation d'effectuer un stage d'un mois chez Plugstation.
                        Mes différentes formations techniques au Vénézuela puis chez Simplon.co m’ont permis d’acquérir des connaissances techniques 
                        solides : JAVASCRIPT, HTML, CSS, JAVA, PHP, MySQL, C++, C, ReactJS, PostgreSQL, Angular... <br></br>
                        J’ai un grand intérêt à travailler dans une entreprise, ce qui me permettra de surmonter des défis personnels et professionnels de manière constante.
                        <br></br>
                        De nature enthousiaste, curieux et avenant, je souhaiterai vivement faire partie aux côtés 
                        de développeurs expérimentés qui défendent le partage des connaissances , avec de nombreux challenges à relever 
                        et qui me donnerait la chance de pouvoir continuer à apprendre et partager mon expériences et mes compétences.
                       
                       </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}