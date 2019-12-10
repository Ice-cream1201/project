import React, { Component } from 'react'

export default class MyInfo extends Component {
  render() {
    return (
      <div className='MyInfo'>
        <div className="top">
          <div className="setting"></div>
          <div className="msg"></div>
        </div>
        <div className="mid">
          <div className="headImg"></div>
          <div className="userInfo">
            <p>mll_114132</p>
            <p>注册会员</p>
          </div>
        </div>
        <div className="bottom">
          <div className="collect"></div>
          <div className="vouchers"></div>
          <div className="collect"></div>
        </div>
      </div>
    )
  }
}
