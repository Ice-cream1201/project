import React, { Component } from 'react'
import { Checkbox } from 'antd';
import "../../../assets/css/cart/cartContentLogin.css"

const CheckboxGroup = Checkbox.Group;

const plainOptions = [];
const defaultCheckedList = [];
export default class CartContentLogin extends Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };
  render() {
    return (
      <div className="cartContentList">
        <div className="cart-list">
            <div className="cart-title">
              <div>
                <Checkbox
                  indeterminate={this.state.indeterminate}
                  onChange={this.onCheckAllChange}
                  checked={this.state.checkAll}
                >
                  美乐乐
                </Checkbox>
              </div>
              <CheckboxGroup
                options={plainOptions}
                value={this.state.checkedList}
                onChange={this.onChange}
              />
              <div className="check-footer">
                <Checkbox
                    indeterminate={this.state.indeterminate}
                    onChange={this.onCheckAllChange}
                    checked={this.state.checkAll}
                  >
                    全选
                  </Checkbox>
              </div>
            </div>
        </div>
      </div>
    )
  }
}