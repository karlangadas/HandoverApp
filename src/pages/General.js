import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    View,
    Image,
    TextInput,
    StatusBar,
    ToolbarAndroid,
} from 'react-native';

import { Body, Thumbnail, List, Button, Container, Header, Content, Left, ListItem, Text, Separator } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from '../components/HeaderComponent/index';

class General extends Component {
    constructor() {
        super();
        this.state = {
            data1: [],
            data2:[],
        }
    }
    componentDidMount() {
        fetch("https://handover-app.herokuapp.com/admision/1")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data1: responseJson,
                });
            }),
        fetch("https://handover-app.herokuapp.com/admision/2")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data2: responseJson,
                });
            })

    }
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <Icon name="bars" size={20} color="white" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    })
    render() {
        return (
            <Container>
                <HeaderComponent drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
                <Content style={styles.contenido}>
                    <View style={styles.vista}>
                        <Text style={styles.TextSeparador}>   Hospital das Clinicas</Text>
                    </View>
                    <List style={styles.list} dataArray={this.state.data1}
                        renderRow={(data1) =>
                            <ListItem style={styles.list} button={true} onPress={()=>this.handleClick(data1.id)} >
                                <Thumbnail square size={80} source={{ uri: data1.photolink }} />
                                <Body>
                                    <Text style={{fontWeight: 'bold', color: '#413D3E', fontSize: 17, lineHeight: 25}}>{data1.nome}</Text>
                                    <Text style={{color: '#413D3E'}} note>{data1.edad} anos | Matricula: {data1.matricula}</Text>
                                </Body>
                            </ListItem>
                        }>
                    </List>
                    <View style={styles.vista}>
                        <Text style={styles.TextSeparador}>   Hospital Universitario</Text>
                    </View>
                    <List style={styles.list} dataArray={this.state.data2}
                        renderRow={(data2) =>
                            <ListItem style={styles.list} button={true} onPress={()=>this.handleClick(data2.id)}>
                                <Thumbnail square size={80} source={{ uri: data2.photolink }} />
                                <Body>
                                    <Text style={{fontWeight: 'bold', color: '#413D3E', fontSize: 17, lineHeight: 25}}>{data2.nome}</Text>
                                    <Text style={{color: '#413D3E'}} note>{data2.edad} anos | Matricula: {data2.matricula}</Text>
                                </Body>
                            </ListItem>
                        }>
                    </List>
                    <View style={{ paddingVertical: 10 }}>
                    </View>
                </Content>
            </Container>
        )
    }
    handleClick = (id_adm) =>{
        this.props.navigation.navigate('Detalle',{itemId:id_adm});
    }
}

export default General;

const styles = StyleSheet.create({
    contenido: {
        flex: 1,
        backgroundColor: "white",
    },
    vista:{
        marginHorizontal: 15,
        marginTop: 15,
        paddingVertical: 15,
        backgroundColor: "#4FBFA4",
    },
    TextSeparador: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
    },
    list: {
        marginHorizontal: 15,
        backgroundColor: "#EDF9F6",
    },
    listItem: {
        marginTop: 5,
    }
});