import React, { Component,Fragment } from 'react'
import '../../assets/css/home/root.css'
import Header from './component/Header'
import Nav from './component/Nav'
import Banner from './component/Banner'
import List from './component/List'
import Limit from './component/Limit'
import NewStart from './component/NewStart'
import Room from './component/Room'
import PublicFooter from "../component/PublicFooter"

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Nav />
                <Banner />
                <List />
                <Limit />
                <NewStart />
                <Room />
                <PublicFooter/>
            </Fragment>
        )
    }
}
