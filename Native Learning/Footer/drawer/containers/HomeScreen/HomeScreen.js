import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { Details  } from "../Details/Details.js";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header >
          <Left>
            <Button
              transparent
              onPress={() => { this.props.navigation.openDrawer() }}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Gonna see some nude ? </Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Details")}>
            <Text>Pull over</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
