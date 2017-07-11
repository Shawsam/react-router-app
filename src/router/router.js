import { Router, Route, Link, IndexLink, IndexRoute, browserHistory , Redirect  } from 'react-router'

const RouterConfig = (
  <Router history={ hashHistory }>
    <Route path="/" component={ AppContainer }>
      <IndexRoute  component={ HomeContainer }/>
      <Route path="index"  component={ HomeContainer }/>
      <Route path="movie" getComponent={MovieContainer} />
      <Route path="movie/:id" getComponent={ MovieDetailContainer }/>
      <Route path="book" getComponent={ BookContainer }/>
      <Route path="book/:id" getComponent={ BookDetailContainer }/>
      <Route path="spot" getComponent={ SpotContainer }/>
      <Route path="spot/:id" getComponent={ SpotDetailContainer }/>
      <Route path="music" getComponent={ MusicContainer  }
             onLeave={ ()=>console.log('离开了music页面')  }
             onEnter={ ()=>console.log('进入了music页面') }/>
      <Route path="music/:id" getComponent={ MusicDetailContainer }/>
    </Route>
    <Route path="404" getComponent={ NotFoundPage }/>
    <Redirect from='*' to='404'/>
  </Router>
)

export default RouterConfig