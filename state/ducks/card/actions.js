import {SELECT_CARD} from "./types";

function selectCard(id) {
    return {
        type: SELECT_CARD,
        payload: {id}
    }
}

export default {
    selectCard
};