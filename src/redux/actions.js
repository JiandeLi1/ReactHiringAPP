import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_USER_LIST
} from './actions-type'

import { 
    reqRegister,
    reqLogin,
    reqUpdateUser,
    reqUser,
    reqUserList
} from '../api'


export const authSuccess = (user) => (
    { type:AUTH_SUCCESS, data:user}
)

export const errorMsg = (msg) => (
    { type:ERROR_MSG, data:msg}
)

export const receiveUser = (user) => ({ type: RECEIVE_USER, data: user })

export const resetUser = (msg) => ({type:RESET_USER, data:msg})

export const receiveUserList = (userList) => ({type:RECEIVE_USER_LIST, data:userList})

export const register = (user) => {
    const { username, password, password2, type } = user
    if (!username || !type) { 
        return errorMsg("Need a username ot Type.")
    }
    if (password !== password2) { 
        return errorMsg("Password and Comfire password not match!");
    }
    return async dispatch => { 
        const response = await reqRegister(user);
        console.log('gg')
        const result = response.data
        if (result.code === 0) {
            dispatch(authSuccess(result.data))
        } else { 
            dispatch(errorMsg(result.msg))
        }
    }
}


export const login = (user) => { 
    const { username, password } = user
    if (!username) { 
        return errorMsg("Need a username.")
    }
    if (!password) { 
        return errorMsg("Need a password!");
    }
    return async dispatch => { 
        const response = await reqLogin(user);
        const result = response.data
        if (result.code === 0) {
            dispatch(authSuccess(result.data))
        } else { 
            dispatch(errorMsg(result.msg))
        }
    }
}

export const updateUser = (user) => {
    return async dispatch => {
        const response = await reqUpdateUser(user);
        const result = response.data
        if (result.code === 0) {
            dispatch(receiveUser(result.data))
        } else {
            dispatch(resetUser(result.msg))
        }
    }
}





export const getUser = () => {
    return async dispatch => {
        const response = await reqUser()
        const result = response.data
        if (result.code === 0) {
            dispatch(receiveUser(result.data))
        } else {
            dispatch(resetUser(result.msg))
        }
    }
}


export const getUserList = (type) => {
    return async dispatch => {
        const response = await reqUserList(type)
        const result = response.data
        if (result.code === 0) {
            dispatch(receiveUserList(result.data))
        }
    }
}