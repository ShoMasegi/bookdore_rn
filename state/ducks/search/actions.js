import {SEARCH_CLEAR, SEARCH_FAILED, SEARCH_REQUESTED, SEARCH_SUCCEED} from "./types";

function searchRequested() {
    return {
        type: SEARCH_REQUESTED
    }
}

function searchSucceeded(responseObject) {
    let {items} = responseObject;
    return {
        type: SEARCH_SUCCEED,
        payload: {items}
    }
}

function searchFailed() {
    return {
        type: SEARCH_FAILED
    }
}

function searchClear() {
    return {
        type: SEARCH_CLEAR
    }
}

export default {
    searchRequested,
    searchSucceeded,
    searchFailed,
    searchClear
}
