import React, { Component } from 'react'
import { Button } from 'antd'
import "../../../assets/css/cart/cartJudge.css"
export default class CartJudge extends Component {
  render() {
    return (
      <div>
        <div style={{width:"100%",textAlign:"center",height:".46rem",borderBottom:".01rem solid #d8d8d8"}}>
          <p style={{fontSize:".13rem",lineHeight:".46rem"}}>
            <Button className="login-btn">登录</Button>
            后，您可以同步电脑和手机购物车中的商品
          </p>
        </div>
      </div>
    )
  }
}
