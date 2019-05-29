import {SELECT_CARD} from "./types";

const initialState = {
};

function cardReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SELECT_CARD:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default cardReducer;