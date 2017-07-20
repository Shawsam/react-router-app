import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Home from '../components/home/home'
import Film from '../components/film/film'
import Hot from '../components/hot/hot'
import Music from '../components/music/music'
import Book from '../components/book/book'
import Login from '../components/login/login'
import NotFound from '../components/notfound/notfound'

import FilmDetails from '../components/filmdetails/filmdetails'

export default class RouterConfig extends Component{
    render(){
        return(
          <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/film" component={Film}/>
                <Route exact path="/filmdetails/:id" component={FilmDetails}/>
                <Route exact path="/hot" component={Hot}/>
                <Route exact path="/music" component={Music}/>
                <Route exact path="/book" component={Book}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/404" component={NotFound}/>
                <Redirect from='*' to='/404'/>
              </Switch>
          </Router>
        )
    }
}

