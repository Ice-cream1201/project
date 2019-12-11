import React, { Component } from 'react'
import '../../../assets/css/home/limit.css'

export default class Limit extends Component {
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
                            <img src="http://image.meilele.com/images/small/206/width/250/height/250/mode/1/encrypt/ba75c04938d90ad901909b2409977ad6/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMF3pBwfpIvL+9WiGEj6V7B4nyMMDZ1TlFzA9fU6EwHzA==.jpg" alt=""/>
                        </div>
                        <p className="time">仅剩215天04:00:33</p>
                        <p className="name">美式玻璃花瓶花器摆件仿真花套装</p>
                        <p className="price">
                            <span className="new">￥199</span>
                            <span className="old">588</span>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}
