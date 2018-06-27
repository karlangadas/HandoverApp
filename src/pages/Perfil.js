import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";
import { StatusBar,StyleSheet } from 'react-native';
class Perfil extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Perfil</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Doctora Karla Pedraza</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default Perfil;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4FBFA4',
  },
  icon: {
    width: 24,
    height: 24,
  },
});