import {SELECT_BOOK} from "./types";

const initialState = {
    
};

function bookReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SELECT_BOOK:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default bookReducer;