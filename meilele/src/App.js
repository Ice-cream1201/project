import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import 'antd/dist/antd.css'
import Search from "./pages/search/Search"
import Cart from "./pages/cart/Cart"
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