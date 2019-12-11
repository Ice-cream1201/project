import React, { Component } from 'react'
import { Menu } from 'antd';
import "../../../assets/css/classification/classContent.css"

const { SubMenu } = Menu;
export default class ClassContent extends Component {
  state = {
    mode: 'inline',
    theme: 'light',
  };
  render() {
    return (
      <div style={{display:"flex"}}>
        <div className="classLeft">
          <Menu
            defaultSelectedKeys={['1']}
            mode={this.state.mode}
            theme={this.state.theme}
          >
            <Menu.Item key="1">
                儿童房
            </Menu.Item>
          </Menu>
        </div>
        <div className="classRight">
          <div>
            <div style={{height:".39rem"}}><p className="class-text">热门专场</p></div>
            <div className="class-img">
              <img className="class-i" src="http://image.meilele.com/images/upload/201806/57a11cffe7188961bdf768df1c734c4b.png" alt=""/>
              <img className="class-i" src="http://image.meilele.com/images/upload/201806/e94bd59b089c6cee04cf72b447596a21.png" alt=""/>
              <img className="class-i" src="http://image.meilele.com/images/upload/201806/3ee22740f2c5778edb9d924ccacc2b9c.png" alt=""/>
            </div>
            <div style={{height:".39rem"}}><p className="class-text">热门搜索</p></div>
            <ul className="popular">
              <li className="popular-li">
                <img className="popular-i" src="http://image.meilele.com/images/upload/201806/e987495bac5b92e704b869bf0008005a.jpg" alt=""/>
                <span className="popular-text">儿童床</span>
              </li>
              <li className="popular-li">
                <img className="popular-i" src="http://image.meilele.com/images/upload/201806/23c3b1c8059fd67ac68da80bffd3d17f.jpg" alt=""/>
                <span className="popular-text">儿童床垫</span>
              </li>
              <li className="popular-li last">
                <img className="popular-i" src="http://image.meilele.com/images/upload/201806/c4a83ae298a600fc70b63cf740d94f8f.jpg" alt=""/>
                <span className="popular-text">儿童床头柜</span>
              </li>
              <li className="popular-li">
                <img className="popular-i" src="http://image.meilele.com/images/upload/201806/b50ab12a715322f4d8a215131aaf8cdd.jpg" alt=""/>
                <span className="popular-text">儿童衣柜</span>
              </li>
              <li className="popular-li">
                <img className="popular-i" src="http://image.meilele.com/images/upload/201806/95c91796a98e9910b9afba6697b9f7ec.jpg" alt=""/>
                <span className="popular-text">儿童桌</span>
              </li>
              <li className="popular-li last">
                <img className="popular-i" src="http://image.meilele.com/images/upload/201806/cea35f3666ff51b3c6e407fb6dc14fcb.jpg" alt=""/>
                <span className="popular-text">儿童椅</span>
              </li>
              <li className="popular-li">
                <img className="popular-i" src="http://image.meilele.com/images/upload/201806/e0813a5dc7e47d16ab2e69ff5ff9f81a.jpg" alt=""/>
                <span className="popular-text">儿童房套装</span>
              </li>
              <li className="popular-li">
                <img className="popular-i" src="http://image.meilele.com/images/upload/201806/819932d346876406060c55e3868faaab.jpg" alt=""/>
                <span className="popular-text">儿童柜类</span>
              </li>
            </ul>
            </div>
        </div>
      </div>
    )
  }
}
