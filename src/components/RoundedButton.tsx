import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const RoundedButton = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ height: 60, width: 60, marginBottom: 15, backgroundColor: '#7E3AF2', borderRadius: 50, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, right: 0 }}
            onPress={() => navigation.navigate("ClientesScreen" as never)}
        >
            <Icon
                name='arrow-forward-outline'
                size={30}
                color='#dfe5ea'
            />
        </TouchableOpacity>
    )
}
