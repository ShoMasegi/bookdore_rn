import {SELECT_BOOK} from "./types";

function selectBook(id) {
    return {
        type: SELECT_BOOK,
        payload: {id}
    }
}

export default {
    selectBook
};