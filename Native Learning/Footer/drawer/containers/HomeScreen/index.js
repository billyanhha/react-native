import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import { DrawerNavigator } from "react-navigation";
import  SideBar  from "../SideBar/SideBar.js";
import DetailScreen from "../Details/Details.js";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailScreen },
  },
  {
  
    contentComponent: props => <SideBar {...props} />,
    // animationEnabled: true,
    // swipeEnabled: true,
  }
);
export default HomeScreenRouter;
