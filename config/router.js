import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../views/screens/Home';

const HomeStack = createStackNavigator({
    Home: Home
});

export default createAppContainer(HomeStack)
