import React, { useState } from 'react'
import { ActivityIndicator, Appearance, FlatList, RefreshControl, Text, View } from 'react-native';
import { colors, styles } from '../theme/globalTheme';
import { PedidoItem } from '../components/PedidoItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePedidos } from '../hooks/usePedidos';
import { lightTheme } from '../theme/lightTheme';

export const PedidosEnProduccion = () => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });
    const [refreshing, setRefreshing] = useState(false)
    const { top } = useSafeAreaInsets();
    const { isLoading, pedidos, refreshPedidos } = usePedidos();
    const pedidosEnProduccion = pedidos?.filter(pedido => pedido.idEstadoNavigation.nombre === 'En producción');

    const onRefresh = async () => {
        setRefreshing(true);
        try {
            await refreshPedidos();
        } catch (error) {
            console.log('Error al actualizar datos:', error);
        } finally {
            setRefreshing(false);
        }
    }

    return (
        <View style={{ ...styles.globalMargin, marginTop: top + 25, flex: 1 }}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{ ...theme === 'light' ? lightTheme.title : styles.title, fontSize: 25, marginBottom: 5, }}>Pedidos en producción</Text>
            </View>

            {
                isLoading
                    ? <ActivityIndicator size={50} color={colors.colorIcon} />
                    :
                    <>

                        <FlatList
                            data={pedidosEnProduccion}
                            renderItem={({ item }) => <PedidoItem pedido={item} />}
                            keyExtractor={item => item.idPedido.toString()}
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                    progressBackgroundColor={colors.secondaryColor}
                                    colors={[colors.colorIcon]}
                                />
                            }
                        />
                    </>

            }
        </View>
    )
}
