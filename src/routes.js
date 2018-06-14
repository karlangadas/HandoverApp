import React, { Component } from 'react';

import {ROuter, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/login';
import Home from './pages/home';


export default class Routes extends Component<{}> {
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="home" component={Home} title="Home"/>
                    
                </Stack>
            </Router>
        )
    }
}