import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png'


export default class Header extends Component{
	render(){
		return(
			<div className="header clearFloat">
			    <NavLink className="logo" to="/"><img src={logo} /></NavLink>
			    <div className="nav pullRight">
		         	<ul className="navList">
				        <li><NavLink exact activeClassName="active" to="/">首页</NavLink></li>
				        <li><NavLink exact activeClassName="active" to="/film">电影</NavLink></li>
				        <li><NavLink exact activeClassName="active" to="/hot">热点</NavLink></li>
				        <li><NavLink exact activeClassName="active" to="/music">音乐</NavLink></li>
				        <li><NavLink exact activeClassName="active" to="/book">书籍</NavLink></li>
				        <li><NavLink exact activeClassName="active" to="/login">登录</NavLink></li>
				    </ul>
				</div>
			</div>

		)
	}
}