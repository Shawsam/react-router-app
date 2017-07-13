import React, {Component} from 'react';
import Header from '../../containers/header.js';
import Footer from '../../containers/footer.js';


export default class Music extends Component{
	render(){
		return(
            <div className="music container">
                <Header />
                <div className="wrapper">
                    <p>Music</p>
                </div>
                <Footer />
            </div>
		)
	}
}