// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';  // 使得 headerReducer 里的内容(也就是 state)是一个 immutable 对象
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store';
import {reducer as loginReducer} from '../pages/login/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer, 
    login: loginReducer, 
});

export default reducer;