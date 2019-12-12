import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import ClassImg from "../../../assets/img/search1.png"
import "../../../assets/css/classification/classHeader.css"
class ClassHeader extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.history.push("/search")
  }
  render() {
    return (
      <div className="classHeader">
        <p className="classText" onClick={this.handleClick}>
          <img src={ClassImg} className="classImg" alt=""/>
          搜索商品</p>
      </div>
    )
  }
}
export default withRouter(ClassHeader)
