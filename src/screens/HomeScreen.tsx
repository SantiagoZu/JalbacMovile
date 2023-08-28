import React, { useEffect, useState } from 'react';
import { Text, View, Appearance, Button } from 'react-native';
import { styles } from '../theme/globalTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeButton } from '../components/HomeButton';
import { lightTheme } from '../theme/lightTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParams } from '../navigation/StackNavigator';

interface Props extends DrawerScreenProps<RootStackParams, any> {};

export const HomeScreen = ({navigation}:Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button 
                    title='menu'
                    onPress={() => navigation.toggleDrawer()}
                />
            ) 
        })
    }, [])
    
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });
    const { top } = useSafeAreaInsets()

    return (
        <View style={{ ...styles.globalMargin, marginTop: top + 20 }}>
            <Text style={theme == 'light' ? lightTheme.title : styles.title}>Bienvenido(a)</Text>

            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 15, marginTop: 20}}>
                <HomeButton title='Clientes' icon='person-outline' navegacion='ClientesScreen'/>
                <HomeButton title='Pedidos' icon='receipt-outline' navegacion='PedidosScreen'/>
            </View>

        </View>


    )
}
