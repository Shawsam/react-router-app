import React, {Component} from 'react';
import {Carousel, Card, BackTop, Icon, Button} from 'antd'
import Header from '../../containers/header.js';
import Footer from '../../containers/footer.js';

import banner from './img/banner.jpg';
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
                        <div><img src={banner} /></div>
                        <div><img src={banner} /></div>
                        <div><img src={banner} /></div>
                        <div><img src={banner} /></div>
                      </Carousel>
                    </div>

                    <HotFilm 
                        title="热门电影" 
                        haspage={true}
                        total={20} 
                        pageSize ={5}
                        target='/film'
                        onChange={this.pageChange}
                    />
                    <HotNews />
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