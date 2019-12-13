import React, { Component } from 'react'
import '../../assets/css/home/root.css'
import Near from './component/Near'
import Header from './component/Header'
import Nav from './component/Nav'
import Banner from './component/Banner'
import List from './component/List'
import Limit from './component/Limit'
import NewStart from './component/NewStart'
import Room from './component/Room'
import Sstyle from './component/Sstyle'
import HotList from "./component/HotList"
import BigCard from './component/BigCard'
import Like from './component/Like'
import CartFooter from "../cart/component/CartFooter"
import PublicFooter from "../component/PublicFooter"
import HomeSide from "./component/HomeSide"

export default class Home extends Component {

   handleScroll(){
        window.addEventListener('scroll',()=>{
            const top = document.documentElement.scrollTop || document.body.scrollTop
            // console.log(top)
            const header = document.querySelector('.header')
            const nav = document.querySelector('.nav')
            if(!(header && nav)){ return }
            if(top>45){
                header.setAttribute('style', 'position: fixed;left: 0;top: 0;z-index: 9999;')
                nav.setAttribute('style', 'position: fixed;left: 0;top: .41rem;z-index: 9999;')                
            }else{
                header.removeAttribute('style', 'position: fixed;left: 0;top: 0;z-index: 9999;')
                nav.removeAttribute('style', 'position: fixed;left: 0;top: .41rem;z-index: 9999;')      
            }
        })
   }
    render() {
        return (
            <div className="home" style={{width:'100%'}}>
                <Near />
                <Header style={{
                    position:'fixed',
                    left:0,
                    top:0
                }}/>
                <Nav />
                <Banner />
                <List />
                <Limit />
                <NewStart />
                <Room />
                <Sstyle />
                <HotList />
                <BigCard />
                <Like />
                <div style={{marginBottom:".5rem"}}>
                    <CartFooter/>
                </div>
                <HomeSide/>
                <PublicFooter/>
            </div>
        )
    }
    componentDidMount(){
        this.handleScroll()
    }
    componentWillUnmount(){
        // window.removeEventListener('scroll')
    }
}
