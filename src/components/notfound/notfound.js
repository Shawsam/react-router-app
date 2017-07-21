import React from 'react';
import NotFoundImg from './img/404.png';

const NotFound = ()=>{
	return (
		<div className="notfound">
             <img alt="notfound" src={NotFoundImg} />
        </div>
	)
}

export default NotFound;