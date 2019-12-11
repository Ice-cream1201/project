import React, { Component } from 'react'
import { Button } from 'antd'
import RightImg from "../../../assets/img/ft-qrcode.png"
import LeftImg from "../../../assets/img/ft-logo-q.png"
import "../../../assets/css/cart/cartFooter.css"

export default class CartFooter extends Component {
  render() {
    return (
      <div className="footer-cart" style={{width:"100%",height:"1.2rem",background:"#414141"}}>
        <div className="cart-left">
          <div style={{display:"flex",alignItems:"center",marginBottom:".1rem"}}>
            <img src={LeftImg} className="leftImg" alt=""/>
            <Button ghost>电脑版</Button>
          </div>
          <p className="text1">深圳象限家居设计有限公司 版权所有</p>
          <p className="text1">粤公网安备44030602000294号</p>
        </div>
        <div className="cart-right">
            <img src={RightImg} className="rightImg" alt=""/>
            <p className="footer-text">有赞商城</p>
        </div>
      </div>  
    )
  }
}
