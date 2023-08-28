import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigation/DrawerNavigation';
import { AuthProvider } from './src/context/AuthContext';
// import { StackNavigator } from './src/navigation/StackNavigator';

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <AppState>
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  );
}