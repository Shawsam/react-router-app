import React, {Component} from 'react';
import Header from '../../containers/header.js';
import Footer from '../../containers/footer.js';


export default class Hot extends Component{
	render(){
		return(
            <div className="home container">
                <Header />
                <div className="wrapper">
                    <p>Hot</p>
                </div>
                <Footer />
            </div>
		)
	}
}