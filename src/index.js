import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './Router.config';

// 状态管理react-reducer
import {createStore} from 'redux'; // 解构一个createStore,来创建状态对象
import {Provider} from 'react-redux'; // 解构出提供商(最顶层组件,存放store)
import reducer from './store/reducer'; // 修改状态
import state from './store/state'; // 默认状态

// store对象 将reducer(修改状态)和state(状态)联系起来
let store = createStore(reducer,state);

let app = document.getElementById('app');
// 将store对象存入Provider(最顶层组件)
// 因为react中数据是单向的,状态放在最顶层组件可以让所有组件都可以获取或状态
// Provider下面挂载路由组件,由路由组件再去决定显示什么组件
ReactDOM.render(<Provider store={store}>
    <RouterConfig/>
</Provider>,app,() => {
    console.log('渲染完毕')
});