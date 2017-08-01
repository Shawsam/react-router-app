import React, { Component } from 'react';
import ColumHeader from '../../../containers/columheader'
import TopTenList from '../../../containers/toptenlist'
import MusicList from './musiclist'
import { musicTop } from '../../../common/mock'
import {Row, Col} from 'antd'

export default class HotMusic extends Component{
	render(){
		return( 
			<div className="hotmusic">
		        <ColumHeader title="流行音乐" target='/Music' />
		        <Row className="content">
		        	<Col span={16}>
                        <MusicList />
		        	</Col>
		        	<Col span={8}>
                        <TopTenList title="新歌榜" data={musicTop}  />
		        	</Col>
		        </Row>
			</div>
		)
	}
}