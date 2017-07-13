import React, {Component} from 'react';
import Header from '../../containers/header.js';
import Footer from '../../containers/footer.js';


export default class Film extends Component{
	render(){
		return(
            <div className="film container">
                <Header />
                <div className="wrapper">
                    <p>Film</p>
                </div>
                <Footer />
            </div>
		)
	}
}