import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { PedidosEnProduccion } from '../screens/PedidosEnProduccion';
import { PedidosEntregados } from '../screens/PedidosEntregados';
import { colors } from '../theme/globalTheme';
import { Appearance } from 'react-native';
import { lightColors } from '../theme/lightTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: theme === 'light' ? lightColors.primaryColor :colors.primaryColor
            }}
            tabBarPosition='bottom'
            screenOptions={({ route }) => ({
                tabBarIndicatorStyle: {
                    backgroundColor: colors.colorIcon,
                },
                
                tabBarContentContainerStyle: {
                    backgroundColor: theme === 'light' ? lightColors.secondaryColor :colors.secondaryColor,
                    height: 70,
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    marginTop: 10,
                    fontWeight: 'bold'
                },
            
                tabBarActiveTintColor: colors.colorIcon,
                tabBarIcon: ({ color }) => {
                    
                    let iconName: string = '';
                    switch (route.name) {
                        case 'PedidosEnProduccion':
                            iconName = 'hammer-outline'
                            break;
                        case 'PedidosEntregados':
                            iconName = 'checkbox-outline'
                            break;
                    }
                    return <Icon name={iconName} size={35} color={color} style={{marginRight: -10, marginBottom: -12}} />
                }

            })}
        >
            <Tab.Screen name="PedidosEnProduccion" options={{title: 'En producción', tabBarStyle:{}}} component={PedidosEnProduccion} />
            <Tab.Screen name="PedidosEntregados" options={{ title: 'Entregados' }} component={PedidosEntregados} />
        </Tab.Navigator>
    );
}