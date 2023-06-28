import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
// import { FutbolScreen } from '../screens/FutbolScreen';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    return (
        <Drawer.Navigator
            drawerContent={()=> <Text>Hola mundo</Text>}
        >
            <Drawer.Screen name='StackNavigator' component={StackNavigator} />
            {/* <Drawer.Screen name='FutbolScreen' component={FutbolScreen} /> */}
        </Drawer.Navigator>
    );
}