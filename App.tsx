import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { MenuLateral } from './src/navigation/DrawerNavigation';
import { StackNavigator } from './src/navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <MenuLateral /> */}
    </NavigationContainer>
  );
}