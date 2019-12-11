import React, { Component } from 'react'
import ClassHeader from "./components/ClassHeader"
import ClassContent from "./components/ClassContent"
export default class Classification extends Component {
  render() {
    return (
      <div>
        <ClassHeader/>
        <ClassContent/>
      </div>
    )
  }
}
