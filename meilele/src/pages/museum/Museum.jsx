import React, { Component } from 'react'
import MuseumHeader from "./component/MuseumHeader"
import MuseumContent from "./component/MuseumContent"
class Museum extends Component {
  render() {
    return (
      <div>
        <MuseumHeader/>
        <MuseumContent/>
      </div>
    )
  }
}
export default Museum 