import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Dimensions,  
} from 'react-native';

import Form from '../components/forms';
import Logo from '../components/logo';


const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
        }
    }

    componentDidMount(){
        this._loadInitialState().done();

    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if(value!==null){
            this.props.navigation.navigate('Home');
        }
    } 
    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
                <Logo/>
                <Form/>
                <TouchableOpacity style={styles.button} onPress={this.login}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity> 
            </KeyboardAvoidingView>
        )
    }

    login = () => {
        AsyncStorage.setItem('user',this.username);
        this.props.navigation.navigate('Home');
    }
}

AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);



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