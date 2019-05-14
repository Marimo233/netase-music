import React, { Component } from 'react'
import  { Switch,Route,Redirect} from 'react-router-dom'

import Find from './pages/Find'
import MusicHall from './pages/MusicHall'
import Mine from './pages/Mine'
import Recommand from './pages/Recommand'
import TabBar from './components/TabBar'
import Header from './components/Header'
import Main from './pages'

export default class App extends Component {
  render() {
    return (
      <div style={{display:"flex",height:500}}>
      <Header></Header>
        <Main>
        <Switch>
            <Route 
              exact
              path='/'
              render={()=><Redirect to='/MusicHall'/>}
            />
            <Route path='/MusicHall' component={MusicHall} />
            <Route path='/Find' component={Find} />
            <Route path='/Mine' component={Mine} />
            <Route path='/Recommand' component={Recommand} />
          </Switch>
        </Main>
        <TabBar></TabBar>
      </div>
    )
  }
}
