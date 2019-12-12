import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import 'antd/dist/antd.css'
import './assets/css/gobal.css'
import Search from "./pages/search"
import Cart from "./pages/cart"
import Home from './pages/home'

class App extends Component {
    render() {
        return (
          <Router>
            <Switch>
              <Route path="/home" exact component = {Home}/>
              <Route path="/search" exact component = {Search}/>
              <Route path="/cart" exact component = {Cart}/>
              <Redirect to = "/home" from = "/" exact/>
              {/* <Route path="/" component = {NotFound}/> */}
            </Switch>
          </Router>
        )
    }
}


export default App;