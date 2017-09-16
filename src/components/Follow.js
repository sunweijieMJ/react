import React,{Component} from 'react';
import NewsList from './NewsList';

class Follow extends Component{
    render(){
        return (
            <NewsList dataName="newsList_follow"></NewsList>
        )
    }
}

export default Follow;