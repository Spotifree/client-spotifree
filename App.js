import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import HomeScreen from './screens/Home'
import BrowseScreen from './screens/Browse'
import SearchScreen from './screens/Search'
import CollectionScreen from './screens/Collection'
import WelcomeScreen from './screens/Welcome'

const AppNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
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
    screen: CollectionScreen
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
