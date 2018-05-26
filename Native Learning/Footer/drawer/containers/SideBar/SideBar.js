import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import NavigationActions from "react-navigation";
const routes = ["Home", "Details"];
export default class SideBar extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <Image
            source={require('../../image/3.jpg')}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
          </Image>
          <Image
            square
            style={{ height: 80, width: 70 }}
            source={require('../../image/3.jpg')}
          >
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress=
                  {
                    () => {
                      // this.props.closeDrawer();
                      this.props.navigation.navigate(data);
                      // this.props.navigation.descriptors.navigation.closeDrawer();
                      this.props.descriptors.Details.navigation.closeDrawer();
                      this.props.descriptors.Home.navigation.closeDrawer();
                      console.log(this.props);
                      
                    }
                  }
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
