import React, { Component } from 'react'
import '../../../assets/css/home/like.css'
import {connect} from 'react-redux'
import {getLike} from '../store/limitReducer'

class Like extends Component {
    render() {
        const {state} = this.props
        return (
            <div className="like">
                <div className="title">
                    猜你喜欢
                </div>
                <ul>
                    
                    {
                        state.likeData.map((item,index)=>{
                            return  <li key={index}>
                                        <div className="pic">
                                            <img src={item.goods_thumb }alt=""/>
                                        </div>
                                        <p className="price">￥{item.shop_price}</p>
                                        <p className="name">{item.new_goods_name}</p>
                                        <p className="num">已售2316</p>
                                    </li>
                        })
                    }

                </ul>


            </div>
        )
    }
    componentDidMount(){
        this.props.getLike()
    }


}

const mapStateToProps = state =>{
    // console.log(state.limitReducer)
    return{
        state : state.limitReducer
    }
}
export default connect(mapStateToProps,{getLike})(Like)