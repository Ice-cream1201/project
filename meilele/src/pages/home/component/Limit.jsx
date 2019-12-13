import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getLimit} from '../store/limitReducer'
// import {getLimitData} from '../../../axios/api'
import '../../../assets/css/home/limit.css'

class Limit extends Component {
    render() {
        const {state} = this.props
        return (
            <div className="limit">
                <div className="title">
                    限时抢购
                    <i>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAUVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbIinYlAAAAGnRSTlMA+ErGDweEAe7mv5EtHJTePyeYdnObmW9ANfUthnsAAADDSURBVCjPfZJbFoMgDEQTXgUKWp/V2f9Cq0WtWmV+OOEeYEiGVlWNd8zONxUd9fLY5F87oGvAFiJqVYnCArVeiZJgo7bKMORSaYky0E6hhEznOrhIB0WH7usAPNKsd/tY2ciYvUiYVFs8N2YgiQLs8qbgH1MWYeIF0T8rYMhD0AUT8OQQ6YJFOGJoOrA2fRY8IXWHHKqbCzM2MuYzX75vVGpvOLc3MIZ57VGeh1Kiz4wyE4BzbHQ8xWb2IrFJDmkvE9EPOb0Pc3wOM30AAAAASUVORK5CYII=" alt=""/>
                    </i>
                </div>
                <ul>
                    { 
                        state.limitData.map((item,index)=>{
                            return  <li key={index}>
                                        <div className="pic">
                                            <span className="limit-span">抢购中</span>
                                            <img src={item.img_url} alt=""/>
                                        </div>
                                        <p className="time">仅剩18天03:29:49</p>
                                        <p className="name">{item.title}</p>
                                        <p className="price">
                                            <span className="new">￥{item.good_price}</span>
                                            <span className="old">{item.ori_price}</span>
                                        </p>
                                    </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.getLimit()
    }
}

const mapStateToProps = state =>{
    return{
        state : state.limitReducer
    }
}

export default connect(mapStateToProps,{getLimit})(Limit)