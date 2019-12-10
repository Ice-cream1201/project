import React, { Component } from 'react'
import MyHeader from './components/MyHeader'
import MyInfo from './components/MyInfo'
export default class index extends Component {
  render() {
    return (
      <div>
        <MyHeader />
        <MyInfo />
      </div>
    )
  }
}
