import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from "./appActions"


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
        default:
            return state;
    };
};
