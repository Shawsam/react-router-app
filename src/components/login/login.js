import React, {Component} from 'react';
import Footer from '../../containers/footer.js';


export default class Login extends Component{
	render(){
		return(
            <div className="login container">
                <div className="wrapper">
                    <p>Login</p>
                </div>
                <Footer />
            </div>
		)
	}
}