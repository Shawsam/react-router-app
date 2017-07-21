import React, {Component} from 'react'
import {Row, Col, Carousel, Tabs} from 'antd'
import newsBanner1 from '../img/news_carousel_1.jpg'
import newsBanner2 from '../img/news_carousel_2.jpg'
import newsBanner3 from '../img/news_carousel_3.jpg'
import newsBanner4 from '../img/news_carousel_4.jpg'


import Loading from '../../../containers/loading';
import ColumHeader from '../../../containers/columheader';
import TopTenList from '../../../containers/toptenlist';

require('es6-promise').polyfill();


const {TabPane} = Tabs

class NewsListBlock extends Component{
    state = {
    	newsData:null
    }

    componentDidMount(){
    	const {count, type} = this.props;
    	const url=`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`;
        fetch(url).then(response=>response.json())
        .then(data=>{
    	    this.setState({newsData:data});
        })
        .catch(err=> console.log('parsing failed', err))
    }

    render(){
    	const { newsData } = this.state;
    	let newsList;
    	
    	if(newsData){
    	    newsList = newsData.map(item =>
    		    <li key={item.uniquekey}><img alt="新闻" src={item.thumbnail_pic_s} /><p className="intro">{item.title}</p></li>
    	    )
    	}
    	return(
    	   newsList?<ul className="newsList">{newsList}</ul>
    	   :<Loading />
        )
    }
}


export default class HotNews extends Component{     
	render(){
		const {title, target} = this.props;

		return( 
		    <div className="hotnews">
		        <ColumHeader title={title} target={target} />

			    <Row className="content" gutter={16}>
				        <Col span={8}>
				              <Carousel autoplay className='newscarousel'>
				                  <div><img  src={ newsBanner1 } alt='平壤居民罕见用韩国品牌相机拍照'/></div>
				                  <div><img  src={ newsBanner2 } alt='平壤居民罕见用韩国品牌相机拍照'/></div>
				                  <div><img  src={ newsBanner3 } alt='平壤居民罕见用韩国品牌相机拍照'/></div>
				                  <div><img  src={ newsBanner4 } alt='平壤居民罕见用韩国品牌相机拍照'/></div>
					          </Carousel>
				        </Col>

				        <Col span={10}>
					          <Tabs defaultActiveKey="1">
					            <TabPane tab="国内" key="1">
					              <NewsListBlock
					                type='guonei'
					                count={5}
					              />
					            </TabPane>
					            <TabPane tab="国际" key="2">
					              <NewsListBlock
					                type='guoji'
					                count={5}
					              />
					            </TabPane>
					            <TabPane tab="娱乐" key="3">
					              <NewsListBlock
					                type='yule'
					                count={5}
					              />
					            </TabPane>
					            <TabPane tab="体育" key="4">
					              <NewsListBlock
					                type='tiyu'
					                count={5}
					              />
					            </TabPane>
					            <TabPane tab="军事" key="5">
					              <NewsListBlock
					                type='junshi'
					                count={5}
					              />
					            </TabPane>
					            <TabPane tab="社会" key="6">
					              <NewsListBlock
					                type='shehui'
					                count={5}
					              />
					            </TabPane>
					          </Tabs>
				        </Col>

				        <Col span={6}>
				            <TopTenList 
				               title="热点头条" 
				               type='top'
					           count={10}
					        />
				        </Col>
				</Row>
		    </div>
		)
	}
}


