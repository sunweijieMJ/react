import React,{Component} from 'react';
import {Link} from 'react-router';
import '../assets/css/newsList.css';
import {connect} from 'react-redux';

class NewsList extends Component{
    constructor(){
        super();
        this.state = {
            arr: []
        }
    }
    componentDidMount(){
        let {showLoading,hideLoading} = this.props;
        showLoading();
        let url = '/src/data/'+ this.props.dataName + '.data';
        fetch(url).then((res) => {
            res.json().then((data) => {
                setTimeout(() => {
                    hideLoading();
                    this.setState({
                        arr: data
                    });
                },2000);
            }).catch((err) => {
                console.log(err.status);
            })
        })
    }
    render(){
        return (
            <div className="newsList">
                <ul>
                    <li>
                        {
                            this.state.arr.map((item,index) => {
                                return (
                                    <Link key={index} to={'article/'+item.id}>
                                        <h2>{item.title}</h2>
                                        <p>{item.detail}</p>
                                    </Link>
                                )
                            })
                        }
                    </li>
                </ul>
            </div>
        )
    }
}

import mapStateToProps from '../store/mapStateToProps'; // 获取状态
import mapDispatchToProps from '../store/mapDispatchToProps'; // 修改状态

// 通过connect方法将获取状态(mapStateToProps)和修改状态(mapDispatchToProps)赋值到该组件的属性(props)上
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsList);
