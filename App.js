import React, {Component} from 'react';
import {Provider}from 'react-redux';
import Router from './config/router'
import configureStore from "./state/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

export default class App extends Component {
  render() {
    return (
        <Provider store={reduxStore}>
          <Router />
        </Provider>
    );
  }
}
