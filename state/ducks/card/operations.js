import actions from './actions'
import api from '../api'

const cardsRequested = actions.cardsRequested;
const cardsSucceeded = actions.cardsSucceeded;
const cardsFailed = actions.cardsFailed;
const cardsClear = actions.cardsClear;
const selectCard = actions.selectCard;

const fetchCards = () => async (dispatch) => {
    dispatch(cardsRequested);
    try {
        const response = await  fetch(api.cards);
        const json = await response.json();
        dispatch(cardsSucceeded(json.data));
    } catch (error) {
        dispatch(cardsFailed)
    }
};

export default {
    cardsRequested,
    cardsSucceeded,
    cardsFailed,
    cardsClear,
    selectCard,
    fetchCards
};
