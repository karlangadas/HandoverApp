/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import Login from './src/pages/login';
import Home from './src/pages/home';

const Application = StackNavigator({
  Login: {screen:Login},
  Home: {screen:Home},
  },{
      navigationOptions:{
        header: null,
      }
});


export default class App extends  React.Component {
  render() {
    return (
      <Application/>
    );
  }
}