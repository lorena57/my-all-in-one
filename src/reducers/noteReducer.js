// import { FETCH_COMMENTS } from  '../actions/types';

import { FETCH_COMMENTS, NEW_COMMENTS } from "../actions/types";

const initialState = {
    comments: [],
    comment: {}
};

 const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        case NEW_COMMENTS:
            return {
                ...state,
                comment: action.payload
            };
            default:
                return state;
    }
}

export default noteReducer;