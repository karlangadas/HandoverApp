import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    View,
} from 'react-native';

import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { Body, Thumbnail, List, Button, Container, Header, Content, Left, ListItem, Text, Separator } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from '../components/HeaderComponent/index';
class Detalle extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            tableData: [],
            tableTitles: ['HDAP', 'EXA', 'MED', 'PEN'],
        }
    }
    getFeaturedPaciente(thumbnail_json) {
        return fetch("https://handover-app.herokuapp.com/admisionPaciente/"+thumbnail_json)
        .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson[0], 
                    tableData: [
                        [responseJson[0].hdap], [responseJson[0].exa], [responseJson[0].med], [responseJson[0].pen]
                    ],
                });
            })
        .done();
      }
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <Icon name="bars" size={20} color="white" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    })
    render() {
        const { navigation } = this.props;
        const id_admision = navigation.getParam('itemId', 'NO-ID');
        this.getFeaturedPaciente(id_admision);
        return (
            <Container style={{ backgroundColor: 'white' }}>
                <HeaderComponent drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
                <Content style={styles.contenido}>
                    <List style={styles.list}>
                        <Separator style={styles.separador}>
                            <Text style={styles.TextSeparador}> Hospital das Clinicas  {this.id_admision}</Text>
                        </Separator>
                        <ListItem style={styles.listItem}>
                            <Thumbnail square size={80} source={{ uri: this.state.data.photolink }} />
                            <Body>
                                <Text style={{ fontWeight: 'bold', color: '#413D3E', fontSize: 17, lineHeight: 25 }}>{this.state.data.nome}</Text>
                                <Text style={{ color: '#413D3E' }} note>{this.state.data.edad} anos | Matricula: {this.state.data.matricula}</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem} last>
                            <Text style={{ color: '#413D3E', textAlign: 'justify', lineHeight: 25 }}>Resumo: {this.state.data.resumo}</Text>
                        </ListItem>
                    </List>
                    <View style={styles.container}>
                        <Table borderStyle={{ borderWidth: 6, borderTopWidth: 0, borderColor: 'white' }}>
                            <TableWrapper style={styles.wrapper} borderStyle={{ borderWidth: 4, borderColor: 'white', }}>
                                <Col style={styles.col} data={this.state.tableTitles} widthArr={[140, 140, 140, 140]} flexArr={[1, 1, 1, 1]} textStyle={styles.grande} />
                                <Rows data={this.state.tableData} flexArr={[1, 1, 1, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default Detalle;

const styles = StyleSheet.create({
    contenido: {
        flex: 1,
        backgroundColor: "white",
    },
    TextSeparador: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
    },
    list: {
        marginTop: 15,
        marginHorizontal: 15,
        backgroundColor: "#EDF9F6",
    },
    listItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    separador: {
        paddingVertical: 25,
        backgroundColor: "#4FBFA4",
    },
    container: { marginHorizontal: 10, flex: 1, paddingTop: 0, backgroundColor: '#fff' },
    wrapper: { flexDirection: 'row' },
    row: { height: 150, backgroundColor: '#F0F0F0' },
    col: { flex: 2, backgroundColor: '#F0F0F0' },
    text: { textAlign: 'justify', fontSize: 18, margin: 20, color: '#3F3C3C', lineHeight: 25 },
    grande: { textAlign: 'center', fontSize: 30, fontWeight: 'bold', margin: 10, color: '#3F3C3C' },
    borde: { borderWidth: 1, borderColor: 'white' }
});