import React,{Component} from 'react';
import {Link} from 'react-router';
import '../assets/css/newsList.css';

class Column extends Component{
    render(){
        return (
            <div className="newsList">
                <ul>
                    <li>
                        <Link to="article">
                            <h2>xx</h2>
                            <p>oooo</p>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Column;