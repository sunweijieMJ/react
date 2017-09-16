import React,{Component} from 'react';
import {Link} from 'react-router';
import '../assets/css/newsList.css';
// 引入发布订阅
import pubsub from 'pubsub-js';

class NewsList extends Component{
    constructor(){
        super();
        this.state = {
            arr: []
        }
    }
    componentDidMount(){
        pubsub.publish('bLoading',true);
        let url = '/src/data/'+ this.props.dataName + '.data';
        fetch(url).then((res) => {
            res.json().then((data) => {
                setTimeout(() => {
                    pubsub.publish('bLoading',false);
                    this.setState({
                        arr: data
                    })
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

export default NewsList;