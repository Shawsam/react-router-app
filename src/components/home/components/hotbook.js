import React, { Component } from 'react';
import ColumHeader from '../../../containers/columheader';
import BookList from './booklist.js';

export default class HotFilm extends Component{
	render(){
		return( 
			<div className="hotbook">
		        <ColumHeader title="热门图书" target='/Book' />
                <BookList />
			</div>
		)
	}
}