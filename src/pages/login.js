import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import { Dimensions } from 'react-native';
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
            <KeyboardAvoidingView >
            <View style={styles.container}>
                <Logo/>
                <View style={styles.container}>
                    <Text  style={styles.title}>HandoverApp</Text>
                    <Text  style={styles.pequeno}>O seu app de passagem {"\n"}de plantão </Text>
                    <TextInput style={styles.boxInput}
                    placeholder="E-mail"
                    underlineColorAndroid='#4FBFA4'
                    onChangeText={(username)=>this.setState({username})}/>

                    <TextInput style={styles.boxInput}
                    placeholder="Senha"
                    underlineColorAndroid='#4FBFA4'
                    secureTextEntry={true}
                    ref={(input) => this.password = input}
                    onChangeText={(password)=>this.setState({password})}/>

                    <Text  style={styles.forgotPass}>Esqueci a senha</Text>
                    <TouchableOpacity style={styles.button} onPress={this.login}>
                        <Text style={styles.buttonText}>ENTRAR</Text>
                    </TouchableOpacity>   
                </View>
            </View>
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
        justifyContent:'flex-end',
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
        justifyContent: 'flex-end',
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