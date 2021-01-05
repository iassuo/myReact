import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActioncreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchBox,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'

class Header extends Component {
    getListArea() {
        const { list, focused, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        // console.log(newList,'wowowo');
        const pageList = []; // 当前页要显示的列表内容
        if (newList.length) {
            for (let i = (page - 1) * 3; i < page * 3 && i < newList.length; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>热门搜索
                    <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</span>
                            换一批
                            </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleFocusChange, handleBlurChange, list, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <SearchBox>
                        <CSSTransition timeout={500} in={focused} classNames="slide">
                            <NavSearch
                                onFocus={() => handleFocusChange(list)}
                                onBlur={handleBlurChange}
                                className={focused ? 'focused' : ''} />
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom pencil' : 'iconfont pencil zoom'}>&#xe614;</span>
                        {this.getListArea()}
                    </SearchBox>
                    {
                        login ? <NavItem className="right" onClick={()=>this.props.logout()}>退出</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                </Nav>
                <Addition>
                    <Link to="/write"><Button className="writting"><span className="iconfont pencil">&#xe6b3;</span> 写文章</Button></Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => { // 把 store 里的数据映射到组件的 props 里去
    return {
        focused: state.getIn(['header', 'focused']),
        // focused: state.header.focused
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocusChange(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleBlurChange() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            // console.log(spin);获取spin 的 dom 节点   
            // transform 没有初始值， 让初始角度 originAngle（transform 不为0-9的数字时） 为 ‘’，然后 if else 判断初始角度为空则转为0，不为空则转为十进制的数字，最后设置 spin 的 transform 为上一次的角度 加 360度。
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10); // 转换为十进制的数字
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
            dispatch(loginActioncreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);