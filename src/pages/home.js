import React, { Component } from 'react';

import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

import Form from '../components/forms';
import Logo from '../components/logo';

export default class Home extends Component<{}>{
    render(){
        return(
            <View style={styles.container}>
                <Text>Eres gil y morirás gil</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
  });