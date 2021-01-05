// import *as constans from './constants';
import { fromJS } from 'immutable';  // 把 js 对象转换为 immutable对象
import *as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articalList: [],
    recommendList: [],
    articalPage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articalList: fromJS(action.articalList),
        recommendList: fromJS(action.recommendList)
    })
}

const addHomeData = (state, action) => {
    return state.merge({
        'articalList': state.get('articalList').concat(action.list),
        'articalPage': action.nextPage
    })
}

const toggleScrollShow = (state, action) => {
    return state.set('showScroll', action.show)
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case constants.ADD_HOME_DATA:
            return addHomeData(state, action)
        case constants.TOGGLE_SCROLL_SHOW:
            return toggleScrollShow(state, action)
        default:
            return state;
    }

}

// export default reducer