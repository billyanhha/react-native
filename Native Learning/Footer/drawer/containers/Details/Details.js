import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";

class DetailScreen extends React.Component {
    render() {
        return <Container>
            <Header >
                <Left>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>DetailScreen</Title>
                </Body>
                <Right />
            </Header>
            <Image source={require('../../image/1.jpg')} />
            <Content padder>
                <Button full rounded dark
                    style={{ marginTop: 10 }}
                    onPress={ () => this.props.navigation.navigate("Home")}>
                    <Text>Back</Text>
                </Button>
            </Content>
        </Container>

    }
}


export default DetailScreen;