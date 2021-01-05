import *as constans from './constants';
import { fromJS } from 'immutable';  // 把 js 对象转换为 immutable对象
// immutable.js  // facebook
// immutable 对象

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constans.SEARCH_FOCUS:
            return state.set('focused', true);
        case constans.SEARCH_BLUR:
            return state.set('focused', false);
        case constans.CHANGE_LIST:
            return state.merge ({
                list: action.data,
                totalPage: action.totalPage
            })
            // return state.set('list', action.data).set('totalPage', action.totalPage)
        case constans.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constans.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constans.CHANGE_PAGE:
            return state.set('page', action.page);
    }

    // // const newState = JSON.parse(JSON.stringify(state));
    // if (action.type === constans.SEARCH_FOCUS) {
    //     // immutable 对象的 set 方法会结合之前 Immutable 对象的值和设置的值，返回一个全新的对象
    //     return state.set('focused', true);
    // }
    // if (action.type === constans.SEARCH_BLUR) {
    //     return state.set('focused', false);
    // }
    // if (action.type === constans.CHANGE_LIST) {
    //     return state.set('list', action.data)
    // }
    return state;
}

export default reducer