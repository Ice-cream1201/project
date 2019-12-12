import React, { Component } from 'react'
import { Input } from 'antd'
import "../../../assets/css/search/searchHeader.css"

const { Search } = Input
export default class SearchHeader extends Component {
  constructor(props){
    super(props)
    this.searchClick = this.searchClick.bind(this)
  }
  searchClick(){
    window.history.back(-1)
  }
  render() {
    return (
      <div style={{width:"100%"}}>
        <Search placeholder="搜索商品" onSearch={value => console.log(value)} enterButton />
        <span className="annuler" onClick={this.searchClick}>取消</span>
      </div>
    )
  }
}
