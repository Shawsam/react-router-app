import React, {Component} from 'react';
import Banner from './components/banner.js';
import HotFilm from './components/hotfilm.js';
import HotNews from './components/hotnews.js';
import HotMusic from './components/hotmusic.js';
import HotBook from './components/hotbook.js';

export default class Home extends Component{
	render(){
		return(
            <div className="home">
                <Banner />
                <HotFilm />
                <HotNews />
                <HotMusic />
                <HotBook />
            </div>
		)
	}
}