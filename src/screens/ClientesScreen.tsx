import React, { useState } from 'react';
import { FlatList, RefreshControl, TouchableOpacity, View } from 'react-native';
import { colors, styles } from '../theme/globalTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ClientItem } from '../components/ClientItem';
import { useClientes } from '../hooks/useClientes';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { GoBack } from '../components/GoBack';

export const ClientesScreen = () => {
    const [refreshing, setRefreshing] = useState(false)
    const { clientes, isLoading, refreshClientes } = useClientes();
    const navigation = useNavigation();

    const onRefresh = async () => {
        setRefreshing(true);
        try {
            await refreshClientes();
        } catch (error) {
            console.log('Error al actualizar datos:', error);
        } finally {
            setRefreshing(false);
        }
    }

    const { top } = useSafeAreaInsets()
    return (
        <View style={{ ...styles.globalMargin, marginTop: top + 25, flex: 1 }}>
            {
                isLoading
                    ? <ActivityIndicator size={50} color={colors.colorIcon} />
                    :
                    <>
                        <FlatList
                            data={clientes}
                            renderItem={({ item }) => <ClientItem cliente={item} />}
                            keyExtractor={item => item.idCliente.toString()}
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
