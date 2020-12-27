import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import firstWelcomeScreen from '../screens/firstWelcomeScreen'
import secondWelcomeScreen from '../screens/secondWelcomeScreen'
import thirdWelcomeScreen from '../screens/thirdWelcomeScreen'
import mainScreen from '../screens/mainScreen'
import productDetails from '../screens/productDetails'
import cartScreen from '../screens/cartScreen'






const Stack = createStackNavigator();
const MainStack = () => {
  return (
        <Stack.Navigator >
          <Stack.Screen name="main" component={mainScreen} />
          <Stack.Screen name="details" component={productDetails} />
          <Stack.Screen name="cart" component={cartScreen} />


        </Stack.Navigator>
    );
}

const welcomeScreensStack = () => {
    return (
          <Stack.Navigator initialRouteName={'first'} screenOptions={{headerShown:false} }>
            <Stack.Screen name="first" component={firstWelcomeScreen} />
            <Stack.Screen name="second" component={secondWelcomeScreen} />
            <Stack.Screen name="third" component={thirdWelcomeScreen} />
            <Stack.Screen name="app" component={MainStack} />

          </Stack.Navigator>
      );
}


export default welcomeScreensStack