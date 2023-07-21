import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from '../theme/globalTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { data } from '../../data';
import { ClientItem } from '../components/ClientItem';

export const ClientesScreen = () => {

    const { top } = useSafeAreaInsets()


    return (
        <View style={{ ...styles.globalMargin, marginTop: top + 25, flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => <ClientItem cliente={item} />}
                keyExtractor={item => item.idCliente.toString()}
                showsVerticalScrollIndicator={false}
            />

        </View>


    )
}
