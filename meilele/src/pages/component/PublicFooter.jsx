import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import FooterImg1 from "../../assets/img/home.png"
import FooterImg2 from "../../assets/img/class.png"
import FooterImg3 from "../../assets/img/cart.png"
import FooterImg4 from "../../assets/img/my.png"
import FooterImg5 from "../../assets/img/home1.png"
import FooterImg6 from "../../assets/img/class1.png"
import FooterImg7 from "../../assets/img/my1.png"
import "../../assets/css/publicFooter.css"

class PublicFooter extends Component {
  constructor(props){
    super(props)
    this.pageGo = this.pageGo.bind(this)
    this.state={
      pageInfo:[
        {pageUrl:"home",text:"首页",isActive:false,icon:FooterImg1,icon_select:FooterImg5},
        {pageUrl:"class",text:"分类",isActive:false,icon:FooterImg2,icon_select:FooterImg6},
        {pageUrl:"cart",text:"购物车",isActive:false,icon:FooterImg3,icon_select:FooterImg3},
        {pageUrl:"my",text:"我的",isActive:false,icon:FooterImg4,icon_select:FooterImg7}
      ]
    }
  }
  
  componentDidMount(){
    let currentPage = window.location.pathname.replace("/","")
    let data = this.state.pageInfo
    data.forEach((item,index)=>{
      item.isActive = false
      if(item.pageUrl === currentPage){
        data[index].isActive = true
        this.setState({
          pageInfo:data
        })
      }
    })
  }
  render() {
      let data = this.state.pageInfo
      let ClassName = ""
      let imgPage = ""
      return (
        <div className="publicFooter">
          <ul className="footer-ul">
            {
              data.map((item,index)=>{
                if(item.isActive){
                  ClassName = "selected"
                  imgPage = item.icon_select
                }else{
                  ClassName = ""
                  imgPage = item.icon
                }
                return(
                  <li className={ClassName} key={index} data-to={item.pageUrl} onClick={this.pageGo}>
                    <img className="footerImg" src={imgPage} alt=""/>
                    <p className="footer-text">{item.text}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
    )
  }
  pageGo(event){
    let page = event.currentTarget.getAttribute("data-to")
    this.props.history.push("/" + page)
  }
}

export default withRouter(PublicFooter)
