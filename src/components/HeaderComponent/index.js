import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Body, Title, Content, Left, Right } from 'native-base'


class HeaderComponent extends Component{
    render(){
    return(
        <Header style={{backgroundColor: "#4FBFA4"}}>
            <Left>
                <Icon name="bars" size={20} color="white"  onPress={() => this.props.drawerOpen()}/>
            </Left>
            <Body>
                <Title>Dr. Lucas</Title>
            </Body>
            <Right>
                <Icon name="search" size={20} color="white"/>
            </Right>
        </Header>
    );}
}

export default HeaderComponent;