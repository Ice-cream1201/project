import React, { Component } from 'react'
import ClassImg from "../../../assets/img/search1.png"
import "../../../assets/css/classification/classHeader.css"
export default class ClassHeader extends Component {
  render() {
    return (
      <div className="classHeader">
        <p className="classText">
          <img src={ClassImg} className="classImg" alt=""/>
          搜索商品</p>
      </div>
    )
  }
}
