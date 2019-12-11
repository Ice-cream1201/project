import React, { Component } from 'react'

import FooterImg1 from "../../assets/img/home.png"
import FooterImg2 from "../../assets/img/class.png"
import FooterImg3 from "../../assets/img/cart.png"
import FooterImg4 from "../../assets/img/my.png"
import FooterImg5 from "../../assets/img/home1.png"
import FooterImg6 from "../../assets/img/class1.png"
import "../../assets/css/publicFooter.css"

export default class PublicFooter extends Component {

  render() {
    return (
      <div className="publicFooter">
        <ul className="footer-ul">
          <li>
              <img src={FooterImg1} className="footerImg" alt=""/>
              <p className="footer-text">首页</p>
          </li>
          <li>
              <img src={FooterImg6} className="footerImg" alt=""/>
              <p className="footer-text">分类</p>
          </li>
          <li>
              <img src={FooterImg3} className="footerImg" alt=""/>
              <p className="footer-text">购物车</p>
          </li>
          <li>
              <img src={ FooterImg4} className="footerImg" alt=""/>
              <p className="footer-text">我的</p>
          </li>
        </ul>
      </div>
    )
  }
}
