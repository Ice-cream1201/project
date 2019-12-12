import React, { Component } from 'react'
import '../../../assets/css/home/bigCard.css'

export default class BigCard extends Component {
    render() {
        return (
            <div className="bigCard">
                <div className="title">
                    大牌云集
                </div>
                <ul>
                    <li>
                        <img src="http://img004.mll3321.com//images/upload/201809/00240c3e0ade28c34bbb8bed2246482f.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="http://img004.mll3321.com//images/upload/201809/a24ad278ecf9c92070522241e4e50ec8.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="http://img004.mll3321.com//images/upload/201809/165e20575fc44f4dbca61f3395067ec8.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="http://img001.mll3321.com//images/upload/201809/32a9419f921fb95fbfe09b70bbcf91fe.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="http://image.meilele.com//images/upload/201809/fa426d3e760ee44b91d91a2ceb94fe50.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="http://img002.mll3321.com//images/upload/201809/8c8743022af7a29d9a570ad2251d79be.jpg" alt=""/>
                    </li>
                </ul>
            </div>
        )
    }
}
