import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import '../../../assets/css/home/list.css'

class List extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.history.push("/museum")
    }
    render() {
        return (
            <div className="list">
                <div className="item" onClick={this.handleClick}>
                    <i>
                        <img src="http://image.meilele.com/images/201907/1563130946587908766.jpg" alt=""/>
                    </i>
                    <p>体验馆</p>
                </div>
                <div className="item">
                    <i>
                        <img src="http://image.meilele.com/images/201907/1563130976630267490.jpg" alt=""/>
                    </i>
                    <p>排行榜</p>
                </div>
                <div className="item">
                    <i>
                        <img src="http://image.meilele.com/images/201907/1563131021896383462.jpg" alt=""/>
                    </i>
                    <p>每日特卖</p>
                </div>
                <div className="item">
                    <i>
                        <img src="http://image.meilele.com/images/201907/1563131064221658082.jpg" alt=""/>
                    </i>
                    <p>阅木</p>
                </div>
                <div className="item">
                    <i>
                        <img src="http://image.meilele.com/images/201907/1563131080096635544.jpg" alt=""/>
                    </i>
                    <p>实木家具</p>
                </div>
                <div className="item">
                    <i>
                        <img src="http://image.meilele.com/images/201907/1563131093521181710.jpg" alt=""/>
                    </i>
                    <p>沙发</p>
                </div>
                <div className="item">
                    <i>
                        <img src="http://image.meilele.com/images/201907/1563131115705453289.jpg" alt=""/>
                    </i>
                    <p>床</p>
                </div>
                <div className="item">
                    <i>
                        <img src="http://image.meilele.com/images/201907/1563131129464675923.jpg" alt=""/>
                    </i>
                    <p>床垫</p>
                </div>
            </div>
        )
    }
}
export default withRouter(List)