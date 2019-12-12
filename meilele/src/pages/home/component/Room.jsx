import React, { Component } from 'react'
import '../../../assets/css/home/room.css'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

// function callback(key) {
//     console.log(key)
// } onChange={callback}

export default class Room extends Component {
    render() {
        return (
            <div className="room">
                <div className="title">
                    全屋套系
                    <i>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAUVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbIinYlAAAAGnRSTlMA+ErGDweEAe7mv5EtHJTePyeYdnObmW9ANfUthnsAAADDSURBVCjPfZJbFoMgDEQTXgUKWp/V2f9Cq0WtWmV+OOEeYEiGVlWNd8zONxUd9fLY5F87oGvAFiJqVYnCArVeiZJgo7bKMORSaYky0E6hhEznOrhIB0WH7usAPNKsd/tY2ciYvUiYVFs8N2YgiQLs8qbgH1MWYeIF0T8rYMhD0AUT8OQQ6YJFOGJoOrA2fRY8IXWHHKqbCzM2MuYzX75vVGpvOLc3MIZ57VGeh1Kiz4wyE4BzbHQ8xWb2IrFJDmkvE9EPOb0Pc3wOM30AAAAASUVORK5CYII=" alt="" />
                    </i>
                </div>
                <Tabs defaultActiveKey="1" size={'small'}>
                    <TabPane tab="客厅" key="1">
                        <div className="bigPic">
                            <img src="http://img003.mll3321.com//images/upload/201908/c8611e94cde8058e1f869ed2b4b79b1f.jpg" alt=""/>
                        </div>
                        <ul>
                            <li>
                                <div className="smallPic">
                                    <img src="http://img004.mll3321.com//images/small/297/width/210/height/210/mode/1/encrypt/97cb995c458c03d76717e60ce344a6fb/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHONm1jfRzWkc_ZfDzqdQtpqBOeBoInQss01m1_QU+p72A==.jpg" alt=""/>
                                </div>
                                <p className="name">布艺沙发套装</p>
                                <p className="price">￥8499</p>
                            </li>
                            <li>
                                <div className="smallPic">
                                    <img src="http://image.meilele.com//images/small/401/width/210/height/210/mode/1/encrypt/101788d90c1bc6baea129148390bbd84/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHO044qmt3A3nToQl6LimbjcYo9hvMIKUi4OX89uHn5M6g==.jpg" alt=""/>
                                </div>
                                <p className="name">北欧简约电视柜</p>
                                <p className="price">￥2499</p>
                            </li>
                            <li>
                                <div className="smallPic">
                                    <img src="http://image.meilele.com//images/small/190/width/210/height/210/mode/1/encrypt/111101a133b21456b0f8bc2349e55e96/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHO0tC1xMdmSFQHeCE_ZjNOcKl_y_5DO4hll4TuQywEvIg==.jpg" alt=""/>
                                </div>
                                <p className="name">全实木茶几</p>
                                <p className="price">￥1799</p>
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane tab="卧室" key="2">
                        <div className="bigPic">
                            <img src="http://image.meilele.com//images/upload/201908/a3176c7dece9e9608aa04292f940f928.jpg" alt=""/>
                        </div>
                        <ul>
                            <li>
                                <div className="smallPic">
                                    <img src="http://img001.mll3321.com//images/small/121/width/210/height/210/mode/1/encrypt/db52f6255a14bd7ec0d1052c17e5843a/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHProosullpSNtGUyqRSdA_r05cDCqBXMBXm1hXdyq7faw==.jpg" alt=""/>
                                </div>
                                <p className="name">1.8米软包床</p>
                                <p className="price">￥2499</p>
                            </li>
                            <li>
                                <div className="smallPic">
                                    <img src="http://img002.mll3321.com//images/small/424/width/210/height/210/mode/1/encrypt/0bda337af37a33d624ccf5a183b76ba6/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNknX9IJBPd9UEig1IOwNpOz1epTn8r2t6rfe8WF3_KQg==.jpg" alt=""/>
                                </div>
                                <p className="name">双抽床头柜</p>
                                <p className="price">￥599</p>
                            </li>
                            <li>
                                <div className="smallPic">
                                    <img src="http://img001.mll3321.com//images/small/192/width/210/height/210/mode/1/encrypt/8e23d5e5c183b078791340137a044110/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHN262ZF+8SSR3VcxTGA5soWB1mPllpe_KM75roXYjq6og==.jpg" alt=""/>
                                </div>
                                <p className="name">平开四门衣柜</p>
                                <p className="price">￥5699</p>
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane tab="餐厅" key="3">
                        <div className="bigPic">
                            <img src="http://image.meilele.com//images/upload/201908/279d1013b54970936d3511255507d623.jpg" alt=""/>
                        </div>
                        <ul>
                            <li>
                                <div className="smallPic">
                                    <img src="http://img004.mll3321.com//images/small/295/width/210/height/210/mode/1/encrypt/04378fe9dabcaef98ad984528d6540c3/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOjy5YLG8BGRpV2dULIbdS4xk52i7gvD7mSw0i3MbaJGw==.jpg" alt=""/>
                                </div>
                                <p className="name">1.8米餐厅套装</p>
                                <p className="price">￥3587</p>
                            </li>
                            <li>
                                <div className="smallPic">
                                    <img src="http://img004.mll3321.com//images/small/165/width/210/height/210/mode/1/encrypt/6891c798d8a865b54f614ceb2d11bf41/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHO3xAZBzg1LZOg1mPVeuPu8SpXz2K+wxft30j4PMoRg2A==.jpg" alt=""/>
                                </div>
                                <p className="name">储物餐边柜</p>
                                <p className="price">￥2299</p>
                            </li>
                            <li>
                                <div className="smallPic">
                                    <img src="http://img002.mll3321.com//images/small/225/width/210/height/210/mode/1/encrypt/8e93e31095cd99454a673bfa07508e55/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPFtqvZ2Y7V1CoZH7j9QW3iJrUv9lSS2jDNIFqZf2o_dQ==.jpg" alt=""/>
                                </div>
                                <p className="name">全实木椅子</p>
                                <p className="price">￥550</p>
                            </li>
                        </ul>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
