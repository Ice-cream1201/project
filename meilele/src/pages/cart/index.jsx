import React, { Component } from 'react'
import CartHeader from "./component/CartHeader"
import CartContent from "./component/CartContent"
import CartFooter from "./component/CartFooter"

export default class Cart extends Component {
  render() {
    return (
      <div>
        <CartHeader/>
        <CartContent/>
        <CartFooter/>
      </div>
    )
  }
}
