import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../theme/globalTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { useClientes } from '../hooks/useClientes';
import { data } from '../../data';
import Icon from 'react-native-vector-icons/Ionicons';
import { ClientItem } from '../components/ClientItem';

export const ClientesScreen = () => {
    const { top } = useSafeAreaInsets()
    // const { clientes } = useClientes()

    // console.log(clientes)

    return (
        <View style={{ ...styles.globalMargin, marginTop: top + 25, flex: 1 }}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={styles.title}>Listado de clientes</Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name='people-outline'
                    color='#7E3AF2'
                    size={35}
                />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <ClientItem cliente={item} />}
                keyExtractor={item => item.idCliente.toString()}
                showsVerticalScrollIndicator={false}
            />

        </View>


    )
}
