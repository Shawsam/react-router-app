import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from './containers/header';
import Wrapper from './containers/wrapper';
import Footer from './containers/footer';
import './index.css'

export default class App extends Component{
    render(){
    	return(
		  <Router>
		    <div className="container">
              <Header />
		      <Wrapper />
		      <Footer />
		    </div>
		  </Router>
    	)
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
