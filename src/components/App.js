import React,{Component} from 'react';
import NavBar from './NavBar';
import FooterBar from './FooterBar';
import Loading from '../loading/loading';

import {connect} from 'react-redux'; // 将组件和顶层组件(Provider)建立联系的方法

class App extends Component{
    constructor(){
        super();
        this.state = {
            loading: false
        }
    }
    componentDidUpdate(){
        let {showNav,hideNav,showFooter,hideFooter} = this.props;
        let path = this.props.router.location.pathname;
        if(/home|follow|column/.test(path)){
            showNav();
            showFooter();
        } else if(/article|login|reg/.test(path)){
            hideNav();
            hideFooter();
        } else {
            hideNav();
            showFooter();
        }
    }
    render(){
        let {navBar,footerBar,loading} = this.props;
        return (
            <div>
                {loading ? <Loading/> : ''}
                {navBar ? <NavBar/> : ''}
                {this.props.children}
                {footerBar ? <FooterBar/> : ''}
            </div>
        )
    }
}

import mapStateToProps from '../store/mapStateToProps'; // 获取状态
import mapDispatchToProps from '../store/mapDispatchToProps'; // 修改状态

// 通过connect方法将mapStateToProps中的属性和mapDispatchToProps中的函数赋值到该组件的属性(props)上
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);