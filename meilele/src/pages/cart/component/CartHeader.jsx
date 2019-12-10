import React, { Component } from 'react'
import { PageHeader, Menu, Dropdown, Icon, Button, Typography} from 'antd';
import Img1 from "../../../assets/img/index.png"
import Img2 from "../../../assets/img/search.png"
import Img3 from "../../../assets/img/content.png"
import Img4 from "../../../assets/img/house.png"
import Img5 from "../../../assets/img/message.png"
import "../../../assets/css/cart/cartHeader.css"

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        <img src={Img1} className="cartImg" alt=""/>
        商城首页
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        <img src={Img2} className="cartImg" alt=""/>
        分类搜索
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        <img src={Img3} className="cartImg" alt=""/>
        个人中心
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        <img src={Img4} className="cartImg4" alt=""/>
        体验馆
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        <img src={Img5} className="cartImg" alt=""/>
        咨询客服
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button>
        <Icon
          type="ellipsis"
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  );
};
export default class CartHeader extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#fff"}}>
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          onBack={() => null}
          title="购物车"
          extra={[
            <DropdownMenu key="more" />
          ]}
        >
        </PageHeader>
        <div style={{width:"100%",textAlign:"center",height:"46px",borderBottom:"1px solid #d8d8d8"}}>
          <p style={{fontSize:"13px"}}>
            <Button className="login-btn">登录</Button>
            后，您可以同步电脑和手机购物车中的商品
          </p>
        </div>
      </div>
    )
  }
}
