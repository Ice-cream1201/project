import React, { Component } from 'react'
import '../../../assets/css/home/newStart.css'

export default class NewStart extends Component {
    render() {
        return (
            <div className="newStart">
                <div className="title">
                    新品首发
                    <i>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAUVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbIinYlAAAAGnRSTlMA+ErGDweEAe7mv5EtHJTePyeYdnObmW9ANfUthnsAAADDSURBVCjPfZJbFoMgDEQTXgUKWp/V2f9Cq0WtWmV+OOEeYEiGVlWNd8zONxUd9fLY5F87oGvAFiJqVYnCArVeiZJgo7bKMORSaYky0E6hhEznOrhIB0WH7usAPNKsd/tY2ciYvUiYVFs8N2YgiQLs8qbgH1MWYeIF0T8rYMhD0AUT8OQQ6YJFOGJoOrA2fRY8IXWHHKqbCzM2MuYzX75vVGpvOLc3MIZ57VGeh1Kiz4wyE4BzbHQ8xWb2IrFJDmkvE9EPOb0Pc3wOM30AAAAASUVORK5CYII=" alt=""/>
                    </i>
                </div>
                <div className="content">
                    <div className="fl big">
                        <p className="name">清新实木餐台套装</p>
                        <p className="price">￥4599</p>
                    </div>
                    <div className="fl small">
                        <p className="name">1.8米鹅掌楸实木床</p>
                        <p className="price">￥8599</p>
                    </div>
                    <div className="fl small smallDown">
                        <p className="name">皮布沙发套装</p>
                        <p className="price">￥24797</p>
                    </div>
                </div>

            </div>
        )
    }
}
