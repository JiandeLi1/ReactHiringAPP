import { combineReducers } from 'redux'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_USER_LIST
} from './actions-type'

import { getRedirecTo } from '../utils'


const initUser = {
    avatar:'',
    username: '',
    type: '',
    msg: '',
    redirectTo:''
}
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...action.data, redirectTo:getRedirecTo(action.data.type, action.data.avatar)}
        case ERROR_MSG:
            return { ...state, msg: action.data }
        case RECEIVE_USER:
            return {...state, ...action.data}
        case RESET_USER:
            return {...initUser, msg: action.data}
        default:
            return state
    }
}

const initUserList = []
function userList(state=initUserList, action) {
    switch (action.type) {
        case RECEIVE_USER_LIST:
            return action.data
        default:
            return state
    }
}




export default combineReducers({ user, userList})