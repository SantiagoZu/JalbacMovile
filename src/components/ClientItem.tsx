import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Cliente } from '../../interfaces/interfaces'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    cliente: Cliente
}

export const ClientItem = ({ cliente }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{cliente.nombre} {cliente.apellido}</Text>

            <View style={{ flexDirection: 'row' }}>
                <Icon
                    name='reader-outline'
                    color='#7E3AF2'
                    size={20}
                    style={{ marginRight: 7 }}
                />
                <Text style={styles.subTitle}>{cliente.documento}  -</Text>

                <Icon
                    name='call-outline'
                    color='#7E3AF2'
                    size={20}
                    style={{ marginRight: 7, marginLeft: 7 }}
                />

                <Text style={styles.subTitle}>{cliente.telefono}</Text>

            </View>
            <View style={{ height: 50, width: 50, position: 'absolute', right: 0, marginTop: 10 }}>

                <Icon
                    name={cliente.estado ? 'checkmark-outline' : 'close-outline'}
                    color={cliente.estado ? 'green' : 'red'}
                    size={40}
                    style={{fontWeight: 'bold'}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 7
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