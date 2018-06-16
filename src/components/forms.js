import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
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

export default class App extends Component {
    render() {
      return (
        <View style={styles.container}>
                    <Text  style={styles.title}>HandoverApp</Text>
                    <Text  style={styles.pequeno}>O seu app de passagem {"\n"}de plantão</Text>
                    <View style={styles.inputbar}>
                        <View style={{marginVertical: 12, height: 40, width: 20, alignItems: 'flex-end', justifyContent: 'center'}}>
                            <Icon name="envelope" size={16} color="#4FBFA4" />
                        </View>
                        <TextInput style={styles.boxInput}
                            placeholder="E-mail"
                            autoCapitalize = 'none'
                            underlineColorAndroid='#4FBFA4'
                            onChangeText={(username)=>this.setState({username})}
                        />
                    </View>
                    <View style={styles.inputbar}>
                        <View style={{marginVertical: 12, height: 40, width:20, alignItems: 'flex-end', justifyContent: 'center'}}>
                            <Icon name="lock" size={22} color="#4FBFA4" />
                        </View>
                        <TextInput style={styles.boxInput}
                            autoCapitalize = 'none'
                            placeholder="Senha"
                            underlineColorAndroid='#4FBFA4'
                            secureTextEntry={true}
                            ref={(input) => this.password = input}
                            onChangeText={(password)=>this.setState({password})}
                        />
                    </View>
                    <Text  style={styles.forgotPass}>Esqueci a senha</Text>
                </View>
      );
    }
  }

  
  const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'white',
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
        lineHeight: 80,
    },
    boxInput:{
        width: 300,
        fontSize: 16,
        marginVertical: 12,
        color: '#000',
        width: 250,
        height: 40,
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 5,
    },
    button: {
        backgroundColor:'#4FBFA4',
        paddingVertical: 25,
        width: imageWidth,
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Arial',
        fontSize: 19,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    inputbar: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:0,
    },
  });