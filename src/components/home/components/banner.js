import React, { Component } from 'react';
import banner from './img/banner.jpg'

export default class Banner extends Component{
	render(){
		return( 
		    <div className="banner">
                <img src={banner} />
		    </div>
		)
	}
}