import React, { Component } from 'react';
import filmImg from '../img/film.jpg'

export default class HotFilm extends Component{
	render(){
		return( 
		    <div className="hotfilm">
		        <p className="title">热门电影</p>
		        <ul className="filmlist">
		        	<li>
		        	    <img src={filmImg} />
		        	    <p>异星觉醒<span className="grade">9.0</span></p>
		        	</li>
		        	<li>
		        	    <img src={filmImg} />
		        	    <p>异星觉醒<span className="grade">9.0</span></p>
		        	</li>
		        	<li>
		        	    <img src={filmImg} />
		        	    <p>异星觉醒<span className="grade">9.0</span></p>
		        	</li>
		        	<li>
		        	    <img src={filmImg} />
		        	    <p>异星觉醒<span className="grade">9.0</span></p>
		        	</li>
		        	<li>
		        	    <img src={filmImg} />
		        	    <p>异星觉醒<span className="grade">9.0</span></p>
		        	</li>
		        </ul>
		    </div>
		)
	}
}