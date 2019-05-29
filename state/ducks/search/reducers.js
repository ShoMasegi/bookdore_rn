import {SEARCH_CLEAR, SEARCH_FAILED, SEARCH_REQUESTED, SEARCH_SUCCEED} from "./types";

const initialState = {
    isFetching: false,
    responses: []
};

function searchReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SEARCH_REQUESTED:
            return {
                ...state,
                isFetching: true
            };
        case SEARCH_SUCCEED:
            return {
                ...state,
                isFetching: false,
                responses: payload.items
            };
        case SEARCH_FAILED:
            return {
                ...state,
                isFetching: false
            };
        case SEARCH_CLEAR:
            return {
                ...state,
                responses: []
            };
        default:
            return state;
    }
}

export default searchReducer;
