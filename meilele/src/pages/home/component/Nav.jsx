import React, { Component } from 'react'
import '../../../assets/css/home/nav.css'


export default class Nav extends Component {
    
    render() {
        return (
            <div className="nav">
                <ul>
                    <li>首页</li>
                    <li>新品</li>
                    <li>每日特卖</li>
                    <li>沙发</li>
                    <li>床</li>
                    <li>床垫</li>
                    <li>实木家具</li>
                    <li>地板</li>
                </ul>
            </div>
        )
    }
}
