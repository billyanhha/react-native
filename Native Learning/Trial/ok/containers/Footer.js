import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { createStackNavigator, withNavigation } from 'react-navigation'; // Version can be specified in package.json

import Expo from "expo";

export default class FooterTabsBadgeExample extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }

        return (
            <Container>
                <Content />
                <Footer>
                    <FooterTab>
                        <Button badge vertical onPress={() => this.props.navigation.navigate('Details')}>
                            <Badge><Text>2</Text></Badge>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical >
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button active badge vertical>
                            <Badge ><Text>51</Text></Badge>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}