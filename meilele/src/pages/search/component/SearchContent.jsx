import React, { Component } from 'react'
import "../../../assets/css/search/searchContent.css"

export default class SearchContent extends Component {
  render() {
    return (
      <div>
        <p className="thermique">正在热搜中</p>
        <ul className="thermique-ul">
          <li>卧室柜</li>
          <li>蓝骑</li>
          <li>法式田园</li>
          <li>莱克星顿系列</li>
          <li>儿童</li>
          <li>优选</li>
          <li>哥本哈根系列</li>
          <li>北欧悠歌</li>
          <li>沙发</li>
          <li>鞋柜玄关柜</li>
          <li>简约欧式</li>
          <li>纳德威</li>
          <li>轻奢</li>
          <li>宜华</li>
          <li>逐慕</li>
        </ul>
      </div>
    )
  }
}

