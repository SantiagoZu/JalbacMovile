import React, { useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from 'react-native'
import { colors, styles } from '../theme/globalTheme'
import { RootStackParams } from '../navigation/StackNavigator'
import { useDetallePedido } from '../hooks/useDetallesPedido'
import { DetalleItem } from '../components/DetalleItem'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DrawerScreenProps } from '@react-navigation/drawer'

interface Props extends DrawerScreenProps<RootStackParams, 'DetallesPedidoScreen'> {};

export const DetallesPedidoScreen = ({ route }: Props) => {
    const { top } = useSafeAreaInsets()
    const [refreshing, setRefreshing] = useState(false)

    const { detalles, isLoading, refreshDetalles } = useDetallePedido();
    const idPedido = route.params.idPedido
    const detallesPedido = detalles?.filter(d => d.idPedido === idPedido)

    const onRefresh = async () => {
        setRefreshing(true);
        try {
            setTimeout(() => {
                refreshDetalles();
            }, 1000);
        } catch (error) {
            console.log('Error al actualizar datos:', error);
        } finally {
            setRefreshing(false);
        }
    }

    return (
        <View style={{ ...styles.globalMargin, marginTop: top + 25, }}>
            {
                isLoading
                    ? <ActivityIndicator size={50} color={colors.colorIcon} />
                    : ( detallesPedido?.length == 0 
                            ? <Text style={{color: 'red', fontWeight:'bold', fontSize: 20, opacity: 0.6}}>Este pedido no contiene productos</Text>
                            :
                        <FlatList
                        data={detallesPedido}
                        renderItem={({ item }) => <DetalleItem detalle={item} />}
                        keyExtractor={item => item.idDetallePedido.toString()}
                        showsVerticalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                progressBackgroundColor={colors.secondaryColor}
                                colors={[colors.colorIcon]}
                            />
                        }
                    />)
            }
        </View>
    )
}

