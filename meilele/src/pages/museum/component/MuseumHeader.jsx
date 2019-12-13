import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import DownImg from "../../../assets/img/down.png"
import LeftImg from "../../../assets/img/left.png"
import '../../../assets/css/museum/museumHeader.css'
class MuseumHeader extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<span><img src={LeftImg} className="LeftImg"/></span> }
          onLeftClick={() => window.history.back(-1)}
          rightContent={[
            <span key = "0">北京</span>,
            <span key = "1"><img src={DownImg} className="DownImg"/></span>
          ]}
        >体验馆列表</NavBar>
      </div>
    )
  }
}
export default MuseumHeader 