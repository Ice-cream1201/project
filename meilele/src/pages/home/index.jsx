import React, { Component,Fragment } from 'react'
import '../../assets/css/home/root.css'
import Header from './component/Header'
import Nav from './component/Nav'
import Banner from './component/Banner'
import List from './component/List'
import Limit from './component/Limit'
import NewStart from './component/NewStart'
import Room from './component/Room'
import Sstyle from './component/Sstyle'
import BigCard from './component/BigCard'
import Like from './component/Like'
import CartFooter from "../cart/component/CartFooter"
import PublicFooter from "../component/PublicFooter"
import HomeSide from "./component/HomeSide"

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
                <Sstyle />
                <BigCard />
                <Like />
                <div style={{marginBottom:".5rem"}}>
                    <CartFooter/>
                </div>
                <HomeSide/>
                <PublicFooter/>
            </Fragment>
        )
    }
}
