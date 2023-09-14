import React, { useState } from 'react'
import { Appearance, StyleSheet, Text, View } from 'react-native'
import { Cliente } from '../../interfaces/interfaces'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/globalTheme'
import { lightTheme } from '../theme/lightTheme'

interface Props {
    cliente: Cliente
}

export const ClientItem = ({ cliente }: Props) => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });
    return (
        <View style={{...theme == 'light' ? lightTheme.container : styles.container}}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon
                    name='person-outline'
                    color={colors.colorIcon}
                    size={40}
                    style={{ marginRight: 7, marginBottom: 10, marginTop: 7 }}
                />

            </View>


            <View>
                <Text style={theme == 'light' ? lightTheme.titleCard : styles.title}>{cliente.nombre} {cliente.apellido}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='reader-outline'
                        color={colors.colorIcon}
                        size={20}
                        style={{ marginRight: 7 }}
                    />
                    <Text style={theme == 'light' ? lightTheme.subTitle : styles.subTitle}>{cliente.documento}</Text>
                    </View>
                    
                    <View />
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            name='call-outline'
                            color={colors.colorIcon}
                            size={20}
                            style={{ marginRight: 7, marginLeft: 7 }}
                        />

                        <Text style={theme == 'light' ? lightTheme.subTitle : styles.subTitle}>{cliente.telefono}</Text>
                    </View>

                </View>


                

            </View>


            <View style={{ height: 15, width: 15, position: 'absolute', right: 0,  backgroundColor: cliente.estado ? 'green' : 'red', borderRadius: 100, marginRight: 15, marginTop: 10 }}>
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 7,
        backgroundColor: '#1a1c23',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
    },
    title: {
        fontSize: 21,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 4
    },
    subTitle: {
        fontSize: 18,
        color: 'white',
        opacity: 0.7,
        fontWeight: 'bold'
    },
});