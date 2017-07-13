import React, {Component} from 'react';
import Header from '../../containers/header.js';
import Footer from '../../containers/footer.js';


export default class Book extends Component{
	render(){
		return(
            <div className="book container">
                <Header />
                <div className="wrapper">
                    <p>Book</p>
                </div>
                <Footer />
            </div>
		)
	}
}