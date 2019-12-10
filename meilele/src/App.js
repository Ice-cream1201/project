import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'antd/dist/antd.css'
import Search from "./pages/search/Search"
import Cart from "./pages/cart/Cart"
import Login from './pages/login'
import My from './pages/my'
import Register from './pages/register'
class App extends Component {
    render() {
        return (
          <Router>
            <Switch>
              <Route path="/search" exact component = {Search}/>
              <Route path="/cart" exact component = {Cart}/>
              <Route path="/login" exact component = {Login}/>
              <Route path="/my" exact component = {My}/>
              <Route path="/register" exact component = {Register}/>
              {/* <Redirect to = "/login" from = "/" exact/> */}
              {/* <Route path="/" component = {NotFound}/> */}
            </Switch>
          </Router>
        )
    }
}


export default App;