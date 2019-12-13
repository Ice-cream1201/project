import React, { Component } from 'react'
import { Card} from 'antd-mobile'
import { Button } from 'antd'
import CartFooter from "../../cart/component/CartFooter"
import BackPic from "../../../assets/img/backpic.jpg"
import RightImg from "../../../assets/img/right.png"
import AdsImg from "../../../assets/img/ads.png"
import NavImg from "../../../assets/img/nav.png"
import "../../../assets/css/museum/museumContent.css"

class MuseumContent extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={BackPic} alt=""/>
        </div>
        <div className="message-box">
          <div className="box1">
              <div className="box-title">
                  <h5 className="h5">北京十里河体验馆 
                    <span className="ads-text">
                      <img src={AdsImg} className="AdsImg" alt=""/>
                      7.6km
                    </span>
                  </h5>
                  <p className="ads">北京市朝阳区十里河佰汇广场一层底商002号美乐乐家居网</p>
                  <span className="right-box">
                    <img src={RightImg} className="RightImg" alt=""/>
                  </span>
              </div>
              <Card full>
                <Card.Header
                  title="联系他"
                  thumb="https://static.mll3321.com/wap/mpg/expr/i/guide-img-default.png"
                />
              </Card>
              <div style={{padding:"0 .18rem",marginBottom:".05rem"}}>
                <Button type="danger" ghost>
                  满5000减200
                </Button>
                <Button type="danger" ghost>
                  满3000减100
                </Button>
                <Button type="danger" ghost>
                  满1000减50
                </Button>
                <Button type="danger" className="danger-button" ghost>
                  到店有礼
                </Button>
              </div>
              <div style={{marginTop:".05rem",borderTop: ".005rem solid #EEE",padding:'0 .18rem'}}>
                <span className="nav-box" style={{borderRight:".005rem solid #eee"}}><img src={AdsImg} style={{width:".19rem",height:".22rem",marginRight:".05rem"}} alt=""/>获取地址</span>
                <span className="nav-box"><img src={NavImg} style={{width:".19rem",height:".19rem",marginRight:".05rem"}} alt=""/>地图导航</span>
              </div>
          </div>
          <div className="box2">
              <div className="box-title">
                  <h5 className="h5">北京丰台区体验馆 
                    <span className="ads-text">
                      <img src={AdsImg} className="AdsImg" alt=""/>
                      13.8km
                    </span>
                  </h5>
                  <p className="ads">北京市丰台区小屯西路万科中粮假日风景111号院底商1-118（中国石化加油站北20米）</p>
                  <span className="right-box">
                    <img src={RightImg} className="RightImg" alt=""/>
                  </span>
              </div>
              <Card full>
                <Card.Header
                  title="联系他"
                  thumb="https://img003.mll3321.com/images/small/362/width/90/height/90/mode/1/encrypt/f9dabfcab9c77a976115d7e9f19298a8/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPPVaPDMvZHUsoNJyenqDcn1mXk_t_qy_RV6sF20lMnoDhVW8UkAYOkGqRhyNSaIoEpM1vCDt2TvjA+rzgvKY4k.jpg"
                />
              </Card>
              <div style={{padding:"0 .18rem",marginBottom:".05rem"}}>
                <Button type="danger" ghost>
                  满5000减200
                </Button>
                <Button type="danger" ghost>
                  满3000减100
                </Button>
                <Button type="danger" ghost>
                  满1000减50
                </Button>
                <Button type="danger" className="danger-button" ghost>
                  到店有礼
                </Button>
              </div>
              <div style={{marginTop:".05rem",borderTop: ".005rem solid #EEE",padding:'0 .18rem'}}>
                <span className="nav-box" style={{borderRight:".005rem solid #eee"}}><img src={AdsImg} style={{width:".19rem",height:".22rem",marginRight:".05rem"}} alt=""/>获取地址</span>
                <span className="nav-box"><img src={NavImg} style={{width:".19rem",height:".19rem",marginRight:".05rem"}} alt=""/>地图导航</span>
              </div>
          </div>
          <div className="box2">
              <div className="box-title">
                  <h5 className="h5">北京北三环体验馆 
                    <span className="ads-text">
                      <img src={AdsImg} className="AdsImg" alt=""/>
                      13.8km
                    </span>
                  </h5>
                  <p className="ads">北京市海淀区北三环中路乙40号3幢3层3001号（国美电器北太平庄店 3楼）</p>
                  <span className="right-box">
                    <img src={RightImg} className="RightImg" alt=""/>
                  </span>
              </div>
              <Card full>
                <Card.Header
                  title="联系他"
                  thumb="https://img001.mll3321.com/images/small/422/width/90/height/90/mode/1/encrypt/76cc99269f2c94c1dea74b49b35ac98b/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOvIAOL1mn9S3Lmjpoe0kV87aXWVNj16DIbFMKbwAvKpYxSzagNbgjC9wWjq0UQyyCwM5JdQfJUMqetXJ5LWrhg.jpg"
                />
              </Card>
              <div style={{padding:"0 .18rem",marginBottom:".05rem"}}>
                <Button type="danger" ghost>
                  满5000减200
                </Button>
                <Button type="danger" ghost>
                  满3000减100
                </Button>
                <Button type="danger" ghost>
                  满1000减50
                </Button>
                <Button type="danger" className="danger-button" ghost>
                  到店有礼
                </Button>
              </div>
              <div style={{marginTop:".05rem",borderTop: ".005rem solid #EEE",padding:'0 .18rem'}}>
                <span className="nav-box" style={{borderRight:".005rem solid #eee"}}><img src={AdsImg} style={{width:".19rem",height:".22rem",marginRight:".05rem"}} alt=""/>获取地址</span>
                <span className="nav-box"><img src={NavImg} style={{width:".19rem",height:".19rem",marginRight:".05rem"}} alt=""/>地图导航</span>
              </div>
          </div>
        </div>
        <div style={{marginTop:"-.3rem"}}>
          <img src="https://static.mll3321.com/wap/mpg/expr/i/expr-info.png" alt=""/>
          <img src="https://static.mll3321.com/wap/mpg/expr/i/expr-service.png" style={{background:"#fff"}} alt=""/>
        </div>
        <CartFooter/>
      </div>
    )
  }
}
export default MuseumContent 