import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import HomeScreen from './screens/Home'
import BrowseScreen from './screens/Browse'
import SearchScreen from './screens/Search'
import MyAccountScreen from './screens/Collection'

const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Browse: {
    screen: BrowseScreen
  },
  Search: {
    screen: SearchScreen
  },
  Collection: {
    screen: MyAccountScreen
  }
})

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
