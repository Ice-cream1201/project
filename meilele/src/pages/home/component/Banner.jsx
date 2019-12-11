import React, { Component } from 'react'
import '../../../assets/css/home/banner.css'
import Swiper from '../../../../node_modules/swiper/js/swiper.js'
import '../../../../node_modules/swiper/css/swiper.min.css'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide pic">
                            <img src="http://image.meilele.com/images/201909/1569521035968599049.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide pic">
                            <img src="http://image.meilele.com/images/201807/1531355777767220587.jpg" alt=""/>
                        </div>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>

            </div>
        )
    }
    componentDidMount(){
        new Swiper ('.swiper-container', {
            loop: true,  //循环
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false,
            },
            pagination: {  //分页器
                el: '.swiper-pagination'
            }
        })  
    }
}
