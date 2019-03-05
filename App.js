import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation"; 
import HomeScreen from './Pages/HomeScreen'
import MapScreen from './Pages/MapScreen'


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor('#905fdf'); 
  }

  render() {
    return ( 
            <AppContainer />
    );
  }
}
