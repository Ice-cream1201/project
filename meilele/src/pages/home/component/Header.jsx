import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import SearchImg from "../../../assets/img/search1.png"
import '../../../assets/css/home/header.css'
import DownImg from "../../../assets/img/down.png"
class Header extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.history.push("/search")
    }
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src="data:image/png;base64,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" alt=""/>
                </div>
                <div className="inp">
                    <p className="home-search" onClick={this.handleClick}>
                        <img src={SearchImg} className="home-img" alt=""/>
                        搜索商品
                    </p>
                </div>
                <div className="place">
                    <p>
                        <span>北京</span>
                        <span><img src={DownImg} className="DownImg"/></span>
                    </p>
                    
                </div>

            </div>
        )
    }
}

export default withRouter(Header)
