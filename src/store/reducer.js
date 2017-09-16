// 将types.js里的内容存为types对象
import * as types from './types';
// reducer对象(纯函数),用来处理请求
let reducer = (state,action) => {
    // 从action中解构出type和payload
    let {type,payload} = action;
    // 对type类型做出分类处理
    switch(type){
        case types.SHOW_NAV:
            // 返回新的state,不要去修改state,用Object.assign方法
            return Object.assign({},state,{
                navBar: state.navBar = true
            });
            break;
        case types.HIDE_NAV:
            return Object.assign({},state,{
                navBar: state.navBar = false
            });
            break;
        case types.SHOW_FOOTER:
            return Object.assign({},state,{
                footerBar: state.footerBar = true
            });
            break;
        case types.HIDE_FOOTER:
            return Object.assign({},state,{
                footerBar: state.footerBar = false
            });
            break;
        case types.SHOW_LOADING:
            return Object.assign({},state,{
                loading: state.loading = true
            });
            break;
        case types.HIDE_LOADING:
            return Object.assign({},state,{
                loading: state.loading = false
            });
            break;
        // 没有任何动作,直接返回原来的state
        default:
            return state;
            break;
    }
};

export default reducer;