// import *as constans from './constants';
import { fromJS } from 'immutable';  // 把 js 对象转换为 immutable对象
import *as constants from './constants';

const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }

}

// export default reducer