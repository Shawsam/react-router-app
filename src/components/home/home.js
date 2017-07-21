import React, {Component} from 'react';
import {Carousel, BackTop, Icon} from 'antd'
import Header from '../../containers/header.js';
import Footer from '../../containers/footer.js';

import banner1 from './img/movie_carousel_1.jpg';
import banner2 from './img/movie_carousel_2.jpg';
import banner3 from './img/movie_carousel_3.jpg';
import banner4 from './img/movie_carousel_4.jpg';

import HotFilm from './components/hotfilm.js';
import HotNews from './components/hotnews.js';
import HotMusic from './components/hotmusic.js';
import HotBook from './components/hotbook.js';

export default class Home extends Component{
	render(){
		return(
            <div className="home container">
                <Header />
                <div className="wrapper">
                    <div className="banner">
                       <Carousel autoplay>
                        <div><img alt="banner" src={banner1} /></div>
                        <div><img alt="banner" src={banner2} /></div>
                        <div><img alt="banner" src={banner3} /></div>
                        <div><img alt="banner" src={banner4} /></div>
                      </Carousel>
                    </div>

                    <HotFilm 
                        title="热门电影" 
                        haspage={true}
                        total={20} 
                        pageSize ={5}
                        target="/film"
                        onChange={this.pageChange}
                    />
                    <HotNews 
                        title="热点新闻" 
                        target="/news"
                    />
                    
                    <HotMusic />
                    <HotBook />

                    <BackTop>
                      <div className="ant-back-top-inner">
                        <Icon type="arrow-up"/>
                      </div>
                    </BackTop>
                </div>
                <Footer />
            </div>
		)
	}
}