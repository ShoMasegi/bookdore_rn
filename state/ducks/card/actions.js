import {CARDS_CLEAR, CARDS_FAILED, CARDS_REQUEST, SELECT_CARD , CARDS_SUCCEEDED} from "./types";

function cardsRequested() {
    return {
        type: CARDS_REQUEST
    }
}

function cardsSucceeded(responseObject) {
    let {cards} = responseObject;
    return {
        type: CARDS_SUCCEEDED,
        payload: {cards}
    }
}

function cardsFailed() {
    return {
        type: CARDS_FAILED
    }
}

function cardsClear() {
    return {
        type: CARDS_CLEAR
    }
}

function selectCard(id) {
    console.log(id);
    return {
        type: SELECT_CARD,
        payload: {id}
    }
}

export default {
    cardsRequested,
    cardsSucceeded,
    cardsFailed,
    cardsClear,
    selectCard
};