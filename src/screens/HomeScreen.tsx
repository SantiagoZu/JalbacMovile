import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Appearance } from 'react-native';
import { styles } from '../theme/globalTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RoundedButton } from '../components/RoundedButton';
import { lightTheme } from '../theme/lightTheme';

export const HomeScreen = () => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });

    const { top } = useSafeAreaInsets()

    return (
        <View style={{ ...styles.globalMargin, marginTop: top + 20, flex: 1 }}>
            <Text style={theme == 'light' ? lightTheme.title : styles.title}>Bienvenido(a)</Text>
            <Text style={theme == 'light' ? lightTheme.parrafo : styles.parrafo}>A continuación se mostrará los clientes registrados en la aplicación</Text>

            <RoundedButton />
        </View>


    )
}
