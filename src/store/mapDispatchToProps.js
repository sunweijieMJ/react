// 将types.js里的内容存为types对象
import * as types from './types';

// 用来向store服务提交action, 将action动作(函数)赋值到组件props属性上
// 这里可以异步修改状态
let mapDispatchToProps = (dispatch) => {
    return {
        showNav: () => {
            dispatch({
                type: types.SHOW_NAV
            });
        },
        hideNav: () => {
            dispatch({
                type: types.HIDE_NAV
            });
        },
        showFooter: () => {
            dispatch({
                type: types.SHOW_FOOTER
            });
        },
        hideFooter: () => {
            dispatch({
                type: types.HIDE_FOOTER
            });
        },
        showLoading: () => {
            dispatch({
                type: types.SHOW_LOADING
            });
        },
        hideLoading: () => {
            dispatch({
                type: types.HIDE_LOADING
            });
        }
    }
};

export default mapDispatchToProps;