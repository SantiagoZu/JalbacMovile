import React, { useState } from 'react'
import { Appearance, StyleSheet, Text, View } from 'react-native'
import { Pedido } from '../../interfaces/interfaces'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/globalTheme'
import { lightTheme } from '../theme/lightTheme'
import { format } from 'date-fns';
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


interface Props {
    pedido: Pedido;
}

export const PedidoItem = ({ pedido }: Props) => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });
    const navigation = useNavigation<any>();

    const fechaEntrega = new Date(pedido.fechaEntrega);
    const fechaPedido = new Date(pedido.fechaPedido);


    return (
        <TouchableOpacity onPress={() => navigation.navigate("DetallesPedidoScreen", { idPedido: pedido.idPedido })}
            activeOpacity={0.9}
        >
            <View style={{ ...theme == 'light' ? lightTheme.container : styles.container }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon
                        name='pricetags-outline'
                        color={colors.colorIcon}
                        size={40}
                        style={{ marginRight: 7, marginBottom: 10, marginTop: 7 }}
                    />

                </View>


                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...theme == 'light' ? lightTheme.titleCard : styles.title, fontSize: 20 }}>Fecha entrega - </Text>
                        <Text style={theme == 'light' ? lightTheme.titleCard : styles.title}>{format(fechaEntrega, 'dd/MM/yyyy')}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name='calendar-outline'
                                color={colors.colorIcon}
                                size={20}
                                style={{ marginRight: 7 }}
                            />
                            <Text style={theme == 'light' ? lightTheme.subTitle : styles.subTitle}>{format(fechaPedido, 'dd/MM/yyyy')}</Text>
                        </View>

                        <View />
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                name='person-outline'
                                color={colors.colorIcon}
                                size={20}
                                style={{ marginRight: 7, marginLeft: 7 }}
                            />

                            <Text style={theme == 'light' ? lightTheme.subTitle : styles.subTitle}>{pedido.idClienteNavigation.nombre}</Text>
                        </View>

                    </View>




                </View>


                <View style={{ height: 15, width: 15, position: 'absolute', right: 0,  borderRadius: 100, marginRight: 8, bottom: 15, backgroundColor: pedido.isActivo  ? 'green' : 'red' }}>
                </View>

            </View>
        </TouchableOpacity>
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