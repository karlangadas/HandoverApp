import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  ToolbarAndroid,  
} from 'react-native';

export default class Perfil extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Perfil</Text>
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