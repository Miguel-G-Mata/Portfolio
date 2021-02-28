import React, { Component } from 'react';
import Email from '../../molecules/Email/Email';
import Footer from '../../organisms/footer/Footer';
require('./_contactez-moi.css');

class Contactezmoi extends Component {

    constructor() {
        super();
        this.state = {
            isShowing: false,
        };
    }

    contactezNous(e) {
        e.preventDefault();
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render(

    ) {
        return (
            <div className="jumbo" onSubmit={this.contactezNous}>
                {this.state.isShowing ? <div onClick={this.closeModalHandler} ></div> : null}
                <h1 className="text-center">Contactez-moi</h1>
                <h2>Information de contact</h2>
                <h3 className="text"><i class="far fa-envelope"></i> miguelgmata.dev@gmail.com</h3>
                <h3 className="text"><i class="far fa-envelope"></i> info@miguelgmata.site</h3>
                <h3 className="text"><i class="fas fa-phone-square-alt"></i> 0656822946</h3>
                <h3 className="text"><i class="fas fa-map-marker-alt"></i> 56 rue Sadi Carnot, 93170 à Bagnolet</h3>
                <div className="form-group">
                    <h3>Cliquez ici pour m'envoyer un mail</h3>
                    <button className="button-contact btn btn-info" onClick={this.openModalHandler}>Email<span role="img" aria-label="donut"> &#x1F4E7;</span></button>
                </div>
                <div className="modal-position">
                    <Email show={this.state.isShowing} close={this.closeModalHandler}></Email >
                </div>
                <Footer />
            </div>

        )
    }
}


export default Contactezmoi 