import React, { useState } from 'react'
import { Appearance, StyleSheet, Text, View } from 'react-native'
import { Detalle } from '../../interfaces/interfaces'
import { colors } from '../theme/globalTheme';
import { lightTheme } from '../theme/lightTheme';

interface Props {
    detalle: Detalle;
}

export const DetalleItem = ({ detalle }: Props) => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ ...theme === 'light' ? lightTheme.card : styles.card, justifyContent: 'center', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ ...theme === 'light' ? lightTheme.titleDetalleItem : styles.title, fontSize: 26, opacity: 1 }}>Nombre - {detalle.nombreAnillido}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ ...styles.column, alignItems: 'center' }}>
                        <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>Peso(g)</Text>
                        <View style={styles.containerValue}>
                            <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>{detalle.peso}</Text>
                        </View>
                        <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>Material</Text>
                        <View style={styles.containerValue}>
                            <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>{detalle.material}</Text>
                        </View>
                        <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>Tipo</Text>
                        <View style={styles.containerValue}>
                            <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>{detalle.servicio}</Text>
                        </View>
                    </View>

                    <View style={{ ...styles.column, alignItems: 'center' }}>
                        <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>Talla</Text>
                        <View style={styles.containerValue}>
                            <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>{detalle.tamanoAnillo}</Text>
                        </View>
                        <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>Piedra</Text>
                        <View style={styles.containerValue}>
                            <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>{detalle.tamanoPiedra}mm</Text>
                        </View>
                        <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>Cantidad</Text>
                        <View style={styles.containerValue}>
                            <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>{detalle.cantidad}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={theme === 'light' ? lightTheme.empleadoCard : styles.empleadoCard}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ ...theme === 'light' ? lightTheme.titleDetalleItem : styles.title, marginRight: 10 }}>Empleado</Text>
                    <View style={styles.containerValue}>
                        <Text style={theme === 'light' ? lightTheme.titleDetalleItem : styles.title}>{detalle.idEmpleadoNavigation.nombre} {detalle.idEmpleadoNavigation.apellido}</Text>
                    </View>
                </View>
            </View>
            <View style={{ ...theme === 'light' ? lightTheme.detalleCard : styles.detalleCard }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ ...theme === 'light' ? lightTheme.titleDetalleItem : styles.title, marginRight: 10 }}>Detalle</Text>
                    <View style={{ ...styles.containerValue }}>
                        <Text style={{ ...theme === 'light' ? lightTheme.titleDetalleItem : styles.title }}>{detalle.detalle}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        // height: 300,
        width: 340,
        backgroundColor: colors.secondaryColor,
        borderRadius: 15,
        padding: 15,
        marginBottom: 5,
    },
    empleadoCard: {
        width: 340,
        backgroundColor: colors.secondaryColor,
        borderRadius: 15,
        padding: 15,
        marginBottom: 5,
    },
    detalleCard: {
        width: 340,
        backgroundColor: colors.secondaryColor,
        borderRadius: 15,
        padding: 15,
        marginBottom: 30,
    },
    column: {
        flex: 1,
        // width: 120,
    },
    title: {
        fontSize: 19,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 4,
        opacity: 0.7
    },
    containerValue: {
        backgroundColor: 'rgba(202,191,253, 0.4 )',
        height: 30,
        borderRadius: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});