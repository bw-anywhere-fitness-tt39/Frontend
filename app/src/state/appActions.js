// action suite (not industry term)
//1. action types
// 2. action creators
// 3. action objects
import axiosWithAuth from '../utils/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS =  "LOGIN_SUCCESS";
export const LOGIN_FAILURE =  "LOGIN_FAILURE";

export const login = (user) => (dispatch) =>{
    dispatch({ type: LOGIN_START });
    axiosWithAuth
    .post('/login', user)
    .then(res => {
        console.log(res.data)
        window.localStorage.setItem('token', res.data.payload)
        dispatch({type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err, 'LOGIN failed!')
        dispatch({ type: LOGIN_FAILURE, payload: err})
    })


}