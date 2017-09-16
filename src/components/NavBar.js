import React,{Component} from 'react';
import {Link} from 'react-router';

class NavBar extends Component{
    render(){
        return (
            <div className="nav">
                <ul>
                    {/* 在react-router源码中Link会被解析会a标签 */}
                    {/*<Link to="home"><a href="javascript:;" >首页</a></Link>*/}
                    {/*<Link to="follow"><a href="javascript:;" >关注</a></Link>*/}
                    {/*<Link to="column"><a href="javascript:;" >栏目</a></Link>*/}

                    <li><Link activeClassName="active" to="home">首页</Link></li>
                    <li><Link activeClassName="active" to="follow">关注</Link></li>
                    <li><Link activeClassName="active" to="column">栏目</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;