import React,{Component} from 'react';
import {hashHistory} from 'react-router';
import date from '../common/date';
import '../assets/css/article.css';

class Article extends Component{
    constructor(){
        super();
        this.state = {
            arr: []
        }
    }
    componentDidMount(){
        let url = '/src/data/article.data';
        fetch(url).then((res) => {
            res.json().then((data) => {
                this.setState({
                    arr: data
                })
            })
        }).catch((err) => {
            console.log(err.status);
        })
    }
    render(){
        let arr = this.state.arr;
        // 传过来的参数是1开始的
        let now = this.props.params.aid - 1;
        let item = arr[now];
        return (
            <div className="article">
                <div className="nav">
                    <ul>
                        {/* 需要用bind绑定一下,否则会自调用 */}
                        <li className="l-btn" onClick={hashHistory.go.bind(this,-1)}></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="header clear"><h2><img width={50} src={item?item.author_face:''} alt=""/></h2><p>作者名字:{this.props.params.aid}</p></div>
                    <div className="cont">
                        <h3>{item?item.title:''}</h3>
                        <div className="time"><p>{item?date(+item.time):''}<span><img src="src/assets/img/zan.png" alt=""/></span></p></div>
                        <div className="text-box" dangerouslySetInnerHTML={{__html:item?item.content:''}}></div>
                    </div>
                </div>
                <div className="foot-btn">
                    <ul>
                        <li className="say"><a href="javascript:;">
                            <i></i><span>0</span>
                        </a></li>
                        <li className="zan"><a href="javascript:;">
                            <i></i><span>0</span>
                        </a></li>
                        <li className="xing"><a href="javascript:;">
                            <i><img src="src/assets/img/xing.png" alt=""/></i>
                        </a></li>
                        <li className="fx"><a href="javascript:;">
                            <i><img src="src/assets/img/fx.png" alt=""/></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Article;