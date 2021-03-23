// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// import Login from './app/login/login.js'
//
// export default class App extends React.Component {
//   render() {
//     return (
//         <Login />
//     );
//   }
// }

import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import Login from './app/screens/login/login'
import Home from './app/screens/home/home'
import React, {Component} from "react";

const scenes = Actions.create(
    <Scene key="root">
      <Scene key = "login" title="Login" component={Login} initial={true} />
      <Scene key = "home" component = {Home} title = "Home" />
    </Scene>
);

export default class Periods extends Component {
  render() {
    return (
        <Router scenes={scenes} />
    )
  }
}
// AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)