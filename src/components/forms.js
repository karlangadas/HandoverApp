import React, { Component } from 'react';
import { Dimensions } from 'react-native';

import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

export default class App extends Component<{}> {
    render() {
      return (
        <View style={styles.container}>
            <Text  style={styles.title}>HandoverApp</Text>
            <Text  style={styles.pequeno}>O seu app de passagem {"\n"}de plantão </Text>
            <TextInput style={styles.boxInput}
            placeholder="E-mail"
            underlineColorAndroid='#4FBFA4'/>
            <TextInput style={styles.boxInput}
            placeholder="Senha"
            underlineColorAndroid='#4FBFA4'
            secureTextEntry={true}
            ref={(input) => this.password = input} />
            <Text  style={styles.forgotPass}>Esqueci a senha</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>   
        </View>
      );
    }
  }

  
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent:'flex-end',
        alignItems: 'center'
      },
    upcontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    title:{
      fontFamily: 'Raleway-ExtraBold',
      fontSize: 35,
      color: '#4FBFA4',
      lineHeight: 40,
    },
    pequeno:{
        fontFamily: 'Raleway-Medium',
        fontSize: 14,
        color: '#413E3E',
        textAlign: 'center',
    },
    forgotPass:{
        fontFamily: 'Arial',
        fontSize: 13,
        alignItems: 'center',
        color: '#4FBFA4', 
        lineHeight: 100,
    },
    boxInput:{
        width: 300,
        fontSize: 16,
        marginVertical: 12,
    },
    button: {
        width:300,
        backgroundColor:'#4FBFA4',
        paddingVertical: 30,
        width: imageWidth,
    },
    buttonText: {
        fontFamily: 'Arial',
        fontSize: 19,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    }
  });