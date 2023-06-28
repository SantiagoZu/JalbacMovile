import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Text, TouchableOpacity, View } from 'react-native';
import { ClientesScreen } from '../screens/ClientesScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#121317'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" options={{ header: () => <StyleHeader title='Home' /> }} component={HomeScreen} />
            <Stack.Screen name="ClientesScreen" options={{ header: () => <StyleHeader title='Clientes' /> }} component={ClientesScreen} />
        </Stack.Navigator>
    );
}

const StyleHeader = ({ title }: { title: string }) => {
    return (
        <View style={{ backgroundColor: '#1a1c23', height: 60, alignContent: 'center', }}>
            
            <Text style={{ fontSize: 25, color: '#dfe5ea', fontWeight: '700', alignItems: 'center', marginHorizontal: 20, marginTop: 10 }}>{title}</Text>

        </View>
    )
}