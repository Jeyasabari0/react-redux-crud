import { toast } from "react-toastify"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType"
import axios from 'axios'
import Update from "../components/Update"
export const makeRequest = () => { return { type: MAKE_REQUEST } }
export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}
export const getUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
}
export const deleteUser = () => { return { type: DELETE_USER } }
export const addUser = () => { return { type: ADD_USER } }
export const updateUser = () => { return { type: UPDATE_USER } }

export const getUserObj = (data) => {
    return {
        type: GET_USER_OBJ,
        payload: data
    }
}
export const FetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest())
        // setTimeout(() => {
        axios.get('http://localhost:8000/user').then(res => {
            const userlist = res.data
            dispatch(getUserList(userlist))
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        // }, 2000)

    }
}
export const RemoveUser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest())
        // setTimeout(() => {
        axios.delete('http://localhost:8000/user/' + code).then(res => {
            dispatch(deleteUser())
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        // }, 2000)

    }
}
export const functionAddUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest())
        // setTimeout(() => {
        axios.post('http://localhost:8000/user', data).then(res => {
            dispatch(addUser())
            toast.success('User Added Successfully.')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        // }, 2000)

    }
}
export const functionUpdateUser = (data, code) => {
    return (dispatch) => {
        dispatch(makeRequest())
        // setTimeout(() => {
        axios.put('http://localhost:8000/user/' + code, data).then(res => {
            dispatch(updateUser())
            toast.success('User Updated Successfully.')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        // }, 2000)

    }
}
export const FetchUserObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest())
        // setTimeout(() => {
        axios.get('http://localhost:8000/user/' + code).then(res => {
            const userlist = res.data
            dispatch(getUserObj(userlist))
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        // }, 2000)

    }
}