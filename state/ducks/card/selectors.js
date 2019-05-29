import {createSelector} from 'reselect';

const getCards = (state) => state.cardState.cards;
const getSelectedCardById = (state) => state.cardState.selectedCardId;

const getCardById = createSelector(
    [getCards, getSelectedCardById],
    (cards, id) => {
        return cards.reduce((matchedCard, card) => card.id === id ? card : matchedCard)
    }
);
export default {
    getCardById
};
