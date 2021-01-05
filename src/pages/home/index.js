import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
// import axios from 'axios';
import { connect } from 'react-redux';
import { actionCreators } from './store';


import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/5010/8e6ff43ffeeadc5deb237a4c1da797b486904373.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    // 把 scroll 事件从 全局 window 对象上移除，以免影响其他组件
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollShow)
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollShow) // 监听页面滚动事件
    }
}



const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({   // 让 mapdispatch 容器组件进行逻辑处理
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollShow() {
        // console.log(document.documentElement.scrollTop) 页面滚动距离
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home)