import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
z-index: 1;
position: relative;
height: 58px;
margin: 0 !important;
padding: 0 !important;
border-bottom：1px solid #f0f0f0;
background: #fff;
`;
export const Logo = styled.div`
positon: absolute;
top: 0;
left: 0;
display: block;
width: 100px;
height: 100%;
float: left;
margin-right: 60px;
background: url(${logoPic});
background-size: contain;
`;

export const Nav = styled.div`
z-index:1;
width: 945px;
height: 58px;
float: left;
margin: 0 auto;
padding: 0;
// background: green;
`;

export const NavItem = styled.div`
line-height: 56px;
padding: 0 15px;
font-size: 17px;
color: #333;
&.left {
    float: left;
}
&.right {
    float: right;
    color: #969696;
}
&.active {
    color: #ea6f5a;
    margin-left: 50px;
}
`;
export const SearchBox = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        // background: green;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
width: 160px;
height: 38px;
margin-top: 9px;
margin-left: 20px;
padding: 0 20px;
box-sizing: border-box;
border: none;
outline: none;
border-radius: 19px;
background: #eee;
font-size: 15px;
&::placeholder {
    color: #999;
}
&.focused {
    width: 240px;
}
&.slide-enter {
    transition: all .5s ease-out;
}
&.slide-enter-active {
    width: 240px;
}
&.slide-exit {
    transition: all .5s ease-in;
}
&.slide-exit-active {
    width: 160px;
}
`;
export const Addition = styled.div`
position: absolute;
right: 0;
top: 0;
float: right;
height: 56px;
`;

export const Button = styled.div`
float: right;
width: 80px;
text-align: center;
line-height: 38px;
border-radius: 19px;
margin-top: 9px;
border: 1px solid #ec6149;
margin-right: 15px;
padding: 0 5px;
box-zizing: border-box;
&.writting {
    color: #fff;
    background: #ec6149;
}
&.reg {
    color: #ec6149;
}
`;
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 220px;
    // height: 100px;
    padding: 0 20px;
    // background: green;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`;
export const SearchInfoTitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: #969696;
`;
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .8s ease-in;
        // transform: rotate(0);
        transfrom-origin: center,center;
    }
`;
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 15px;
`;
export const SearchInfoList = styled.div`
overflow: hidden;
`