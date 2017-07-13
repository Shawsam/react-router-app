import React, {Component} from 'react';
import NotFoundImg from './img/404.png';

const NotFound = ()=>{
	return (
		<div className="notfound">
             <img src={NotFoundImg} />
        </div>
	)
}

export default NotFound;