import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Appearance, StyleSheet, Text, View } from 'react-native';
import { ClientesScreen } from '../screens/ClientesScreen';
import { colors } from '../theme/globalTheme';
import { lightColors } from '../theme/lightTheme';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    const defaultTheme = "light";
    const [theme, setTheme] = useState(Appearance.getColorScheme() || defaultTheme);
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme || defaultTheme);
    });


    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme == 'light' ? lightColors.primaryColor : colors.primaryColor,
                    elevation: theme == 'light' ? 10 : 0,
                    shadowOpacity: 0.50,
                    shadowRadius: 1.41
                }
            }}
        >
            <Stack.Screen name="HomeScreen" options={{ header: () => <StyleHeader title='Jalbac' theme={theme}/> }} component={HomeScreen} />
            <Stack.Screen name="ClientesScreen" options={{ header: () => <StyleHeader title='Clientes' theme={theme}/> }} component={ClientesScreen} />
        </Stack.Navigator>
    );
}

const StyleHeader = ({ title, theme }: { title: string, theme: string }) => {
    return (
        <View style={{ backgroundColor: theme == 'light' ? lightColors.secondaryColor : colors.secondaryColor, height: 60, alignContent: 'center', }}>

            <Text style={{ fontSize: 25, color: theme == 'light' ? lightColors.titleColor : '#dfe5ea', fontWeight: '700', alignItems: 'center', marginHorizontal: 20, marginTop: 10 }}>{title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({

});