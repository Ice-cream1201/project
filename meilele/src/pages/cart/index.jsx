import React, { Component } from 'react'
import CartHeader from "./component/CartHeader"
import CartJudge from "./component/CartJudge"
import CartContent from "./component/CartContent"
// import CartContentLogin from "./component/CartContentLogin"
import CartFooter from "./component/CartFooter"

export default class Cart extends Component {
  render() {
    return (
      <div>
        <CartHeader/>
        <CartJudge/>
        <CartContent/>
        {/* <CartContentLogin/> */}
        <CartFooter/>
      </div>
    )
  }
}
