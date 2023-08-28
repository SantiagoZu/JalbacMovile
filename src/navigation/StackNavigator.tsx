import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { HomeScreen } from '../screens/HomeScreen';
import { Appearance, Text, View, TouchableOpacity } from 'react-native';
import { ClientesScreen } from '../screens/ClientesScreen';
import { colors } from '../theme/globalTheme';
import { lightColors } from '../theme/lightTheme';
import { PedidosScreen } from '../screens/PedidosScreen';
import { DetallesPedidoScreen } from '../screens/DetallesPedidoScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { CommonActions, DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { GoBack } from '../components/GoBack';

export type RootStackParams = {
    HomeScreen: undefined,
    ClientesScreen: undefined,
    DetallesPedidoScreen: { idPedido: number },
    PedidosScreen: undefined,
    LoginScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    const defaultTheme = "light";
    const [theme, setTheme] = useState(Appearance.getColorScheme() || defaultTheme);
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme || defaultTheme);
    });

    const navigation = useNavigation();

    const { status } = useContext(AuthContext);

    if (status === 'cheking') return <LoadingScreen />

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme == 'light' ? lightColors.primaryColor : colors.primaryColor,
                    elevation: theme == 'light' ? 10 : 0,
                }
            }}
        >

            {
                (status !== 'authenticated') ? (
                    <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />
                ) : (
                    <>
                        <Stack.Screen name="HomeScreen" options={{ header: () => <StyleHeader title='Jalbac' theme={theme} navigation={navigation} showGoBackButton={false}/>, }} component={HomeScreen} />
                        <Stack.Screen name="ClientesScreen" options={{ header: () => <StyleHeader title='Clientes' theme={theme} navigation={navigation} /> }} component={ClientesScreen} />
                        <Stack.Screen name="DetallesPedidoScreen" options={{ header: () => <StyleHeader title='Detalles' theme={theme} navigation={navigation} /> }} component={DetallesPedidoScreen} />
                        <Stack.Screen name="PedidosScreen" options={{ header: () => <StyleHeader title='Pedidos' theme={theme} navigation={navigation} /> }} component={PedidosScreen} />
                    </>
                )
            }
        </Stack.Navigator>
    );
}

const StyleHeader = ({ title, theme, navigation, showGoBackButton = true }: { title: string, theme: string, navigation: NavigationProp<ReactNavigation.RootParamList>, showGoBackButton?: boolean }) => {

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <View style={{ backgroundColor: theme == 'light' ? lightColors.secondaryColor : colors.secondaryColor, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
                {
                    showGoBackButton && (
                        <View style={{
                            marginLeft: 10
                        }}>
                            <GoBack />
                        </View>
                    )
                }

                <Text style={{ fontSize: 25, color: theme == 'light' ? lightColors.titleColor : '#dfe5ea', fontWeight: '700', alignItems: 'center', marginHorizontal: 20, }}>{title}</Text>
            </View>

            <TouchableOpacity
                onPress={openDrawer}
                style={{
                    marginRight: 20
                }}
            >
                <Icon
                    name='menu-outline'
                    size={30}
                    color={colors.colorIcon}
                />
            </TouchableOpacity>

        </View>
    )
}