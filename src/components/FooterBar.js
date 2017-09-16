import React,{Component} from 'react';
import {Link} from 'react-router';

class FooterBar extends Component{
    render(){
        return (
            <div className="foot-btn" >
                <ul>
                    <li className="home"><Link to="home"/></li>
                    <li className="write"><Link to="column"/></li>
                    <li className="my"><Link to="user"/></li>
                </ul>
            </div>
        )
    }
}

export default FooterBar;