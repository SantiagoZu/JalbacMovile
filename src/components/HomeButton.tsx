import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Appearance, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/globalTheme'
import { lightTheme } from '../theme/lightTheme'

interface Props {
    title: string;
    icon: string;
    navegacion: string;
}

export const HomeButton = ({ title, icon, navegacion }: Props) => {

    const navigation = useNavigation();
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });

    return (
        <View style={{ ...theme === 'light' ? lightTheme.containerHome : styles.container, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
                onPress={() => navigation.navigate(`${navegacion}` as never)}
            >
                <Icon
                    name={icon}
                    size={60}
                    color={colors.colorIcon}
                />
                <Text style={theme == 'light' ? lightTheme.subTitle : styles.subTitle}>{title}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        borderRadius: 15,
        backgroundColor: colors.secondaryColor,
        marginTop: 10
    },
    subTitle: {
        fontSize: 18,
        color: 'white',
        opacity: 0.7,
        fontWeight: 'bold'
    },
});