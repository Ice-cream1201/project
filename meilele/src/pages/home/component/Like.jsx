import React, { Component } from 'react'
import '../../../assets/css/home/like.css'

export default class Like extends Component {
    render() {
        return (
            <div className="like">
                <div className="title">
                    猜你喜欢
                </div>
                <ul>
                    <li>
                        <div className="pic">
                            <img src="http://image.meilele.com/images/201807/1531459848890734158.jpg" alt=""/>
                        </div>
                        <p className="price">￥24698</p>
                        <p className="name">至尊之享 意大利进口全真皮沙发（1+2+3）</p>
                        <p className="num">已售2316</p>
                    </li>
                    <li>
                        <div className="pic">
                            <img src="http://image.meilele.com/images/201807/1531459848890734158.jpg" alt=""/>
                        </div>
                        <p className="price">￥24698</p>
                        <p className="name">至尊之享 意大利进口全真皮沙发（1+2+3）</p>
                        <p className="num">已售2316</p>
                    </li>
                    <li>
                        <div className="pic">
                            <img src="http://image.meilele.com/images/201807/1531459848890734158.jpg" alt=""/>
                        </div>
                        <p className="price">￥24698</p>
                        <p className="name">至尊之享 意大利进口全真皮沙发（1+2+3）</p>
                        <p className="num">已售2316</p>
                    </li>
                </ul>


            </div>
        )
    }
}
