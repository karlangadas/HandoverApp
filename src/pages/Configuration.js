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

import { Button, Container, Header, Content, Left } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from '../components/HeaderComponent/index';

class Configuration extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Icon name="bars" size={20} color="white" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
  })
  render() {
    return (
      <Container>
        <HeaderComponent drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Text>Configuracoes</Text>
        </Content>
      </Container>
    )
  }
}

export default Configuration;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});