import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../views/screens/Home';
import Card from '../views/screens/Card';

const HomeStack = createStackNavigator({
    Home: Home,
    Card: Card
});

export default createAppContainer(HomeStack)
