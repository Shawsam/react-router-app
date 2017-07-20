import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import fetchJsonp from 'fetch-jsonp';
import * as config from '../../../config/index';
import Loading from '../../loading';
import ColumHeader from '../../../containers/columheader';

require('es6-promise').polyfill();


export default class HotFilm extends Component{
	state = {
		filmData: null,
		current: 1
	}

	componentDidMount() {
		const count = this.props.pageSize;
		const start = 0;
		const url=`${config.SERVER_PATH}/movie/in_theaters?start=${start}&count=${count}`;
	    fetchJsonp(url).then(respondse=>respondse.json())
	    .then(data=> this.setState({filmData:data.subjects}))
	    .catch(err=> console.log('parsing failed', err))
	}
    
    pageChange = (page) => {
        this.setState({
        	current:page
        })
        const count = this.props.pageSize;
        const start = (page - 1)*count;
        const url=`${config.SERVER_PATH}/movie/in_theaters?start=${start}&count=${count}`;
	    fetchJsonp(url).then(respondse=>respondse.json())
	    .then(data=> this.setState({filmData:data.subjects}))
	    .catch(err=> console.log('parsing failed', err))
    }

	render(){

		const {title, haspage, total, pageSize, target } = this.props;
		const { current, filmData } = this.state;

		let filmList;
		if(filmData){
			    filmList = filmData.map(item=>( 
				<li key={item.id}>
                    <Link to={ '/filmdetails/' + item.id}>
				    <img src={item.images.large} />
				    <p>{item.title}<span className="grade">{item.rating.average}</span></p>
				    </Link>
				</li>)
			)
		}

		return( 
		    <div className="hotfilm">

                <ColumHeader 
	                title={title} 
	                haspage={haspage}
	                total={total} 
	                pageSize ={pageSize}
	                current={current} 
	                target={target}
	                onChange={this.pageChange}
	             />

		        {filmList?<ul className="filmlist">{filmList}</ul>
		                 :<Loading />}
		    </div>
		)
	}
}