import React, { Component } from 'react'
import { Button } from 'antd'
import "../../../assets/css/cart/cartContent.css"
export default class CartContent extends Component {
  render() {
    return (
      <div style={{height:"3.37rem",
                    background:" #f5f5f5 url(http://image.meilele.com/wap/images/nodata/nodata_02.png) center .74rem no-repeat",
                    backgroundSize:"1rem"
                  }}>
          <p style={{textAlign:"center",paddingTop:"50%",fontSize:".14rem"}}>您还没有加入任何商品</p>
          <div style={{textAlign:"center"}}>
            <Button type="danger" style={{marginTop:".1rem"}}>随便逛逛</Button>
          </div>
          
      </div>
    )
  }
}
