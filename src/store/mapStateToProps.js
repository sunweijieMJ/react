// 用来向组件返回state对象, 返回的对象的键赋值到组件props属性上
let mapStateToProps = (state) => {
    return {
        navBar: state.navBar,
        footerBar: state.footerBar,
        loading: state.loading
    }
};

export default mapStateToProps;