import React,{Component} from 'react';
import NavBar from './NavBar';
import FooterBar from './FooterBar';
import Loading from '../loading/loading';
// 引入发布订阅
import pubsub from 'pubsub-js';

class App extends Component{
    constructor(){
        super();
        this.state = {
            loading: false
        }
        // 注意这里的生命周期顺序
        pubsub.subscribe('bLoading', (message, data) => {
            this.setState({
                loading: data
            });
        });
    }
    render(){
        let nav = true;
        let foot = true;
        let loading = this.state.loading;

        let path = this.props.router.location.pathname;
        if(/home|follow|column/.test(path)){
            nav = foot = true;
        } else if(/article|login|reg/.test(path)){
            nav = foot = false;
        } else {
            nav = false;
            foot = true;
        }

        return (
            <div>
                {loading ? <Loading/> : ''}
                {nav ? <NavBar/> : ''}
                {this.props.children}
                {foot ? <FooterBar/> : ''}
            </div>
        )
    }
}

export default App;