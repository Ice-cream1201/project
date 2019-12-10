import React, { Component } from 'react'
import { Button } from 'antd'
import "../../../assets/css/cart/cartContent.css"
export default class CartContent extends Component {
  render() {
    return (
      <div style={{height:"337px",
                    background:"url(http://image.meilele.com/wap/images/nodata/nodata_02.png) center 74px no-repeat",
                    backgroundSize:"100px"
                  }}>
          <p style={{textAlign:"center",paddingTop:"50%",fontSize:"14px"}}>您还没有加入任何商品</p>
          <div style={{textAlign:"center"}}>
            <Button type="danger">随便逛逛</Button>
          </div>
          
      </div>
    )
  }
}
