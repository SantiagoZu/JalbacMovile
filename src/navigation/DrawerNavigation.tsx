import React, { useContext, useState } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Appearance, Text, View } from 'react-native';
import { Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { TouchableOpacity } from 'react-native';
import { colors, styles } from '../theme/globalTheme';
import { lightColors } from '../theme/lightTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    return (
        <Drawer.Navigator

            drawerContent={(props) => <MenuInterno {...props} />}
            screenOptions={
                {
                    headerShown: false,
                }
            }

        >
            <Drawer.Screen name='StackNavigator' component={StackNavigator} />
        </Drawer.Navigator>
    );
}


const MenuInterno = (props: DrawerContentComponentProps) => {
    const { logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });

    const handleLogout = () => {
        logOut();
        props.navigation.closeDrawer();
    }
    return (
        <DrawerContentScrollView style={{
            backgroundColor: theme == 'light' ? lightColors.secondaryColor : colors.secondaryColor
        }}>
            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
                    }}
                    style={{
                        width: 250,
                        height: 250,
                        borderRadius: 150,
                        marginTop: 20
                    }}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: "#7e3af2",
                        width: '100%',
                        height: 40,
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 25,
                    }}
                    onPress={handleLogout}
                >
                    <Text style={{ ...styles.title, fontSize: 18 }}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}
