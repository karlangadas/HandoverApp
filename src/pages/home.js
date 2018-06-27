import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

import General from './General';
import Detalle from './Detalle';

const Stack = StackNavigator({
    General: {screen:General},
    Detalle: {screen:Detalle},
    },{
        navigationOptions:{
          header: null,
        }
  });

class Home extends Component {
    render() {
        return (
            <Stack/>
        )
    }
}

export default Home;
