import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button,Header, Left, Right,Body,Title} from "native-base";

export const HeaderComponent = ()=>{
    return(
        <Header style={{backgroundColor: "#4FBFA4"}}>
            <Left>
                <Button transparent>
                    <Icon name="bars" size={20} color="white"/>
                </Button>
            </Left>
            <Body>
                <Title>Dr. Lucas</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="search" size={20} color="white"/>
                </Button>
            </Right>
        </Header>
    );
}

export default HeaderComponent;