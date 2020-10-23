import {
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from "./appActions"


export const initialState = {
    classes: [],
    user: {},
    isLoading: false,
    error: '' 
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case FETCH_START:
            return{
                ...state,
                isLoading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                classes: action.payload,
                isLoading: false
            }
        case FETCH_FAILURE:
            return {
                ...state, 
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    };
};
