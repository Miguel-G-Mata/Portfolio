import React from 'react';
import Navbar from '../src/components/organisms/navigation/Navbar';
import './App.css';
import Home from './components/pages/accueil/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/services/Services';
import Products from './components/pages/projets/Products';
import SignUp from './components/pages/contact/SignUp';
import Biographie from './components/pages/biographie/Biographie';
import Contactezmoi from './components/pages//contactez-moi/contactez-moi';
import CV from './components/pages/télécharger-CV/CV';
import Airbnb from './components/pages/projets/divers-projets/Airbnb';
import Electrohexagone from './components/pages/projets/divers-projets/ElectroHexagone';
import Netflix from './components/pages/projets/divers-projets/Netflix';
import Sosvet from './components/pages/projets/divers-projets/SOSVET';
import Twitter from './components/pages/projets/divers-projets/Twitter';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/biographie' component={Biographie} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/contactez-moi' component={Contactezmoi} />
          <Route path="/télécharger-CV" component={CV} />
          <Route path="/airbnb" component={Airbnb} />
          <Route path="/electrohexagone" component={Electrohexagone} />
          <Route path="/netflix" component={Netflix} />
          <Route path="/sosvet" component={Sosvet} />
          <Route path="/twitter" component={Twitter} />
        </Switch>
      </Router>
    </>
  );
}

/**<Route path='*' component={Home} /> */

export default App;
