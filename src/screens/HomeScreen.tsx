import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { styles } from '../theme/globalTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RoundedButton } from '../components/RoundedButton';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    return (
        <View style={{ ...styles.globalMargin, marginTop: top + 20, flex: 1 }}>
            <Text style={styles.title}>Bienvenido(a)</Text>
            <Text style={styles.parrafo}>A continuación se mostrará los clientes registrados en la aplicación</Text>

            <RoundedButton />
        </View>


    )
}
