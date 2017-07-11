import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Home from '../components/home/home'
import Film from '../components/film/film'
import Hot from '../components/hot/hot'
import Music from '../components/music/music'
import Book from '../components/book/book'
import Login from '../components/login/login'

export default class Wrapper extends Component{
	render(){
		return(
		    <div className="wrapper">
               <Route exact path="/" component={Home}/>
               <Route exact path="/film" component={Film}/>
               <Route exact path="/hot" component={Hot}/>
               <Route exact path="/music" component={Music}/>
               <Route exact path="/book" component={Book}/>
               <Route exact path="/login" component={Login}/>
		    </div>
		)
	}
}