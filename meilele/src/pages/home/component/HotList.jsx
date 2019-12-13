import React, { Component } from 'react'
import '../../../assets/css/home/hotList.css'

export default class HotList extends Component {
    render() {
        return (
            <div className="hotList">
                <div className="title">
                    热销榜
                </div>
                <div className="bigPic">
                    <img src="http://image.meilele.com//images/upload/201810/8242b85f0f76ee7a94340a195d31b374.jpg" alt=""/>
                </div>
                <div className="smallPic">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUBAMAAACQZWsAAAAAJ1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdEvm1AAAADXRSTlNAABAfNC8XDDw4JwgEDV7v7wAAAIZJREFUCNety8ENAVEAhOFfsmtx2tmVJVyeEjavAQU4EA04OiqBDiQOLg50wEEBOjMvlLCXyZfJDJLerWO+Le3m2Lf3BPvOQKrhTMqrtCM7oED20QRW3i+5SWMXJRUs0qRQyYyRpDUPe0phw8t+cpKvQ9mBjVSR/3yJbUMeYzL0aoC/q079BSgRE6KbVXldAAAAAElFTkSuQmCC" alt=""/>
                </div>
                <p className="txt">近30天家具热销Top35，专属你的购物指南，24小时更新...<span>[全文]</span></p>
            </div>
        )
    }
}
