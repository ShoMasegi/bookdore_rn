import {CARDS_CLEAR, CARDS_FAILED, CARDS_REQUEST, CARDS_SUCCEEDED, SELECT_CARD} from "./types";

const initialState = {
    isCardsFetching: false,
    cards: []
};

function cardReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case CARDS_REQUEST:
            return {
                ...state,
                isCardsFetching: true
            };
        case CARDS_SUCCEEDED:
            return {
                ...state,
                isCardsFetching: false,
                cards: payload.cards
            };
        case CARDS_FAILED:
            return {
                ...state,
                isCardsFetching: false
            };
        case CARDS_CLEAR:
            return {
                ...state,
                cards: []
            };
        case SELECT_CARD:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default cardReducer;