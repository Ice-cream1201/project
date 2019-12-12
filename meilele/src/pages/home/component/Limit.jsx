import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getLimit} from '../store/limitReducer'
// import {getLimitData} from '../../../axios/api'
import '../../../assets/css/home/limit.css'

class Limit extends Component {
    render() {
        return (
            <div className="limit">
                <div className="title">
                    限时抢购
                    <i>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAUVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbIinYlAAAAGnRSTlMA+ErGDweEAe7mv5EtHJTePyeYdnObmW9ANfUthnsAAADDSURBVCjPfZJbFoMgDEQTXgUKWp/V2f9Cq0WtWmV+OOEeYEiGVlWNd8zONxUd9fLY5F87oGvAFiJqVYnCArVeiZJgo7bKMORSaYky0E6hhEznOrhIB0WH7usAPNKsd/tY2ciYvUiYVFs8N2YgiQLs8qbgH1MWYeIF0T8rYMhD0AUT8OQQ6YJFOGJoOrA2fRY8IXWHHKqbCzM2MuYzX75vVGpvOLc3MIZ57VGeh1Kiz4wyE4BzbHQ8xWb2IrFJDmkvE9EPOb0Pc3wOM30AAAAASUVORK5CYII=" alt=""/>
                    </i>
                </div>
                <ul>
                    <li>
                        <div className="pic">
                            <span className="limit-span">抢购中</span>
                            <img src="http://image.meilele.com/images/small/206/width/250/height/250/mode/1/encrypt/ba75c04938d90ad901909b2409977ad6/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMF3pBwfpIvL+9WiGEj6V7B4nyMMDZ1TlFzA9fU6EwHzA==.jpg" alt=""/>
                        </div>
                        <p className="time">仅剩215天04:00:33</p>
                        <p className="name">美式玻璃花瓶花器摆件仿真花套装</p>
                        <p className="price">
                            <span className="new">￥199</span>
                            <span className="old">588</span>
                        </p>
                    </li>
                    <li>
                        <div className="pic">
                            <span className="limit-span">抢购中</span>
                            <img src="http://image.meilele.com/images/small/420/width/250/height/250/mode/1/encrypt/5293ef1bbfaa79a6b292a5d8e85072d3/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHM8Y+B7q4JOkP6l+RX3_PQAQXJu9UKnj0pMWsnTEgzmPWuYPtWdPRXSYqS66tv6vRIeiyJiCoY68+f2t4EJk3fj.jpg" alt=""/>
                        </div>
                        <p className="time">仅剩215天04:00:33</p>
                        <p className="name">双层圆形水果篮洗菜篮淘米盆沥水篮 厨房洗米筛水果蔬菜盘果盘</p>
                        <p className="price">
                            <span className="new">￥22</span>
                            <span className="old">34</span>
                        </p>
                    </li>
                    <li>
                        <div className="pic">
                            <span className="limit-span">抢购中</span>
                            <img src="http://image.meilele.com/images/small/181/width/250/height/250/mode/1/encrypt/5aff9e4c8e305f3cb26429483d6d5cde/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNuozmJoAiDzmZWL7znE1n_rceX_OkGKZg7zQLL5cvzqQ==.jpg" alt=""/>
                        </div>
                        <p className="time">仅剩215天04:00:33</p>
                        <p className="name">欧洲波列罗Leifheit 保温壶1L 真空内胆材质 长效保温壶（紫色</p>
                        <p className="price">
                            <span className="new">￥159</span>
                            <span className="old">199</span>
                        </p>
                    </li>
                    <li>
                        <div className="pic">
                            <span className="limit-span">抢购中</span>
                            <img src="http://image.meilele.com/images/small/885/width/250/height/250/mode/1/encrypt/33f1987e013660bd0b153bca4927b541/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNcHCejalazvzphavG+Os6XgXuxh7GPU+ETFP1N8vafHqRTlyt5Xl9yhMPj9v_2IiIlFpA_jNEyyojrOV06wdIt.jpg" alt=""/>
                        </div>
                        <p className="time">仅剩215天04:00:33</p>
                        <p className="name">u型枕 颈部 飞机旅行便携 脖子护颈椎 带帽枕头泡沫颗粒 车载U型枕</p>
                        <p className="price">
                            <span className="new">￥68</span>
                            <span className="old">158</span>
                        </p>
                    </li>
                    <li>
                        <div className="pic">
                            <span className="limit-span">抢购中</span>
                            <img src="http://image.meilele.com/images/small/310/width/250/height/250/mode/1/encrypt/107a311f6dd92ad47632eee0a33a755b/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNaeClUio0lcAVOmPn6FMvDjlAvNPq6gnqHMythl5tviJ0xEUknra7ifVQP4seyL7UEgNRExKhZYrySfG1oiyGf.jpg" alt=""/>
                        </div>
                        <p className="time">仅剩215天04:00:33</p>
                        <p className="name">双层密封果盒客厅带卡扣大号干果盘零食糖果盘干果盒分格有盖</p>
                        <p className="price">
                            <span className="new">￥44.8</span>
                            <span className="old">56</span>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
    componentDidMount(){
        // getLimitData().then(res=>{
        //     console.log(res)
        // })
        this.props.getLimit()
    }
}

const mapStateToProps = state =>{
    return{
        
    }
}

export default connect(mapStateToProps,{getLimit})(Limit)