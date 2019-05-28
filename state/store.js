import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';
import * as reducers from './ducks'
import {composeWithDevTools} from "redux-devtools-extension";

export default function configureStore() {
    const rootReducer = combineReducers(reducers);
    return createStore(
        rootReducer,
        composeWithDevTools(),
        applyMiddleware(ReduxThunk)
    )
}
