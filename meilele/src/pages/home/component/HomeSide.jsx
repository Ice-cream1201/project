import React, { Component } from 'react'
import { BackTop } from 'antd';
import "../../../assets/css/home/homeSide.css"
export default class HomeSide extends Component {
  render() {
    return (
      <div>
        <div className="home-xinxi"></div>
        <BackTop>
          <div className="ant-back-top-inner"></div>
        </BackTop>
      </div>
    )
  }
}
