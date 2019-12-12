import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect,Link} from 'react-router-dom'
import 'antd/dist/antd.css'
import './assets/css/gobal.css'
import Search from "./pages/search"
import Cart from "./pages/cart"
import Classification from "./pages/classification"
import Login from './pages/login'
import My from './pages/my'
import Register from './pages/register'
import Home from './pages/home'

class App extends Component {
    render() {
        return (
          <Router>
            <Switch>
              <Route path="/home" exact component = {Home}/>
              <Route path="/search" exact component = {Search}/>
              <Route path="/cart" exact component = {Cart}/>
              <Route path="/class" exact component = {Classification}/>
              <Route path="/login" exact component = {Login}/>
              <Route path="/my" exact component = {My}/>
              <Route path="/register" exact component = {Register}/>
              <Redirect to = "/home" from = "/" exact/>
            </Switch>
          </Router>
        )
    }
}


export default App;