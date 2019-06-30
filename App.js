import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Provider } from "react-redux";

import store from './store';
import Images from "./components/Images";

import RootNavigator from "./components/RootNavigation"

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;


export default function App() {
  return (
    <Provider store={store}>
        <StatusBar barStyle="dark-content" hidden={false} translucent />
      <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
