import React,{Component} from 'react';
import {hashHistory} from 'react-router';
import Slide from './Slide';
import NewsList from './NewsList';

class Home extends Component{
    componentDidMount(){
        // 默认跳转到home页面,激活路由样式
        hashHistory.replace({pathname:'home'});
    }
    render(){
        return (
            <div>
                <Slide></Slide>
                <NewsList dataName="newsList_home"></NewsList>
            </div>
        )
    }
}

export default Home;