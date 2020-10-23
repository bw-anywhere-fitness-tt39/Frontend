// action suite (not industry term)
//1. action types
// 2. action creators
// 3. action objects
import axiosWithAuth from '../utils/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS =  "LOGIN_SUCCESS";
export const LOGIN_FAILURE =  "LOGIN_FAILURE";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';


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

export const fetchClasses = () => (dispatch) => {
    dispatch({ type: FETCH_START});
    axiosWithAuth
    .get('/')
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: FETCH_FAILURE, payload: err}))
}

export const addClass = () => (dispatch) => {
    dispatch({ type: ADD_START});
    axiosWithAuth
    .post('/')
    .then(res => {
        console.log(res.data)
        dispatch({type: ADD_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: ADD_FAILURE, payload: err}))
}

export const UpdateClass = (id) => (dispatch) => {
    dispatch({ type: UPDATE_START});
    axiosWithAuth
    .put('/')
    .then(res => {
        console.log(res.data)
        dispatch({type: UPDATE_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: UPDATE_FAILURE, payload: err}))
}

export const DeleteClass = (id) => (dispatch) => {
    dispatch({ type: DELETE_START});
    axiosWithAuth
    .delete('/')
    .then(res => {
        console.log(res.data)
        dispatch({type: DELETE_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: DELETE_FAILURE, payload: err}))
}