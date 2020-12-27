

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/mainNavigator'
import AppStore from './src/store/store'
import { Provider } from 'mobx-react';


const Store= window.store = new AppStore


const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
    <MainNavigator />
    </NavigationContainer>
    </Provider>
  );
};



export default App;
