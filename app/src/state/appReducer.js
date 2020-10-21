
export const initialState = {
    classes: [],
    user: {},
    isLoading: false,
    error: '' 
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    };
};